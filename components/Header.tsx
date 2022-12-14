import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex sticky top-0 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center "
      >
        <SocialIcon
          url="https://github.com/EnkiEnki77"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/austin-layman-0b0079122/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://github.com/EnkiEnki77"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center cursor-pointer text-gray-300"
      >
        <SocialIcon
          className="cursor-pointer"
          url="https://twitter.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
          network="email"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          get in touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
