import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import gmail from "../assets/gmail.svg";
import linkedin from "../assets/linkedin.svg";

const Contact = () => {
  const formRef = useRef();
  const earthRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isEarthVisible, setEarthVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setEarthVisible(true);
          } else {
            setEarthVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (earthRef.current) {
      observer.observe(earthRef.current);
    }

    return () => {
      if (earthRef.current) {
        observer.unobserve(earthRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Wasif Somji",
          from_email: form.email,
          to_email: "wasifsomji@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Thank you for reaching out. I will be in touch as soon as possible.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>
        <div className='mt-12 flex flex-col gap-8 items-center'>
          <a href="https://www.linkedin.com/in/edwardromero25/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className='w-25 h-25' />
          </a>
          <a href="mailto:eromero4@illinois.edu">
            <img src={gmail} alt="Gmail" className='w-16 h-16' />
          </a>
        </div>
      </motion.div>

      <motion.div
        ref={earthRef}
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        {isEarthVisible && <EarthCanvas />}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
