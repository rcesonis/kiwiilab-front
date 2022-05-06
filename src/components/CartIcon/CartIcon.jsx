import React from "react";
import "./CartIcon.scss";

const CartIcon = (props) => {
  console.log(props);
  return (
    <div>
      <i className="la la-shopping-cart"></i>
      <span className="size-cart-indicator">{props.cartContent}</span>
    </div>
  );
};

export default CartIcon;
