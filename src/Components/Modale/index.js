import "./style.css";
import {useState} from "react";

const Modale = () => {

    const [show, setShow] = useState(false);
  return (
    <>
      <div className="modaleContainer">
        <button
          onClick={() => {
            setShow(true )
           
          }}
          
        >
          Ouvrir Modale
        </button>
      </div>



    { show === true ? ( 
      <div
        className="myModal"
        onClick={() =>  {
           console.log( "fzefzefzefz")
        setShow(false)
        
        
        }}
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Red_Panda_%2824986761703%29.jpg/220px-Red_Panda_%2824986761703%29.jpg" />
      </div>
      ):null
      
      }
    </>
  );
};

export default Modale;