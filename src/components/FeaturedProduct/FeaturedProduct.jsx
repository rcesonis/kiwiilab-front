import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../../config/constants";
import { Link } from "react-router-dom";

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

  //   const featuredProduct = products.filter((product) => {
  //     if (product.isFeatured === true) {
  //       return product;
  //     }
  //   });

  //   console.log(featuredProduct);

  return (
    <section>
      <div className="content py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="products">
              <div className="row g-0 pt-5">
                <div className="col-12 pt-5 text-center">
                  <h2>Featured products</h2>
                </div>
              </div>
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
                                <button
                                  className="button-red"
                                  href={`/products/${product._id}`}
                                >
                                  View more
                                </button>
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
