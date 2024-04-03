import CardItems from "./CardItems";
import "./Card.css";

function Card() {
  return (
    <div className="cards">
      <h1>Zobacz swoje epickie przeznaczenie</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src="images/img-9.jpg"
              text="Odkryj piękno Amazoni"
              label="Przygoda"
              path="/serwis"
            />
            <CardItems
              src="images/img-2.jpg"
              text="Prywatny kurs na wyspe Bali"
              label="Luksus"
              path="/serwis"
            />
            <CardItems
              src="images/img-2.jpg"
              text="Prywatny kurs na wyspe Bali"
              label="Luksus"
              path="/serwis"
            />
            <CardItems
              src="images/img-2.jpg"
              text="Prywatny kurs na wyspe Bali"
              label="Luksus"
              path="/serwis"
            />
            <CardItems
              src="images/img-2.jpg"
              text="Prywatny kurs na wyspe Bali"
              label="Luksus"
              path="/serwis"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
