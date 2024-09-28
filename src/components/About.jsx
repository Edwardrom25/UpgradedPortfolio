import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) =>  {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

const About = () => {
  return (
    <div id="about" className='flex flex-col items-center pt-20'>
      <motion.div variants={textVariant()} className='text-center'>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-left'
      >
        “The nitrogen in our DNA. The calcium in our teeth. The iron in our blood. The carbon in our apple pies were made in the interiors of collapsing stars. We are made of star stuff.”
      </motion.p>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-left'
      >
        We are the universe tasting itself, talking to itself, reading its own code. Carl Sagan’s profound words inspired my pursuit of a <span style={{ color: '#915eff' }}>B.S. in Bioengineering</span> and a <span style={{ color: '#915eff' }}>Minor in Materials Science Engineering</span> at the University of Illinois Urbana-Champaign, focusing on researching and developing materials that enhance the sustainability, survivability, and operational efficiency of crew and electronic devices in aerospace vehicles.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-left'
      >
        I am currently pursuing a <span style={{ color: '#915eff' }}>Master’s Degree in Electrical and Computer Engineering</span> from the University of Illinois Urbana-Champaign. I am seeking internship and full-time positions that will allow me to work as an engineer involved in high-profile testing and integration of flight hardware and software in defense and space technologies.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-left'
      >
        Through internships and team projects, I've gained hands-on experience in programming, modeling and simulation, electrical systems, manufacturing, and quality assurance. Proficient in <span style={{ color: '#915eff' }}>Python</span>, <span style={{ color: '#915eff' }}>C++</span>, <span style={{ color: '#915eff' }}>MATLAB</span>, <span style={{ color: '#915eff' }}>Simulink</span>, <span style={{ color: '#915eff' }}>SolidWorks</span>, <span style={{ color: '#915eff' }}>Altium Designer</span>, <span style={{ color: '#915eff' }}>LabVIEW</span>, and <span style={{ color: '#915eff' }}>Microsoft Office tools</span>, I am eager to leverage my technical skills to develop technologies that keep people safe and advance humanity beyond the stars.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default About;
