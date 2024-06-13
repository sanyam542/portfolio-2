import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Html,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={props.showPopUp ? "#aaa6c3" : "#fff8eb"}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, name }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const renderer = useRef(null);

  useEffect(() => {
    return () => {
      if (renderer.current) {
        renderer.current.dispose(); // Dispose of context on unmount
      }
    };
  }, []);
  return (
    <>
      {showPopUp && <div className=" text-center">{name}</div>}
      <Canvas
        ref={renderer}
        frameloop="always"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        onMouseOver={() => {
          setShowPopUp(true);
        }}
        onMouseOut={() => {
          setShowPopUp(false);
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} showPopUp={showPopUp} />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  );
};

export default BallCanvas;
