import React from "react";

export default function Skillbox(props) {
  return (
    <div className="skillbox text-lg" style={{ width: "300px"}}>
      <h2 className="text font-extrabold text-5xl mb-4">{props.skill}</h2>
      {parseInt(props.years) >= 1 ? (
        <p>
          {props.years} {parseInt(props.years) > 1 ? "Years" : "Year"}{" "}
          Experience
        </p>
      ) : (
        <p>Less Than a Year Experiece</p>
      )}
    </div>
  );
}
