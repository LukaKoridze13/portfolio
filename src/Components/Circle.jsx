import React from "react";
import Ci from "../images/pattern-circle.svg";
export default function Circle() {
  return (
    <img
      src={Ci}
      alt="ci"
      className="absolute z-10 circle"
      style={{ top: "526px", left: "60%" }}
    />
  );
}
