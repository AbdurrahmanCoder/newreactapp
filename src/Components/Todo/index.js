 
  import React from "react";
 import { useState } from "react";
 
const Todo = () => {
 
const[list,setList] = useState({firstname:'', lastname:''});
//    function clickedmeon (){
// console.log("khan")
//    }
return (

   <div> 
<h1>TO DO LIST </h1>

<input 
type={"text"} 
 value={list.firstname }

onChange={(event)=>{
   // console.log(event.target.value)

   
  setList(event.target.value)
  }} />
 
 <input 
type={"text"} 
// value={list}

onChange={(event)=>{
   // console.log(event.target.value)

   
  setList(event.target.value)
  }} />



<button >
            Ajouter un nouvel élève
          </button>



<p>uploading on github</p>
<div>  {list.firstname} </div> 
 
{/* <div>  {list.lastname} </div>  */}

 
  </div> 
 
    );
};
export default Todo;