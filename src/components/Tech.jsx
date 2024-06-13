import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Tilt } from "react-tilt";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies I have worked on
        </p>
        {/* <h2 className={`${styles.sectionHeadText} text-center`}>Skills</h2> */}
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-5 mt-10">
        {technologies.map((technology, index) => (
          <div className=" " key={technology.name}>
            <Tilt className="xs:w-[130px] w-full">
              <motion.div
                variants={fadeIn("", "", index * 0.06, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
              >
                <div
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 100000,
                  }}
                  className="bg-tertiary rounded-[20px] py-2 px-3 min-h-[100px] flex justify-evenly items-center flex-col"
                >
                  <img
                    src={technology.icon}
                    alt="web-development"
                    className={`w-10 h-10 object-contain ${
                      technology.dark ? "bg-slate-500 rounded-full" : ""
                    } `}
                  />

                  <h3 className="text-white sm:text-[14px] text-[12px]  font-bold text-center">
                    {technology.name}
                  </h3>
                </div>
              </motion.div>
            </Tilt>

            {/* <BallCanvas icon={technology.icon} name={technology.name} /> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
