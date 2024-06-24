import React from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = new useNavigate();

  return (
    <div>
      Added to cart proceed
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}
export default Cart;
