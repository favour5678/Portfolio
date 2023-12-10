import React, { useEffect } from "react";
import { ImDownload2 } from "react-icons/im";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

export const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="mt-16">
      <div>
        <h1 className="inline border-b-2 border-gray-800 font-bold text-xl mt-3 ml-5" data-aos="fade-up">
          About
        </h1>
        <div className="flex items-center justify-around py-10" data-aos="zoom-in">
          <p className="w-[50%]" data-aos="zoom-in-right">
            As a full-stack developer, I seamlessly connect front-end and
            back-end technologies to craft high-performance web applications. My
            expertise lies in creating engaging user interfaces, optimizing
            server-side solutions, and integrating databases. With attention to
            detail and a commitment to innovation, I deliver tailored solutions
            for unique project needs. I am open to connecting with people,
            working, and collaborating on exciting projects.
          </p>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} data-aos="zoom-in-left">
            <span className="flex items-center space-x-2 bg-[#3366CC] text-white p-2 h-10 rounded shadow-md">
              <p>View Resume </p>
              <ImDownload2 className="animate-bounce" />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
