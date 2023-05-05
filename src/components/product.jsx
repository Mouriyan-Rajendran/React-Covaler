import React, { useState } from "react";

function Product(props) {
  const [count, setCount] = useState(0);
  return (
    <tr>
      <th scope="row">{props.indexNo + 1}</th>
      <td>{props.data.type}</td>
      <td>{props.data.name}</td>
      <td>{props.data.price_per_night}</td>
      <td>{count}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => {
            setCount(count + 1);
            props.onSubmit(props.data);
          }}
        >
          +
        </button>
      </td>
    </tr>
  );
}

export default Product;
