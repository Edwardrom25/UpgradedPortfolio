import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  deploy_link,
}) => {
  const CardContent = () => (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {deploy_link ? (
        <a href={deploy_link} target="_blank" rel="noopener noreferrer">
          <CardContent />
        </a>
      ) : (
        <CardContent />
      )}
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col items-center justify-center">
        <p className={`${styles.sectionSubText} text-center`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>

      <div className='w-full flex justify-center items-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-left'
        >
          The projects below demonstrate my ability to work in a team and apply engineering concepts to real-world challenges.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
