 
import './App.css';
 
import Compteurs from './Components/Compteurs';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Selectors from './Components/Selectors';
function App() {
  return (
    <div className="App">
 
  
 <BrowserRouter>

 <Home />
      <Routes>
         
 
        <Route path="/compteurs" element={<Compteurs />} />
        <Route path="/selectors" element={<Selectors/>} />
 
      </Routes>
    </BrowserRouter>





 


 <div>
   
    
    </div>
    </div>
  );
}

export default App;
