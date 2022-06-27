import { CustomHeader } from './components/CustomHeader';
import green_ocean from "./assets/green_ocean.jpg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Meny } from "./pages/Meny";
import { HittaHit } from "./pages/HittaHit";
import {Bastu} from "./pages/Bastu"
import {Gasthamn} from "./pages/Gasthamn"

function App() {

  return (
    <div className="App">
      <CustomHeader  />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="meny" element={<Meny />} />
        <Route path="hitta-hit" element={<HittaHit />} />
        <Route path="bastu" element={<Bastu />} />
        <Route path="gasthamn" element={<Gasthamn />} />
        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
