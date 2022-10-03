import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Cart.css";

function Cart() {
  const [isOpen, setIsOpen] = useState(true);

  const cart = useSelector((state) => state.cart);

  const total =
    cart.length > 0 &&
    cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0);
  const dispatch = useDispatch();

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map((plant) => (
              <div key={plant.id}>
                {plant.name} {plant.price}€ x {plant.amount}
              </div>
            ))}
          </ul>
          <h3>Total : {total}€</h3>

          <button
            onClick={() =>
              dispatch({
                type: "cart/cleanCart",
              })
            }
          >
            Vider le panier
          </button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
