  
import React from "react";
 
import Zodo from "../Zodo/index.js"
import {useState} from "react";
import { Link } from "react-router-dom";
import './style.css'

const Selectors = () => {
    const [choice, setChoice] = useState(null);
  
    const [choice1, setChoice1] = useState(null);


    return (
        <div>
 
  
<br/> 
      <div className="selContainer">
        <div
          onClick={() => {
            setChoice("square1");


            
          }}
          className={choice === "square1" ? "selGreen" : "selOrange"}
        ></div>
  
        <div
          onClick={() => {
            setChoice("square2");
          }}
          className={choice === "square2" ? "selGreen" : "selOrange"}
        ></div>
   <div
          onClick={() => {
            setChoice("square3");
          }}
          className={choice === "square3" ? "selGreen" : "selOrange"}
        ></div>

 
      </div>


  <br/>
  
  <br/> 

  <div className="selContainer2">
        <div
        onClick={() => {
         setChoice1("square1");
        }}
          className={choice1 === "square1" ? "image1" : "selOrange"}

 
        ></div>
  
        <div
          onClick={() => {
            setChoice1("square2");
          }}
          className={choice1 === "square2" ? "image2" : "selOrange"}
        ></div>
   <div
          onClick={() => {
            setChoice1("square3");
          }}
          className={choice1 === "square3" ? "image3" : "selOrange"}
        ></div>

 
      </div>



      <Zodo/>

 

      </div>


















    );
  };
export default Selectors;


