import React from "react";

import { Link } from "react-router-dom";
import logo2 from "../assets/logoWithTitle.svg";
import { URL_PATHS } from "../utils/const";
export default function SmallNav() {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <>
      <div id="mobile-nav-container">
        <div id="small-header-nav">
          <Link className="nav-link" to={URL_PATHS.home}>
            <img src={logo2} id="header-logo" alt="logo" />
          </Link>
          <button
            id="hamburger-menu-button"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span
              className={
                openMenu
                  ? "hamburger-icon-open hamburger-icon"
                  : "hamburger-icon"
              }
            >
              <div></div>
              <div></div>
              <div></div>
            </span>
          </button>
        </div>
      </div>

      {openMenu && (
        <ul className="nav-list-small">
          <li style={{ borderTop: "1px solid #1c1c1c" }}>
            <Link
              className="nav-link"
              to={URL_PATHS.home}
              onClick={() => setOpenMenu(false)}
            >
              Hem
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to={URL_PATHS.meny}
              onClick={() => setOpenMenu(false)}
            >
              Meny
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to={URL_PATHS.hittaHit}
              onClick={() => setOpenMenu(false)}
            >
              Hitta hit
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to={URL_PATHS.bastu}
              onClick={() => setOpenMenu(false)}
            >
              Bastu
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to={URL_PATHS.gasthamn}
              onClick={() => setOpenMenu(false)}
            >
              Gästhamnen
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
