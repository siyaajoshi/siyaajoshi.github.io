import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Siya } from "../assets";
import SiyaTypeWritter from "../components/SiyaTypeWritter";

const Home = () => {
  return ( 
  <section
    id="home" 
    className="flex items-center justify-center flex-col gap-12 relative"
    >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
      {/* Content Section */}
    <div className=" w-full h-full flex flex-col items-center lg:items-start justify-center gap-4"> 

      <h2 className="text-3xl lg:text-4xl text-texlight">
      Hello, It's me 
        <span className="block tracking-wider text-4xl lg:text-6xl mt-4 text-white"> 
        {" "}
        Siya Joshi
        </span>
      </h2>

      {/*typewriteer */}
      <h2 className="text-2xl  lg:4xl text-texlight mt-4"> And I'm
      <SiyaTypeWritter/>

      </h2>

    </div>

      {/* Siya's image */}
      <div className="w-full h-full flex items-start justify-center lg:item-center">
        <motion.img 
          initial = {{ y: 0}}
          animate= {{ y: [-10, 10, -10] }} 
          transitions= {{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          src={Siya} 
          className="w-auto h-auto object-contain"
        />
      </div>
    </div>
  </section>
);
};

export default Home;
