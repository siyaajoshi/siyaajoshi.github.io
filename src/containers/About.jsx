import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { about } from "../assets";
const About = () => {
  return (
  <section
  id="about" 
  className="flex items-center justify-center flex-col gap-12 my-12"
  >
    {/*Title */}
    <div className="w-full flex items-center justify-center py-24">
      <motion.div 
        initial={{opacity: 0, width: 0}}
        animate={{opacity: 1, width: 200}}
        exit={{opacity: 0, width: 0}}
        transition={{delay: 0.4 }}
        className=""flex items-center justify-around w-52> 
        <p className="text-transparent bg-clip-text bg-gradient-to-r text-white text-2xl"
        >--- About Me ---</p>
      </motion.div>
    </div>

    {/*/main content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
    {/* image section */}
    <div className="w-full flex items-center justify-center px-8">
      <div className="w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br from bg-primary to-secondary relative">
        <img 
          src={about} 
          className="w-full rounded-md h-auto object-contain" alt="" 
      
      />
      <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from bg-primary to-secondary rounded-md blur [5px] -z-10"></div>
       </div>
    </div>

    {/* content section */}   
    <div className="w-full px-8 flex flex-col gap-4 items-start justify-start text-center"         
      style={{ textAlign: 'center'}}>

      <p className="text-texlight text-base tracking-wide text-justify">
      📚 I am a  <span className="text-white">fourth-year Computer Science</span> student at TMU, where my <span className="text-white">enthusiasm</span> for technology and business thrives. I actively collaborate with fellow science students and facilitate hackathons, driven by a <span className="text-white">passion</span> to <span className="text-white">innovate</span> and <span className="text-white">problem-solve.</span> </p>

      <p className="text-texlight text-base tracking-wide text-justify">
      👩🏽‍💻 As a <span className="text-white">fervent</span> advocate for <span className="text-white">Women in Stem</span>, I strive to <span className="text-white">empower</span> and <span className="text-white">inspire</span> underrepresented groups in the tech industry. </p>

      <p className="text-texlight text-base tracking-wide text-justify">
      📈 My commitment to <span className="text-white">personal</span> and <span className="text-white">professional</span> growth is evident in my <span className="text-white">eagerness</span> to acquire new skills and stay updated with the latest <span className="text-white">AI and Cyber</span> developments. </p>

      <p className="text-texlight text-base tracking-wide text-justify">
      🏋🏽‍♀️ I have a <span className="text-white">keen</span> interest in <span className="text-white">physical fitness.</span>  </p>

      <p className="text-texlight text-base tracking-wide text-justify">
      🐶 A devoted <span className="text-white">dog</span> lover (I have a 9 yr-old furbaby) </p>
      
      <p className="text-texlight text-base tracking-wide text-justify">
      🏎️ A <span className="text-white">Formula 1</span> enthusiast, <span className="text-white">dreaming</span> of the day I can drive on the <span className="text-white">autobahn</span> in Germany, experiencing the thrill of <span className="text-white">unrestricted</span> speed firsthand 🇩🇪  </p>
      </div> 
    </div>
  </section>
  );
};

export default About;
