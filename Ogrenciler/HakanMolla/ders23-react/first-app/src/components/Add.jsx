import  { useState,  } from "react";
import React from 'react'


export const Add = () => {
    let [text, setText] = useState("");

    function addButton(e) {
        console.log("Tıklandı");
        setText(e.target.value);
      }
   
  return (
    <div>
        <label>
    Değer giriniz:
    <input type="text" name="name" onKeyUp={addButton} />
    
  </label>
  <p>{text}</p>
    </div>
  )
}
