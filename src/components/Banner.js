import "../styles/Banner.css";
import logo from "../assets/logo.png";
import { Container, Navbar } from "react-bootstrap";
import { BagFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

function Banner() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const nbTotal =
    cart.length > 0 && cart.reduce((acc, curr) => parseInt(acc) + parseInt(curr.amount), 0);

  return (
    <Navbar expand="md" className="lmj-banner">
      <Container>
        <Navbar.Brand href="/">
          <img className="lmj-logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <h1 className="lmj-title">La maison de la Jungle</h1>
        <button
          onClick={() =>
            dispatch({
              type: "modal/changeVisibility",
            })
          }
        >
          <BagFill color="white" size={40} />
          <div className="draggable"><b>{nbTotal ? nbTotal : 0}</b></div>
        </button>
        
      </Container>
    </Navbar>
  );
}

export default Banner;
