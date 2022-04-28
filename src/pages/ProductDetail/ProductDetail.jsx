import React from "react";
import { apiUrl } from "../../config/constants";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductDetail.scss";
import background from "../../assets/beard-oil.png";

const ProductDetail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`${apiUrl}/products/${id}`);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const clickHandler = () => {};

  console.log(product);
  return (
    <main class="page product-page">
      <section class="clean-block py-5 clean-product">
        <div class="container d-flex">
          <div class="block-content">
            <div class="product-info">
              <div class="row">
                <div class="col-md-6 product-image">
                  <img class="d-block" src={product.img} />
                </div>
                <div class="col-md-6">
                  <div class="info">
                    <h3>{product.title}</h3>
                    <div class="description-text">
                      <p>{product.description}</p>
                    </div>
                    <div class="price">
                      <h3>{product.price} Eur</h3>
                    </div>
                    <button
                      onClick={clickHandler}
                      className="button-red"
                      type="button"
                    >
                      <i class="icon-basket"></i>Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row g-0">
            <div className="col-6">
              <div className="description-container d-flex align-items-md-center justify-content-md-center">
                <div className="text-container">
                  <h4>Description</h4>
                  <p>
                    Kiwiilab is an exclusive brand of men's grooming and care
                    products. The products are designed not only to take care of
                    your hair, but also to take care of your scalp and body. The
                    Kiwwilab product line is designed for all men, from
                    teenagers to adults, with a refined scent for all ages. The
                    Kiwiilab brand is characterized by the fact that the
                    products are not tested on animals and do not contain
                    alcohol, parabens, silicon, gluten or dyes. Also, these
                    cosmetics are suitable for vegans. It is made using only the
                    usual botanical extracts, which enhance the effect of the
                    measures and give the desired end result.
                  </p>
                  <h4>How to use it</h4>
                  <p>
                    Warm 3 drops of oil in your hand, apply to beard hair,
                    mustache and comb them.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img src={background} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
