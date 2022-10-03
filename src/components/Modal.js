import { useDispatch, useSelector } from "react-redux";
import "../styles/Modal.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useState } from "react";

const Modal = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const total =
    cart.length > 0
      ? cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0)
      : 0;

  const nbTotal =
    cart.length > 0 &&
    cart.reduce((acc, curr) => parseInt(acc) + parseInt(curr.amount), 0);

  const [ship, setShip] = useState(5.0);

  return (
    modal && (
      <div
        onClick={() =>
          dispatch({
            type: "modal/changeVisibility",
          })
        }
        className="modalBackground"
      >
        <div className="modalContainer">
          <section>
            <MDBContainer className="py-5">
              <MDBRow className="justify-content-center align-items-center">
                <MDBCol size="12">
                  <MDBCard
                    className="card-registration card-registration-2"
                    style={{ borderRadius: "15px" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MDBCardBody className="p-0">
                      <MDBRow className="g-0">
                        <MDBCol lg="8">
                          <div className="p-5">
                            <div className="d-flex justify-content-between align-items-center mb-5">
                              <MDBTypography
                                tag="h1"
                                className="fw-bold mb-0 text-black"
                              >
                                Mon Pannier
                              </MDBTypography>
                              <MDBTypography className="mb-0 text-muted">
                                {nbTotal ? parseInt(nbTotal) + " plante(s)" : "Panier vide"} 
                              </MDBTypography>
                            </div>

                            <hr className="my-4" />

                            {cart.map((plant) => (
                              <div key={plant.id}>
                                <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                  <MDBCol md="2" lg="2" xl="2">
                                    <MDBCardImage
                                      src={plant.cover}
                                      fluid
                                      className="rounded-3"
                                      alt={plant.name}
                                    />
                                  </MDBCol>
                                  <MDBCol md="3" lg="3" xl="3">
                                    <MDBTypography
                                      tag="h6"
                                      className="text-muted"
                                    >
                                      {plant.category}
                                    </MDBTypography>
                                    <MDBTypography
                                      tag="h6"
                                      className="text-black mb-0"
                                    >
                                      {plant.name}
                                    </MDBTypography>
                                  </MDBCol>
                                  <MDBCol
                                    md="3"
                                    lg="3"
                                    xl="3"
                                    className="d-flex align-items-center"
                                  >
                                    <MDBBtn color="link" className="px-2">
                                      <MDBIcon fas icon="minus" />
                                    </MDBBtn>

                                    <MDBInput
                                      type="number"
                                      min="0"
                                      defaultValue={1}
                                      value={plant.amount}
                                      onChange={(e) =>
                                        dispatch({
                                          type: "cart/changeAmount",
                                          payload: {
                                            name: plant.name,
                                            amount: e.target.value,
                                          },
                                        })
                                      }
                                      size="sm"
                                    />

                                    <MDBBtn color="link" className="px-2">
                                      <MDBIcon fas icon="plus" />
                                    </MDBBtn>
                                  </MDBCol>
                                  <MDBCol
                                    md="3"
                                    lg="2"
                                    xl="2"
                                    className="text-end"
                                  >
                                    <MDBTypography tag="h6" className="mb-0">
                                      € {plant.price * plant.amount}.00
                                    </MDBTypography>
                                  </MDBCol>
                                  <MDBCol
                                    md="1"
                                    lg="1"
                                    xl="1"
                                    className="text-end"
                                  >
                                    <a href="#!" className="text-muted">
                                      <MDBIcon fas icon="times" />
                                    </a>
                                  </MDBCol>
                                </MDBRow>
                                <hr className="my-4" />{" "}
                              </div>
                            ))}

                            <div className="pt-5">
                              <MDBTypography tag="h6" className="mb-0">
                                <MDBCardText
                                  tag="a"
                                  href="#!"
                                  className="text-body"
                                  onClick={() =>
                                    dispatch({
                                      type: "modal/changeVisibility",
                                    })
                                  }
                                >
                                  <MDBIcon
                                    fas
                                    icon="long-arrow-alt-left me-2"
                                  />{" "}
                                  Revenir au magasin
                                </MDBCardText>
                              </MDBTypography>
                            </div>
                          </div>
                        </MDBCol>
                        <MDBCol lg="4" className="bg-grey">
                          <div className="p-5">
                            <MDBTypography
                              tag="h3"
                              className="fw-bold mb-5 mt-2 pt-1"
                            >
                              Résumé
                            </MDBTypography>

                            <hr className="my-4" />

                            <div className="d-flex justify-content-between mb-4">
                              <MDBTypography
                                tag="h5"
                                className="text-uppercase"
                              >
                                {nbTotal ? parseInt(nbTotal) + " plante(s)" : "Panier vide"}
                              </MDBTypography>
                              <MDBTypography tag="h5">
                                {nbTotal && "€ " + total + ".00"}
                              </MDBTypography>
                            </div>

                            {nbTotal && <><MDBTypography
                              tag="h5"
                              className="text-uppercase mb-3"
                            >
                              Frais de port
                            </MDBTypography>

                            <div className="mb-4 pb-2">
                              <select
                                className="select p-2 rounded bg-grey"
                                style={{ width: "100%" }}
                                value={ship}
                                onChange={(e) => setShip(e.target.value)}
                              >
                                <option value="5.00">Colissimo - €5.00</option>
                                <option value="4.38">Chronopost - €4.38</option>
                                <option value="3.25">
                                  Mondial Relay - €3.25
                                </option>
                              </select>
                            </div>

                            <MDBTypography
                              tag="h5"
                              className="text-uppercase mb-3"
                            >
                              Code cadeau
                            </MDBTypography>

                            <div className="mb-5">
                              <MDBInput
                                size="lg"
                                label="Entrez un code cadeau"
                              />
                            </div></>}

                            <hr className="my-4" />

                            <div className="d-flex justify-content-between mb-5">
                              <MDBTypography
                                tag="h5"
                                className="text-uppercase"
                              >
                                Total à payer
                              </MDBTypography>
                              <MDBTypography tag="h5">
                                €{" "}
                                {parseInt(nbTotal) > 0
                                  ? parseFloat(total) + parseFloat(ship)
                                  : 0}
                              </MDBTypography>
                            </div>

                            <MDBBtn color="dark" block size="lg">
                              Payer
                            </MDBBtn>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </div>
      </div>
    )
  );
};

export default Modal;
