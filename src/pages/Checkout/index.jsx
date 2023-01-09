import React from "react";

import CheckButton from "../../components/CheckButton";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";

import "./styles.scss";

const Checkout = (props) => {
  return (
    <div className="checkout">
      <div className="checkout-form">
        <div className="navigate-back">Back to cart</div>
        <div className="title-wrap">
          <div className="title-wrap-text">Delivery details</div>
          <CheckButton title="Send as dropshipper" />
        </div>
        <div className="checkout-form-input">
          <div className="checkout-form-input-left">
            <div className="input-wrap">
              <Input title="Email" />
            </div>
            <div className="input-wrap">
              <Input title="Phone Number" />
            </div>
            <div className="input-wrap">
              <TextArea title="Delivery Address" />
            </div>

          </div>
          <div className="checkout-form-input-right">
            
          </div>
        </div>
      </div>
      <div className="checkout-summary">
        a
      </div>
    </div>
  );
};

export default Checkout;
