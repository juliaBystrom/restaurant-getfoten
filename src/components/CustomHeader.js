import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/logoWithTitle.svg";
import { useLocation } from "react-router-dom";
import SmallNav from "./SmallNav";
import { URL_PATHS } from "../utils/const"
import { IoIosArrowDown } from "react-icons/io";


export function CustomHeader() {


  const location = useLocation();

  return (
    <header id="header">
      <nav className="nav-bar">
        <ul id="nav-list-large-screen" className="nav-list">
          <li className="nav-item nav-dropdown">
            <div className="nav-link">
              Info
              <IoIosArrowDown className="dropdown-icon" />
            </div>
            <div className="dropdown-content">
              <Link className="nav-link" to={URL_PATHS.calendar}>
                Kalender
              </Link>
              <Link className="nav-link" to={URL_PATHS.hittaHit}>
                Hitta hit
              </Link>
              <Link className="nav-link" to={URL_PATHS.faq}>
                Vanliga frågor
              </Link>
            </div>
          </li>
          <li className="nav-item nav-dropdown">
            <div className="nav-link">
              Boka
              <IoIosArrowDown className="dropdown-icon" />
            </div>
            <div className="dropdown-content">
              <Link className="nav-link" to={URL_PATHS.annexet}>
                Annexet
              </Link>
              <Link className="nav-link" to={URL_PATHS.bastu}>
                Bastu
              </Link>
            </div>
          </li>
          <li id="nav-logo-item">
            <Link className="nav-link" to={URL_PATHS.home}>
              <img src={logo2} id="header-logo" alt="logo" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={URL_PATHS.gasthamn}>
              Gästhamnen
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={URL_PATHS.meny}>
              Meny
            </Link>
          </li>
        </ul>
        <SmallNav className="hide-on-none-mobile"/>
      </nav>
      {location?.pathname === URL_PATHS.home ? (
        <div id="fixed-background" className="header-background-home">
          <div className="header-background-home overlay center-item-inside">
            <h1 className="text-logo">Getfoten Sjökrog</h1>
          </div>
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