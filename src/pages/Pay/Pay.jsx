import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import { apiUrl } from "../../config/constants";

import React from "react";
import axios from "axios";

const KEY =
  "pk_test_51HKagOBZsneq8GtJQretbBZZ2A6ajCDsa54RcqIuYxXFCCjEfBfu434LpyDygIQZ59G1kjJfhLgssyiWBihOXvsw00on6MCwZg";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await axios.post(`${apiUrl}/payment`, {
          tokenId: stripeToken.id,
          amount: 20000,
        });
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  return (
    <div>
      <StripeCheckout
        name="KiwiLab"
        billingAddress
        shippingAddress
        amount={2000}
        token={onToken}
        stripeKey={KEY}
        description={""}
      >
        <button>Pay now</button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
