import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className='flex flex-col items-center max-w-6xl mx-auto'>
      <motion.div variants={textVariant()} className="text-center">
        {/* <p className={`${styles.sectionSubText}`}>My Technical Skills</p> */}
        <h2 className={`${styles.sectionHeadText} mb-10`}>
          Skills
        </h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Tech, "skills");
