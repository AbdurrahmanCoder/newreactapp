 
import React from "react";
 import './style.css'
 import { useState } from "react";
const Configurateur = () => {

const[total,setTotal]= useState(0) 
const[total1,setTotal1]= useState(0)  

 

     return (
  <div className="MainContent">
  <div className= "Menu"
  
  
        
  >CONFIGURE TON VELO </div><br/>


  <div className="Menu"> 1 - Choisis un modèle</div>

<div  
  
  onClick={()=> 
    setTotal(500)
    
} 
id="coloring"
className={total === 500 ? "products" : null}
  
  >Vélo de ville (500 Eur) </div>
  <div   
  
  
  onClick={()=>
    setTotal(700)
 }
 id="coloring"
 className={total === 700 ? "products" : null}
 >Mountain Bike (700 Eur)</div>



  <div className="Menu">2 - Choisis ta selle</div>

  <div  
    onClick={()=>
        setTotal1(20)
    }
    className={total1 === 20 ? "products" : null}
    id="coloring"
  >Classique (20 Euros)</div> 
   <div   
     onClick={()=>
        setTotal1(80)
    }
    className={total1 === 80 ? "products" : null}
    id="coloring"
   >Sur suspension (80 Euros)</div>



   <div className="Menu">PRIX FINAL { total + total1 }</div>
 

  </div>
);
};
export default Configurateur;