import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function PlantItem({ cover, name, water, light, price }) {
  return (
    <li className="lmj-plant-item">
      <span className="lmj-plant-item-price">{price}€</span>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      <h5>{name}</h5>

      <tbody>
        <tr>
          <CareScale careType="light" scaleValue={water} />
        </tr>
        <tr>
          <CareScale careType="water" scaleValue={light} />
        </tr>
      </tbody>
    </li>
  );
}

export default PlantItem;
