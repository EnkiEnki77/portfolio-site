import React from "react";
import { motion } from "framer-motion";
type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] 
    md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer 
    transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover obejct-center"
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light"></h4>
        <p className="font-bold mt-1 text-2xl"></p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" />
        </div>
        <p className="uppercase py-5 text-gray-300">Started</p>
        <ul className="list-disc space-y-4 text-lg ml-5">
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
