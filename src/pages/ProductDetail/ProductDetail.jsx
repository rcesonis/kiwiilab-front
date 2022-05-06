import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProductDetail.scss";
import "../Homepage/Homepage.scss";
import background from "../../assets/beard-oil.png";
import { publicRequest } from "../../requestMethods";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const ProductDetail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/${id}`);
        console.log(res);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  return (
    <main class="page product-page">
      <section class="clean-block py-5 clean-product">
        <div class="container d-flex">
          <div class="block-content">
            <div class="product-info">
              <div class="row">
                <div class="col-md-6 product-image">
                  <img class="d-block" src={product.img} alt="" />
                </div>
                <div class="col-md-6">
                  <div class="info">
                    <h3>{product.title}</h3>
                    <div class="description-text">
                      <p className="product-description">
                        {product.description}
                      </p>
                    </div>
                    <div class="price text-muted my-3">
                      <h4>{product.price} Eur</h4>
                    </div>
                    <div class="quantity my-2">
                      <h4>Quantity</h4>
                    </div>
                    <div>
                      <button
                        className="plus-minus"
                        onClick={() => handleQuantity("dec")}
                      >
                        <i class="las la-minus"></i>
                      </button>
                      <span className="px-3 quantity-number"> {quantity} </span>
                      <button
                        className="plus-minus"
                        onClick={() => handleQuantity("add")}
                      >
                        <i class="las la-plus"></i>
                      </button>
                      <br></br>
                      <button onClick={handleClick} className="btn-red mt-4">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid padding-0">
          <div className="row g-0">
            <div className="col-sm-12 d-flex justify-content-center align-items-center col-md-6 hero-text-col padding-0">
              <div className="d-flex justify-content-center align-items-center">
                <div className="text-center p-5">
                  <h4 className="text-center">Description</h4>
                  <p className="mx-auto">
                    Kiwiilab is an exclusive brand of men's grooming and care
                    products. The products are designed not only to take care of
                    your hair, but also to take care of your scalp and body. The
                    Kiwwilab product line is designed for all men, from
                    teenagers to adults, with a refined scent for all ages. The
                    Kiwiilab brand is characterized by the fact that the
                    products are not tested on animals and do not contain
                    alcohol, parabens, silicon, gluten or dyes.
                  </p>
                  <h4 className="mx-auto">How to use it</h4>
                  <p className="mx-auto">
                    Warm 3 drops of oil in your hand, apply to beard hair,
                    mustache and comb them.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 d-flex justify-content-center align-items-center col-md-6 hero-text-col padding-0">
              <img className="img-fluid" src={background} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
