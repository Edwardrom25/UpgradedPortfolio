import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faComment, faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";

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

    // Validation: Check if all fields are filled
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all the fields before submitting.", {
        duration: 3000,
        position: "bottom-right",
      });
      return; // Prevent submission if any field is empty
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_j1ajrhx", // Service ID
        "template_kyik2yf", // Template ID
        formRef.current, // Form reference
        "HqrCQ-W3xHWgkUHuS" // Public key
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thank you! I will get back to you as soon as possible.", {
            duration: 3000,
            position: "bottom-right",
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          toast.error("Something went wrong. Please try again.", {
            duration: 3000,
            position: "bottom-right",
          });
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <Toaster 
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
        }}
      />
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex-1">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="mr-2"
                    style={{ color: "rgb(145, 94, 255)" }}
                  />
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
            </div>
            <div className="flex-1">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mr-2"
                    style={{ color: "rgb(145, 94, 255)" }}
                  />
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
            </div>
          </div>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              <FontAwesomeIcon
                icon={faComment}
                className="mr-2"
                style={{ color: "rgb(145, 94, 255)" }}
              />
              Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full green-pink-gradient p-[1px] rounded-[8px] hover:scale-105 transition-transform duration-200"
          >
            <div className="bg-tertiary rounded-[8px] py-3 px-8 flex justify-center items-center">
              {loading ? (
                <FontAwesomeIcon icon={faSpinner} spin />
              ) : (
                <span className="flex items-center text-white font-bold">
                  Send Message
                  <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                </span>
              )}
            </div>
          </button>
        </form>
      </motion.div>

      <motion.div
        ref={earthRef}
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {isEarthVisible && <EarthCanvas />}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
