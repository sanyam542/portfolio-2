import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0  from-neutral-700  bg-custom-gradient ">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <StarsCanvas />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
