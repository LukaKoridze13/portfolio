import React from "react";
import Logo from "../Components/Logo";
import Social from "../Components/Social";
import Github from "../images/github.svg";
import Linkedin from "../images/linkedin.svg";
export default function Header() {
  return (
    <header className="flex items-centermax-w-7xl m-auto justify-between pt-9 z-30 relative">
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
    </header>
  );
}
