import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { Button } from "./Button";
import "./Navbar.css";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a className="navbar-logo" onClick={closeMobileMenu} href="/">
            TRVL4U
            <FontAwesomeIcon icon={faCompass} />
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Strona Główna
              </a>
            </li>
            <li className="nav-item">
              <a href="/serwis" className="nav-links" onClick={closeMobileMenu}>
                Serwis
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/produkty"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Produkty
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/zaloguj-sie"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Zaloguj się
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">ZALOGUJ SIĘ</Button>}
        </div>
      </nav>
    </>
  );
};
