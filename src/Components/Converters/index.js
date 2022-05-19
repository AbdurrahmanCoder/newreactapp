 
import React from "react";
 import './style.css'
import { useState } from "react";

const Converters = () => {

    const [input, setInput] = useState("");

    const [input2, setInput2] = useState("");
   return(

<div>
 <h1>EURO TO DOLLAR CONVERTER </h1>
 <h3>  EURO </h3>
<input type={"text"}
    
    
value={input}
    onChange={(event) => {
        setInput(event.target.value)

    }}


    />
<br/>
<br/>
<br/>
<h3>  DOLLAR </h3>
<div  className="displayNum"> {input * 1.05}</div>
 
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
 
<div>
<h1>EURO TO DOLLAR CONVERTER </h1>
 <h3>  EURO </h3>
<input type={"text"}
    
    
value={input2}
    onChange={(event) => {
        setInput2((event.target.value)*2)

    }}


    />
<br/>
<br/>
<br/>
<h3>  DOLLAR </h3>
<input type={"text"}
    
    
    value={input2}
        onChange={(event1) => {
            setInput2((event1.target.value)*3 )
    
        }}
    
    
        />



</div>





</div>

)




















   
}
export default Converters;


