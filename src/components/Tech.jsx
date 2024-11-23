import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { styles } from "../styles";

const Tech = () => {
  return (
    <div className='flex flex-col items-center max-w-6xl mx-auto'>
      <p className={`${styles.sectionSubText} text-center`}>My Technical Skills</p>
      <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
        Technologies
      </h2>
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

export default Tech;
