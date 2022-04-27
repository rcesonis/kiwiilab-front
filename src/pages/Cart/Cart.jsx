import React from "react";

const Cart = () => {
  return (
    <main class="page shopping-cart-page">
      <section class="clean-block clean-cart dark">
        <div class="container">
          <div class="block-heading">
            <h2 class="text-info">Shopping Cart</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div class="content">
            <div class="row g-0">
              <div class="col-md-12 col-lg-8">
                <div class="items">
                  <div class="product">
                    <div class="row justify-content-center align-items-center">
                      <div class="col-md-3">
                        <div class="product-image">
                          <img
                            class="img-fluid d-block mx-auto image"
                            src="tech/image2.jpg"
                          />
                        </div>
                      </div>
                      <div class="col-md-5 product-info">
                        <a class="product-name" href="#">
                          Lorem Ipsum dolor
                        </a>
                        <div class="product-specs">
                          <div>
                            <span>Display: </span>
                            <span class="value">5 inch</span>
                          </div>
                          <div>
                            <span>RAM: </span>
                            <span class="value">4GB</span>
                          </div>
                          <div>
                            <span>Memory: </span>
                            <span class="value">32GB</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-6 col-md-2 quantity">
                        <label
                          class="form-label d-none d-md-block"
                          for="quantity"
                        >
                          Quantity
                        </label>
                        <input
                          id="number"
                          class="form-control quantity-input"
                          type="number"
                          value="1"
                        />
                      </div>
                      <div class="col-6 col-md-2 price">
                        <span>$120</span>
                      </div>
                    </div>
                  </div>
                  <div class="product">
                    <div class="row justify-content-center align-items-center">
                      <div class="col-md-3">
                        <div class="product-image">
                          <img
                            class="img-fluid d-block mx-auto image"
                            src="tech/image2.jpg"
                          />
                        </div>
                      </div>
                      <div class="col-md-5 product-info">
                        <a class="product-name" href="#">
                          Lorem Ipsum dolor
                        </a>
                        <div class="product-specs">
                          <div>
                            <span>Display: </span>
                            <span class="value">5 inch</span>
                          </div>
                          <div>
                            <span>RAM: </span>
                            <span class="value">4GB</span>
                          </div>
                          <div>
                            <span>Memory: </span>
                            <span class="value">32GB</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-6 col-md-2 quantity">
                        <label
                          class="form-label d-none d-md-block"
                          for="quantity"
                        >
                          Quantity
                        </label>
                        <input
                          id="number"
                          class="form-control quantity-input"
                          type="number"
                          value="1"
                        />
                      </div>
                      <div class="col-6 col-md-2 price">
                        <span>$120</span>
                      </div>
                    </div>
                  </div>
                  <div class="product">
                    <div class="row justify-content-center align-items-center">
                      <div class="col-md-3">
                        <div class="product-image">
                          <img
                            class="img-fluid d-block mx-auto image"
                            src="tech/image2.jpg"
                          />
                        </div>
                      </div>
                      <div class="col-md-5 product-info">
                        <a class="product-name" href="#">
                          Lorem Ipsum dolor
                        </a>
                        <div class="product-specs">
                          <div>
                            <span>Display: </span>
                            <span class="value">5 inch</span>
                          </div>
                          <div>
                            <span>RAM: </span>
                            <span class="value">4GB</span>
                          </div>
                          <div>
                            <span>Memory: </span>
                            <span class="value">32GB</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-6 col-md-2 quantity">
                        <label
                          class="form-label d-none d-md-block"
                          for="quantity"
                        >
                          Quantity
                        </label>
                        <input
                          id="number"
                          class="form-control quantity-input"
                          type="number"
                          value="1"
                        />
                      </div>
                      <div class="col-6 col-md-2 price">
                        <span>$120</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-lg-4">
                <div class="summary">
                  <h3>Summary</h3>
                  <h4>
                    <span class="text">Subtotal</span>
                    <span class="price">$360</span>
                  </h4>
                  <h4>
                    <span class="text">Discount</span>
                    <span class="price">$0</span>
                  </h4>
                  <h4>
                    <span class="text">Shipping</span>
                    <span class="price">$0</span>
                  </h4>
                  <h4>
                    <span class="text">Total</span>
                    <span class="price">$360</span>
                  </h4>
                  <button
                    class="btn btn-primary btn-lg d-block w-100"
                    type="button"
                  >
                    Checkout
                  </button>
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
