import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { RiNodejsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Technology = () => {
  return (
    <div className="pb-24 border-t border-stone-900 text-white">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className=" my-20 text-center text-4xl "
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className=" flex flex-wrap items-center justify-evenly gap-4"
      >
        <div className="text-8xl text-cyan-400 px-12 hover:scale-110">
          <RiReactjsFill />
        </div>
        <div className="text-8xl  px-12 hover:scale-110">
          <RiNextjsLine />
        </div>
        <div className="text-8xl text-green-500 px-12 hover:scale-110">
          <RiNodejsFill />
        </div>
        <div className="text-8xl text-blue-400 px-12 hover:scale-110">
          <RiTailwindCssFill />
        </div>
      </motion.div>
    </div>
  );
};

export default Technology;
