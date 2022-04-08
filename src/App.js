import green_ocean from "./assets/green_ocean.jpg";
import "./App.css";
import logo2 from "./assets/logoWithTitle.svg";
import { Routes, Route, Link } from "react-router-dom";
import { Footer } from "./components";
import { Home } from "./pages/Home";
import { Meny } from "./pages/Meny";
import { HittaHit } from "./pages/HittaHit";

function App() {
  return (
    <div className="App">
      <header id="header">
        <nav id="nav-bar">
          <a href="/">
            <img src={logo2} id="header-logo" alt="logo" />
          </a>
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Startsida
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="meny">
                Meny
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="hitta-hit">
                Hitta hit
              </Link>
            </li>
          </ul>
        </nav>
        <div id="fixed-background"></div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="meny" element={<Meny />} />
        <Route path="hitta-hit" element={<HittaHit />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
