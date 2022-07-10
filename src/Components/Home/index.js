 
import React from "react";
  import { Link } from "react-router-dom";
import './style.css'
const Home = () => {
  return (
    <div>
   <div className="HeaderClass">
 
<br/>
<Link className="LINKS" to="/compteurs">COMPTEURS</Link>  
<br/>
<Link className="LINKS" to="/selectors"> SELECTORS</Link>    



<Link className="LINKS" to="/movers"> MOVERS</Link>    

<Link className="LINKS" to="/modale"> MODALE</Link>    

<Link className="LINKS" to="/converters"> Converters</Link>    


<Link className="LINKS" to="/configurateur"> CONFIGURATEUR</Link>    

<Link className="LINKS" to="/todo"> TODO</Link>    




</div>
 

 


 

    </div>
  );
};
export default Home;