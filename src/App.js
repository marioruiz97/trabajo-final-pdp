import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './pages/Inicio';
import Jugar from "./pages/Jugar";


const App = () => {

  return (
    <div className="App">
    <Router>    
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/jugar/:nombre/:categoria/:dificultad" element={<Jugar />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;

