import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/logoWithTitle.svg";
import { URL_PATHS } from "../utils/const";
import ScrollButton from "./ScrollButton";
import { useLocation } from "react-router-dom";
import { disableScroll, enableScroll } from "../utils/schroll";

export default function SmallNav() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const location = useLocation();

  // When user preses logo and navigates to home this will cose the menu on mobile (if user is not already on home)
  React.useEffect(() => {
    setOpenMenu(false);
  }, [location]);


  React.useEffect(() => {
    if (openMenu) {
      const infoHeader = window.document.getElementById("info-header")
      if(infoHeader) infoHeader.style.display = "none";
      disableScroll();
    } else {
      const infoHeader = window.document.getElementById("info-header")
      if(infoHeader) infoHeader.style.display = "block";
      enableScroll();
    }
  }, [openMenu]);


  return (
    <>
      <div id="mobile-nav-container" scroll="no">
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
              to={URL_PATHS.meny}
              onClick={() => setOpenMenu(false)}
            >
              Meny
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
          <li>
            <Link
              className="nav-link"
              to={URL_PATHS.calendar}
              onClick={() => setOpenMenu(false)}
            >
              Kalender
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
              to={URL_PATHS.faq}
              onClick={() => setOpenMenu(false)}
            >
              Vanliga frågor
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to={URL_PATHS.annexet}
              onClick={() => setOpenMenu(false)}
            >
              Boka Annexet
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to={URL_PATHS.bastu}
              onClick={() => setOpenMenu(false)}
            >
              Boka bastu
            </Link>
          </li>
        </ul>
      )}
      {!openMenu && location?.pathname === URL_PATHS.home && <ScrollButton />}
    </>
  );
}
