import { CustomHeader } from "./components/CustomHeader";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Meny } from "./pages/Meny";
import { HittaHit } from "./pages/HittaHit";
import { Bastu } from "./pages/Bastu";
import { Gasthamn } from "./pages/Gasthamn";
import { InformationHeader } from "./components/InformationHeader";
import { Oppettider } from "./pages/Oppettider";
import { FAQ } from "./pages/Faq";

function App() {
  return (
    <div className="App">
      <InformationHeader />
      <CustomHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="meny" element={<Meny />} />
        <Route path="hitta-hit" element={<HittaHit />} />
        <Route path="bastu" element={<Bastu />} />
        <Route path="gasthamn" element={<Gasthamn />} />
        <Route path="oppettider" element={<Oppettider />} />
        <Route path="faq" element={<FAQ />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
