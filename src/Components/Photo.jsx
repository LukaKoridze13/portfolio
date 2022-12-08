import React from "react";
import Profile from "../images/profile.png";
export default function Photo() {
  return (
    <div
      className="photo flex items-end bg-stone-800 absolute z-0"
      style={{ width: "445px", height: "720px", top: "0px", left:"65%"}}>
      <img src={Profile} alt="Profile" className="w-full" />
    </div>
  );
}
