import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
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
};

const About = () => {
  return (
    <div className='flex flex-col items-center'>
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
        We are the universe tasting itself, talking to itself, reading its own code. Carl Sagan’s profound words inspired my pursuit of a <span style={{ color: '#915eff' }}>bachelor's degree in bioengineering</span> and a <span style={{ color: '#915eff' }}>minor in materials science engineering</span> at the University of Illinois Urbana-Champaign. This spring, <span style={{ color: '#915eff' }}>I am conducting bioastronautics research at NASA Kennedy Space Center’s Microgravity Simulation Support Facility (MSSF)</span>. I’m collaborating with scientists to examine how low-gravity environments affect the growth, development, and morphology of biological organisms. This research is key to developing human health countermeasures for long-duration spaceflight so humans can establish a long-term presence on the Moon, Mars, and other planetary surfaces.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-left'
      >
        I am also very interested in power systems, so I am currently pursuing a <span style={{ color: '#915eff' }}>master’s degree in electrical and computer engineering</span> at the University of Illinois Urbana-Champaign. This summer, <span style={{ color: '#915eff' }}>I am working on SpaceX’s launch high power electrical engineering team</span>, supporting the design, operation, and troubleshooting of facility electrical components and systems. I earned my EIT certification in May 2024 and am currently studying for the PE Electrical and Computer: Power Exam to obtain my PE license.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-left'
      >
        I am a dedicated leader focused on delivering excellence to the United States of America through intelligence and innovation. I have over one year of applied engineering experience in programming, modeling and simulation, electrical systems, and quality assurance. Proficient in <span style={{ color: '#915eff' }}>Python</span>, <span style={{ color: '#915eff' }}>C++</span>, <span style={{ color: '#915eff' }}>MATLAB</span>, <span style={{ color: '#915eff' }}>SolidWorks</span>, <span style={{ color: '#915eff' }}>AutoCAD</span>, and <span style={{ color: '#915eff' }}>Microsoft Office tools</span>, I am eager to leverage my technical skills to develop technologies that keep people safe and advance humanity beyond the stars.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
