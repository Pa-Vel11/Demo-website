import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Dołącz do Przygodowego Newslettera
        </p>
        <p className="footer-subscription-text">
          Możesz zrezygnować w każdej chwili
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Twój email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Zapisz się</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>O nas</h2>
            <div className="group-link">
              <Link to="/zaloguj-sie">Jak to działa</Link>
              <Link to="/">Referencje</Link>
              <Link to="/">Kariera</Link>
              <Link to="/">Inwestor</Link>
              <Link to="/">Warunki serwisu</Link>
            </div>
          </div>
          <div className="footer-link-items">
            <h2>Skontaktuj się z nami</h2>
            <div className="group-link">
              <Link to="/">Kontakt</Link>
              <Link to="/">Obsługa</Link>
              <Link to="/">Firma</Link>
              <Link to="/">Sponsorzy</Link>
            </div>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Filmy</h2>
            <div className="group-link">
              <Link to="/">Prześlij film</Link>
              <Link to="/">Ambasadorzy</Link>
              <Link to="/">Agencja</Link>
              <Link to="/">Influenserzy</Link>
            </div>
          </div>
          <div className="footer-link-items">
            <h2>Media Społecznościowe</h2>
            <div className="group-link">
              <Link to="/">Instagram</Link>
              <Link to="/">Facebook</Link>
              <Link to="/">Youtube</Link>
              <Link to="/">Twitter</Link>
            </div>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRVL4U
              <i className="fa-regular fa-compass" />
            </Link>
          </div>
          <small className="website-rights">TRVL4U © 2024</small>
          <div className="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
