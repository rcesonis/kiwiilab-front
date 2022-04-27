import React from "react";
import { useEffect, useState } from "react";
import { apiUrl } from "../../config/constants";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <section className="clean-block clean-catalog dark">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">Catalog Page</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
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
                                <div className="product-name">
                                  <a href="#">{product.title}</a>
                                </div>
                                <div className="about">
                                  <div className="price">
                                    <h3>{product.price}</h3>
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
