import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const Skill = (props: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: props.directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ opacity: 0, x: 0 }}
        transition={{ duration: 1 }}
        className="rounded-full border border-gray-500 h-24 w-24 object-cover xl:w-32 xl:h-32 filter group-hover:grayscale
        transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white/80
      h-24 w-24 xl:w-32 xl:h-32 rounded-full z-0"
      >
        <div className="flex items-center justify center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
