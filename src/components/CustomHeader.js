import React from "react";
import ScrollButton from "./ScrollButton";
import { Link } from "react-router-dom";
import logo2 from "../assets/logoWithTitle.svg";
import { useLocation } from "react-router-dom";

export function CustomHeader() {
  const URL_PATHS = {
    home: "/",
    meny: "/meny",
    hittaHit: "/hitta-hit",
  };

  const [transparent, setTransparent] = React.useState(true);
  const location = useLocation();

  /*
    If the user scrolled past the header, make the header non trasparant.
  */
  const toggleTransparent = () => {
    const scrolledToY = window.scrollY;
    var headerHeight = document.getElementById("header").offsetHeight;

    if (headerHeight < scrolledToY + 90) {
      if (transparent) {
        setTransparent(false);
      }
    } else if (!transparent) {
      setTransparent(true);
    }
  };

  window.addEventListener("scroll", toggleTransparent);

  return (
    <header id="header">
      <nav className={!transparent ? "nav-bar nav-bar-solid" : "nav-bar"}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-link" to="meny">
              Meny
            </Link>
          </li>
          <li id="nav-logo-item">
            <Link className="nav-link" to="/">
                <img src={logo2} id="header-logo" alt="logo" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="hitta-hit">
              Hitta hit
            </Link>
          </li>
        </ul>
      </nav>
      {location?.pathname === URL_PATHS.home ? (
        <div id="fixed-background" className="header-background-home">
          <div className="header-background-home overlay center-item-inside">
            <h1 className="text-logo">Getfotens Sjökrog</h1>
          </div>
          <ScrollButton />
        </div>
      ) : (
        <div id="fixed-background" className="header-background">
          <div className="header-background overlay center-item-inside">
            <h1 className="text-logo">Getfotens Sjökrog</h1>
          </div>
        </div>
      )}
    </header>
  );
}
