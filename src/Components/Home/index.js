 
import React from "react";
  import { Link } from "react-router-dom";
import './style.css'
const Home = () => {
  return (
    <div>
   <div className="HeaderClass">

<Link className="LINKS" to="/home"> HOME</Link>    
<br/>
<Link className="LINKS" to="/compteurs">COMPTEURS</Link>  
<br/>
<Link className="LINKS" to="/selectors"> SELECTORS</Link>    
</div>
 












 
    </div>
  );
};
export default Home;