import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { B2Canvas } from "./canvas";

const Hero = () => {
  const heroRef = useRef(null);
  const [isB2Visible, setB2Visible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setB2Visible(true);
          } else {
            setB2Visible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-screen mx-auto flex justify-center items-center">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] w-full max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center">
            <h1 className={`${styles.heroHeadText} text-white mt-24`}>
              Hi, I'm <span className='text-[#915EFF]'>Edward</span>
            </h1>
            <div>
              {/* <div className="loader"></div> */}
            </div>
          </div>
          <div className="flex flex-col w-full items-center justify-center">
            <p className={`${styles.heroSubText} text-white-100 text-center`}>
              Master's Electrical & Computer Engineering Student<br className='sm:block hidden' />
            </p>
          </div>
          <div>
            {isB2Visible && <B2Canvas />}
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
