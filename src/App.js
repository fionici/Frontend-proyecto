import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/navigation";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Destinos from "./pages/Destinos";
import Registrarse from "./pages/Registrarse";
import Habitaciones from "./pages/Habitaciones";
import 'bootstrap/dist/css/bootstrap.min.css';







function App() {
  return (
    <>
     <Navigation/>
     <div>
      <img src="./logo.png" alt="" />
     </div>
    <div className="App">
     </div>
  
    
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/servicios" element={<Servicios/>}/>
      <Route path="/destinos" element={<Destinos/>}/>
      <Route path="/habitaciones" element={<Habitaciones/>}/>
      <Route path="/registrarse" element={<Registrarse/>}/>
    </Routes>
    </>
  
  );
}



export default App;
