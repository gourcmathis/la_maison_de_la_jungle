import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import Modal from "./Modal";
import "../styles/ShoppingList.css";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ShoppingList() {
  const cart = useSelector((state) => state.cart);
  const cat = useSelector((state) => state.cat);
  const dispatch = useDispatch();

  const addToCart = (name, price, cover, category) => {
    showToastMsg(name);
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      dispatch({
        type: "cart/addAmount",
        payload: { name, amount: 1 },
      });
    } else {
      dispatch({
        type: "cart/addPlant",
        payload: { category, cover, name, price, amount: 1 },
      });
    }
  };

  const showToastMsg = (name) => {
    toast.success(`${name} ajouté au panier`, {
      icon: "🌱",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  return (
    <div className="lmj-shopping-list">
      <ToastContainer />
      <Categories />

      <ul className="lmj-plant-list">
        {plantList.map(
          ({ id, cover, name, water, light, price, category, description }) =>
            !cat || cat === category ? (
              <div className="card-wrapper" key={id}>
                <div id="cards" className="card">
                  <div className="card-front">
                    <PlantItem
                      cover={cover}
                      name={name}
                      water={water}
                      light={light}
                      price={price}
                    />
                  </div>
                  <div className="card-back">
                    <span style={{ fontSize: "17px" }}>{description}</span>
                    <button
                      onClick={() => addToCart(name, price, cover, category)}
                    >
                      Ajouter
                    </button>
                  </div>
                </div>
              </div>
            ) : null
        )}
      </ul>
      <Modal />
    </div>
  );
}

export default ShoppingList;
