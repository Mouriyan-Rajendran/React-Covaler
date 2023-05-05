import React from "react";

function Cart(props) {
  const discRate = 10;
  const calcDiscount = () => {
    return props.amount - props.amount * (discRate / 100);
  };
  return (
    <div className="row">
      <div>
        <h1>Cart</h1>
        <h2>Total count : {props.count}</h2>
        <h2>Total Amount : {props.amount}</h2>
        {props.amount > 500 ? <h2>Discount : 10%</h2> : null}
        {props.amount > 500 ? <h2>Final Payable : ${calcDiscount()}</h2> : null}
      </div>
      <div>
        <button className="btn btn-primary">CheckOut</button>
      </div>
    </div>
  );
}

export default Cart;
