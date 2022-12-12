import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className="flex items-center ">
        <SocialIcon
          url="https://twitter.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
      <div>
        <SocialIcon
          className="cursor-pointer"
          url="https://twitter.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
          network="email"
        />
        <p className="uppercase hidden md:inline-flex">get in touch</p>
      </div>
    </header>
  );
};

export default Header;
