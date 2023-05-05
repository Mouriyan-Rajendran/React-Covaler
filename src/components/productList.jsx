import React, { useState } from "react";
import Product from "./product";
import Cart from "./cart";

const ProductList = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);

  const products = [
    {
      name: "Unpowered site",
      type: "Accommodation - Site",
      price_per_night: 40,
    },
    { name: "Powered site", type: "Accommodation - Site", price_per_night: 60 },
    {
      name: "Poolside Cabin",
      type: "Accommodation - Cabin",
      price_per_night: 210,
    },
    {
      name: "Luxury Safari Tent",
      type: "Accommodation - Cabin",
      price_per_night: 340,
    },
    { name: "Membership", type: "Accommodation - Site", price_per_night: 500 },
  ];

  const handleCount = (product) => {
    console.log(product);
    setCount(count + 1);
    setAmount(amount + product.price_per_night);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Type</th>
            <th scope="col">Name</th>
            <th scope="col">Price(Per night)</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <Product data={product} onSubmit={handleCount} indexNo={index} />
          ))}
        </tbody>
      </table>
      <Cart count={count} amount={amount} />
    </div>
  );
};

export default ProductList;
