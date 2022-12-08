import React from "react";

export default function Social(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <img src={props.src} alt={props.alt} />
    </a>
  );
}
