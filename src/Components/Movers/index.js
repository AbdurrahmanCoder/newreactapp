import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import { useState } from "react";

const Movers = ()=>{


    const [distanceX,setDistanceX]= useState(0)

    const [distanceY,setDistanceY]= useState(0)

    return(
        <div className="moversContainer">
<div>


<button    onClick={() => {




           setDistanceX(distanceX - 100);
        }} > {"<"} </button>


<button    onClick={() => {
         
          setDistanceX(distanceX +100);
        }} > {">"} </button>



 <button    onClick={() => {
         
         setDistanceY(distanceY + 10);
        }} > {"DOWN"} </button>

<button    onClick={() => {
         
         setDistanceY(distanceY - 10);
        }} > {"UP"} </button>

 
 


<div className="image"  style={{ transform: `translate(${distanceX}px,${distanceY}px)` }}>
 


</div>



</div>
</div>
)


}


export default Movers ;