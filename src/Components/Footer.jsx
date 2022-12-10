import React from "react";
import Logo from "../Components/Logo";
import Social from "../Components/Social";
import Github from "../images/github.svg";
import Linkedin from "../images/linkedin.svg";
export default function Footer() {
  return (
    <footer className="flex items-center max-w-7xl m-auto justify-between pt-9 z-30 relative border-t-2 border-white mt-16 pb-8">
      <Logo logo="Luka Koridze" />
      <div className="socials flex items-center gap-8">
        <Social
          src={Github}
          alt="Github"
          link="https://github.com/LukaKoridze13"
        />
        <Social
          src={Linkedin}
          alt="Linkedin"
          link="https://www.linkedin.com/in/lukakoridze/"
        />
      </div>
    </footer>
  );
}