import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { motion } from "framer-motion";
import NehaProfilePic from "../assets/projects/NehaProfilePic.jpg";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className=" flex flex-col-reverse md:flex-row items-center justify-center gap-5 w-full my-4 px-4 md:px-0">
      <div className=" text-white w-full md:w-1/2 mt-8 md:mt-0">
        <motion.h3
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className=" text-xl text-gray-400 tracking-widest "
        >
          WELCOME TO MY WORLD
        </motion.h3>
        <motion.div
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className=" pt-4 leading-normal "
        >
          <h1 className="text-4xl md:text-6xl">
            Hi, I'm{" "}
            <span className=" bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 bg-clip-text text-purple-300 ">
              Neha Arun Patil
            </span>{" "}
            <TypeAnimation
              sequence={[
                "a Frontend Developer.",
                1000,
                "a Web Designer.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="inline-block"
              repeat={Infinity}
            />
          </h1>
        </motion.div>
        <div className=" mt-6 text-gray-300 leading-relaxed ">
          <motion.p variants={container(1)} initial="hidden" animate="visible">
            I am a passionate frontend developer eager to learn and contribute
            to exciting projects. I have experience in creating responsive
            designs and love bringing ideas to life through code. Motivated and
            detail-oriented Frontend Developer with a strong foundation in HTML,
            CSS, and JavaScript. Experienced in working with modern frameworks
            like React js and familiar with version control systems like Git.
            Skilled in building responsive, user-friendly websites and web
            applications. Adept at problem-solving and continuously learning new
            technologies to stay current with industry trends.
          </motion.p>
        </div>

        <div className=" mt-8 md:mt-16">
          <motion.p
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
          >
            FIND ME
          </motion.p>
          <motion.div
            variants={container(1.7)}
            initial="hidden"
            animate="visible"
            className="flex space-x-4 mt-4 md:mt-6"
          >
            <a
              href="https://www.instagram.com/nehuu_102?igsh=ZDRudHVjb2F1eTF3"
              className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 md:p-3"
              aria-label="Instagram"
            >
              <div className="text-xl md:text-2xl text-pink-400">
                <FaInstagram />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/neha-patil-8440542b7/"
              className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 md:p-3"
              aria-label="LinkedIn"
            >
              <div className="text-xl md:text-2xl">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/patilnehu"
              className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 md:p-3"
              aria-label="Github"
            >
              <div className="text-xl md:text-2xl">
                <IoLogoGithub />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
      <div className=" w-full md:w-1/2 flex items-center justify-center">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          src={NehaProfilePic}
          className=" w-2/3 rounded-xl object-cover "
        />
      </div>
    </div>
  );
};

export default Hero;
