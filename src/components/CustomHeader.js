import React from "react";
import ScrollButton from "./ScrollButton";
import { Link } from "react-router-dom";
import logo2 from "../assets/logoWithTitle.svg";
import { useLocation } from "react-router-dom";
import SmallNav from "./SmallNav";
import {URL_PATHS} from "../utils/const"
export function CustomHeader() {


  const location = useLocation();

  return (
    <header id="header">
      <HeaderWrapper>
        <ul id="nav-list-large-screen" className="nav-list">
          <li className="nav-item">
            <Link className="nav-link" to={URL_PATHS.meny}>
              Meny
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={URL_PATHS.hittaHit}>
              Hitta hit
            </Link>
          </li>
          <li id="nav-logo-item">
            <Link className="nav-link" to={URL_PATHS.home}>
              <img src={logo2} id="header-logo" alt="logo" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={URL_PATHS.bastu}>
              Bastu
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={URL_PATHS.gasthamn}>
              Gästhamnen
            </Link>
          </li>
        </ul>
        <SmallNav />
      </HeaderWrapper>
      {location?.pathname === URL_PATHS.home ? (
        <div id="fixed-background" className="header-background-home">
          <div className="header-background-home overlay center-item-inside">
            <h1 className="text-logo">Getfoten Sjökrog</h1>
          </div>
          <ScrollButton />
        </div>
      ) : (
        <div id="fixed-background" className="header-background">
          <div className="header-background overlay center-item-inside">
            <h1 className="text-logo">Getfoten Sjökrog</h1>
          </div>
        </div>
      )}
    </header>
  );
}

export const HeaderWrapper = ({ children }) => {
  const [transparent, setTransparent] = React.useState(true);
  window.addEventListener(
    "scroll",
    () => {
      scrolling = true;
    },
    { passive: true }
  );

  let scrolling = false;
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

  // Minimizes the amount of calls to toggleTransparent()
  setInterval(() => {
    if (scrolling) {
      scrolling = false;
      toggleTransparent();
    }
  }, 400);

  return (
    <nav className={!transparent ? "nav-bar nav-bar-solid" : "nav-bar"}>
      {children}
    </nav>
  );
};
