import React from "react";

const Shop = () => {
  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
      <button disabled={true} className="btn btn-primary mx-2">
        -
      </button>
      Update Balance
      <button disabled={true} className="btn btn-primary mx-2">
        +
      </button>
    </div>
  );
};

export default Shop;
