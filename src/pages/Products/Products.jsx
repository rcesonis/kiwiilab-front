import React from "react";
import { useEffect, useState } from "react";
import { apiUrl } from "../../config/constants";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Products = () => {
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
    <main className="page catalog-page">
      <section className="clean-block">
        <div className="container pt-3 vh-100">
          <div className="row pb-5">
            <div className="col-sm-12 text-center">
              <h1 className="p-3">Catalog</h1>
              <h4 className="catalog-description">
                Beards have a reputation for ruggedness, but no matter if yours
                is long and rugged or close-cropped and classic, it’s sure to
                benefit from a solid grooming routine and high-quality products.
              </h4>
            </div>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="products">
                  <div className="row g-0">
                    {!products.products
                      ? "Loading"
                      : products.products.map((product) => {
                          return (
                            <div className="col-12 col-md-6 col-lg-4">
                              <div className="clean-product-item">
                                <div className="image">
                                  <Link to="#">
                                    <img
                                      className="img-fluid d-block mx-auto"
                                      src={product.img}
                                    />
                                  </Link>
                                  <a href="#"></a>
                                </div>
                                <div className="product-name text-center">
                                  <a href="#">{product.title}</a>
                                </div>
                                <div className="about text-center">
                                  <div className="price">
                                    <h3>{product.price}Eur</h3>
                                  </div>
                                  <div className="price">
                                    <Link
                                      to={`/products/${product._id}`}
                                      className="nav-link"
                                    >
                                      <button className="btn-red">
                                        View more
                                      </button>
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
        </div>
      </section>
    </main>
  );
};

export default Products;
