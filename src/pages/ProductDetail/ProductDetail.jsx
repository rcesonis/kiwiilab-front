import React from "react";
import { apiUrl } from "../../config/constants";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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

  console.log(product);
  return <div>{product.title}</div>;
};

export default ProductDetail;
