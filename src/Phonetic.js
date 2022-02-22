import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  
  return (
    <div className="Phonetic mt-2">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <span>{props.phonetic.text}</span>
    </div>
  );
}