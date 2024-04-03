import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted></video>
      <h1>PRZYGODA CZEKA!!!</h1>
      <p>Zacznij podróżować już dziś</p>
      <div className="hero-btns">
        <Button
          className="'btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Zacznij podróżować
        </Button>
        <Button
          className="'btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Zobacz video <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
