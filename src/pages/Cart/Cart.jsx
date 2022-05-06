import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../requestMethods";
import "./Cart.scss";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate("/success");
      } catch {}
    };
    stripeToken && cart.total >= 1 && makeRequest();
  }, [stripeToken, cart.total, navigate]);

  return (
    <main className="page shopping-cart-page">
      <section className="clean-block clean-cart dark">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">Shopping Cart</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div className="content">
            <div className="row g-0">
              <div className="col-md-12 col-lg-8">
                <div className="items">
                  {cart.products.map((product) => {
                    return (
                      <div className="product">
                        <div className="row justify-content-center align-items-center">
                          <div className="col-md-3">
                            <div className="product-image">
                              <img
                                className="img-fluid d-block mx-auto image"
                                src={product.img}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-md-5 product-info">
                            <Link
                              to={`/products/${product._id}`}
                              className="nav-link"
                            >
                              {product.title}
                            </Link>
                            <div className="product-specs">
                              <div>
                                <span>ID:</span>
                                <span class="value">{product._id}</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-md-2 quantity">
                            <label
                              className="form-label d-none d-md-block"
                              for="quantity"
                            >
                              Quantity
                            </label>
                            <input
                              id="number"
                              className="form-control quantity-input"
                              type="number"
                              value={product.quantity}
                            />
                          </div>
                          <div className="col-6 col-md-2 price">
                            <span>{product.price * product.quantity}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="summary">
                  <h3>Cart Total</h3>

                  <h4>
                    <p className="text">Shipping: 25 Eur*</p>

                    <span className="price">
                      {(Math.round(cart.total * 100) / 100 + 25).toFixed(2)} Eur
                    </span>
                  </h4>
                  <StripeCheckout
                    name="KiwiLab"
                    billingAddress
                    shippingAddress
                    amount={(
                      Math.round((cart.total * 100) / 100 + 25) * 100
                    ).toFixed(2)}
                    token={onToken}
                    stripeKey={KEY}
                    description={`Total is ${(
                      Math.round(cart.total * 100) / 100 +
                      25
                    ).toFixed(2)}Eur`}
                    currency="EUR"
                  >
                    <button className="btn-red" type="button">
                      Checkout
                    </button>
                  </StripeCheckout>

                  <p className="text-muted">
                    *Shipping price is fixed up to 20kg of product weight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
