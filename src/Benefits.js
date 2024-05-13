import "./Benefits.css";
import glutenImg from "./img/gluten-free.png";
import fatImg from "./img/no-fat.png";
import nutrientImg from "./img/nutrient.png";
import mineralsImg from "./img/minerals.png";
import digestionImg from "./img/digestive-system.png";

export default function Benefits() {
  return (
    <div className="benefits-container">

      <h1>Benefits of Sago</h1>
      <ul className="benefits-list">
        <li>
          <img src={nutrientImg} alt="Nutrient-rich" />
          <h3>Nutrient-rich</h3>
          <p>Nutrient-rich alternative to wheat or rice</p>
        </li>
        <li>
          <img src={glutenImg} alt="Gluten-free" />
          <h3>Gluten-free</h3>
          <p>Gluten-free, ideal for those with gluten sensitivities</p>
        </li>
        <li>
          <img src={fatImg} alt="Low in fat" />
          <h3>Low in fat</h3>
          <p>Low in fat and high in carbohydrates for sustained energy</p>
        </li>
        <li>
          <img src={mineralsImg} alt="Rich in minerals" />
          <h3>Rich in minerals</h3>
          <p>Rich source of essential minerals like calcium, iron, and potassium</p>
        </li>
        <li>
          <img src={digestionImg} alt="Easy to digest" />
          <h3>Easy to digest</h3>
          <p>Easy to digest and gentle on the stomach</p>
        </li>
      </ul>
    </div>
  );
}
