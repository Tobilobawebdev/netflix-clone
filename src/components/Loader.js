import React from 'react';
import { motion } from 'framer-motion';

const item = {
  hidden: {
    opacity: 0,
    translateX: -50,
    translateY: -50,
  },
  show: {
    opacity: 1,
    translateX: 0,
    translateY: 0,
  },
  transition: {
    duration: 0.3,
    delay: 0.5,
  },
};
function Loader() {
  return (
    <motion.div
      initial={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        x: "100%",
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
      className="w-[100vw] scrollbar-hide h-[100vh] overflow-hidden absolute top-0 left-0 right-0 bottom-0 justify-center items-center z-50 bg-black"
    >
      <motion.div
        variants={item}
        className="flex-row flex  text-center md:text-6xl text-4xl mt-[30%] mx-auto ml-[40%] mt-[20%] font-bold text-red-600 "
      >
        <h1>N</h1>
        <motion.h1
          variants={item}
          initial="hidden"
          animate="show"
        >E</motion.h1>
        <motion.h1
          variants={item}
          initial="hidden"
          animate="show"
        >T</motion.h1>
        <motion.h1
          variants={item}
          initial="hidden"
          animate="show"
        >F</motion.h1>
        <motion.h1
          variants={item}
          initial="hidden"
          animate="show"
        >L</motion.h1>
        <motion.h1
          variants={item}
          initial="hidden"
          animate="show"
        >I</motion.h1>
        <motion.h1
          variants={item}
          initial="hidden"
          animate="show"
        >X</motion.h1>
      </motion.div>
    </motion.div>
  );
}

export default Loader;
