import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="d-flex vh-100">
      <div class="container justify-content-center align-items-center my-auto text-center">
        <h1 class="mb-1">Success!</h1>
        <h3 class="mb-5">
          <em>Thank you for your order</em>
        </h3>

        <Link to={`/products`} className="nav-link">
          <button className="btn-red">Go back</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
