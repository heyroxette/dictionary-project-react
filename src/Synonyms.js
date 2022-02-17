import React from "react";

export default function Synonyms(props) {

  if (props.synonyms) {
    return (
      <ul className="Synonyms mt-3">
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