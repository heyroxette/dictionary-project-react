import React from "react";

export default function Synonyms(props) {

  if (props.synonyms) {
    return (
      <ul className="Synonyms">
      {props.synonyms.map(function (synonym, index) {
        return (
          <small>
            <li key={index}>{synonym}</li>
          </small>
        );
      })}
      </ul>
    );
    
   } else {
     return null;
   }
  
}