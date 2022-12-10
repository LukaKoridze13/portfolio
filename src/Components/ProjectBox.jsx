import React from "react";

export default function ProjectBox(props) {
  return (
    <div
      className="projectbox"
      style={{ maxWidth: "550px", minWidth: "280px" }}>
      <img
        className="w-full rounded-md"
        src={props.image}
        alt="Website preview"
        style={{aspectRatio:"16/10"}}
      />
      <h2 className="uppercase text-3xl font-extrabold mt-5">{props.name}</h2>
      <div className="usedTechs flex gap-3 flex-wrap">
        {props.used.map((item) => {
          return <p className="text-md text-gray-300">{item}</p>;
        })}
      </div>
      <div className="links mt-4">
        <a target="_blank" rel="noreferrer" href={props.website}>VIEW PROJECT</a>
        <a target="_blank" rel="noreferrer" href={props.code}>VIEW CODE</a>
        {props.back && <a href={props.back} target="_blank" rel="noreferrer">VIEW CODE (Backend)</a>}
      </div>
    </div>
  );
}
