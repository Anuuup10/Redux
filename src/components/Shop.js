import React from "react";

const Shop = () => {
  return (
    <div>
        <h2>Buy Addidas Shoes 50 Rs</h2>
      <button disabled={true} className="btn btn-primary mx-2">
        -
      </button>
      Add to cart
      <button disabled={true} className="btn btn-primary mx-2">
        +
      </button>
    </div>
  );
};

export default Shop;
