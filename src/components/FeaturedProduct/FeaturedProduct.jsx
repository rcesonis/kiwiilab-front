import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../../config/constants";

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
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 pt-5 text-center">
            <h1>Featured products</h1>
          </div>
          <div className="col-4 pt-5 text-center">
            <h1>Featured products</h1>
          </div>
          <div className="col-4 pt-5 text-center">
            <h1>Featured products</h1>
          </div>
          <div className="col-4 pt-5 text-center">
            <h1>Featured products</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
