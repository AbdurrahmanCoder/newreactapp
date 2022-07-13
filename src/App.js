 
import './App.css';
 
import Compteurs from './Components/Compteurs';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Selectors from './Components/Selectors';
import Converters from './Components/Converters';
import Movers from './Components/Movers';
import Modale from './Components/Modale';

import Configurateur from './Components/Configurateur';

import Todo from './Components/Todo';
function App() {
  return (
    <div className="App">
 
  
 <BrowserRouter>

 <Home />
      <Routes>
         
 
        <Route path="/compteurs" element={<Compteurs />} />
        <Route path="/selectors" element={<Selectors/>} />
        <Route path="/movers" element={<Movers/>} />
        <Route path="/modale" element={<Modale/>} />
        <Route path="/converters" element={<Converters/>} />
        <Route path="/configurateur" element={<Configurateur/>} />
        <Route path="/Todo" element={<Todo/>} />

      </Routes>
    </BrowserRouter>


 
    


 <div>
   
    
    </div>
    </div>
  );
}

export default App;
