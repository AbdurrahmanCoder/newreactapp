  
import React from "react";
 
import { useState } from "react";
 
const Todo = () => {
 
const ListData = [



    

 {  data :"abdur rahman "

}

]

 
const[list,setList] = useState("");
    return (

   
<div >
  
<h1>TO DO LIST </h1>



<input 
type={"text"} 
// value={list}

onChange={(event)=>{
   // console.log(event.target.value)
  
    setList(event.target.value)
  }} />


< br/>
< br/>
< br/>
< br/>
{/* <button
onClick={()=>{
 
  

    ListData[1].data.push(list)
} 
}   
>ADD TO LIST</button>  */}


<button
            onClick={() => {
 
              const classCopy = [...ListData];
               
              classCopy.push({
                name: list
               });
     
               setList(ListData);
 
          
              list("");
            }}
          >
            Ajouter un nouvel élève
          </button>






<div>  {list} </div> 
{ 
console.log(ListData) 
} 
  </div> 
 
    );
};
export default Todo;