import React from "react";

const CartIcon = (props) => {
  return (
    <div>
      <i className="la la-shopping-cart"></i>
      <span>{props.quantity}</span>
    </div>
  );
};

export default CartIcon;
