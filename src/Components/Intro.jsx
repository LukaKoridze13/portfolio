import React from "react";

export default function Intro() {
  return (
    <div className="intro m-auto w-full mt-32 z-30 relative">
      <p className="text-7xl font-bold w-2/3 heading">
        Nice to meet you! <br /> I’m{" "}
        <span className="underline underline-offset-8 decoration-green-600">
          Luka Koridze
        </span>
        .
      </p>
      <p className="small text-xl dark:text-gray-300 max-w-md mt-11">
        Based in Tbilisi, Georgia. I’m a full-stack developer passionate about building
        accessible web apps that users love.
      </p>
    </div>
  );
}
