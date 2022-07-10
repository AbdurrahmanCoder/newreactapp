 
import { Link } from "react-router-dom";
 
import {useState} from "react";
 
import './style.css'


const Compteurs =() =>{


    // let count = 0;

    const[compteur1,setCompteur1] = useState(0) 

    const[compteur2,setCompteur2] = useState(0) 

    return(
        <div>
    

    <p>Compteur 1 </p>
  
    {compteur1 >= 0 ? (
<button onClick ={ () => {
    setCompteur1(compteur1 - 1) }} > -</button>
   
   
   ) : (<div>stop</div>)}

<div> {compteur1}</div>
 
{compteur1  <= 10 ? (
<button onClick={()=>{
 setCompteur1(compteur1 + 1 )
  
}}> + </button>

): null}



<p>Compteur 2 </p>



    {compteur2 >= 0 ? (
<button onClick ={ () => {
    setCompteur2(compteur2 - 1) }} > - </button>
   
   
   ) : null}

<div> {compteur2}</div>
 
{compteur2  <= 10 ? (
<button onClick={()=>{
 setCompteur2(compteur2 + 1 )
 
 
}}> + </button>

): null}


  <div>

      </div>

 
 
  
result :{compteur1+compteur2} 
 
 
        </div>


)


}

export default Compteurs;
