import React from "react";
import CheckoutItemView from "./checkout/CheckoutItemView";
import "./checkout/checkout.css"

const Checkout = (props) => {

  const checkoutList = props.checkoutList

  const removeStreamer = (streamer) => {
    props.removeStreamer(streamer);
  }

  const submitCheckout = () => {
      props.submitCheckout();
  }
  
  return (
    <div>
      <h1>Checkout</h1>
      <div id="checkout">
      {
        checkoutList.map(streamer => {
          return <CheckoutItemView key={streamer.name} streamer={streamer} removeItemListener={removeStreamer} />
        })
      }
      </div>
      <button id="checkout_submit" onClick={submitCheckout}> Submit</button>
    </div>
  );
};

export default Checkout;