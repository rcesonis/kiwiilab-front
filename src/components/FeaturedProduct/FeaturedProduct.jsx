import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { apiUrl } from "../../config/constants";
import { Link } from "react-router-dom";
import "./FeaturedProduct.scss";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${apiUrl}/products`);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  return (
    <section>
      <div className="content py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="products">
              <div className="row g-0 pt-3"></div>
              <div className="row g-0">
                {!products.products
                  ? "Loading"
                  : products.products.map((product) => {
                      return (
                        <div className="col-12 col-md-6 col-lg-4">
                          <div className="clean-product-item">
                            <div className="image my-2">
                              <Link to={`/products/${product._id}`}>
                                <img
                                  className="img-fluid d-block mx-auto"
                                  src={product.img}
                                />
                              </Link>
                            </div>
                            <div className="product-name text-center">
                              <Link
                                to={`/products/${product._id}`}
                                className="nav-link"
                              >
                                {product.title}
                              </Link>
                            </div>
                            <div className="about text-center my-2">
                              <div className="price">
                                <h3>{product.price}Eur</h3>
                              </div>
                              <div className="price my-2">
                                <Link
                                  to={`/products/${product._id}`}
                                  className="nav-link"
                                >
                                  <button className="btn-red">View more</button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;

<div className="col-sm-12 col-md-3 text-center"></div>;
