import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen flex relative flex-col xl:flex-row text-center md:text-left xl:px-10 max-w-[2000px] min-h-screen
    justify-center xl:spac-y-0 items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500 ">
        Skills
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
