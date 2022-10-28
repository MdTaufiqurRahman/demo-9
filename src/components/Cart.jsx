import React, { useEffect, useState } from "react";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handlePrice = () => {
    let ans = 0;
    cart?.map((item) => (ans += item.price * quantity));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleRemove = (_id) => {
    const arr = cart.filter((item) => item._id !== _id);
    setCart(arr);
  };

  return (
    <div className="container">
      {cart?.map((itm) => (
        <div>
          <h5>{itm?.title}</h5>
          <h5>{itm?.price}</h5>
          <div>
            <button onClick={() => handleQuantity("dec")}>-</button>
            <h5>{quantity}</h5>
            <button onClick={() => handleQuantity("inc")}>+</button>
          </div>
          <div>
            <h5>{itm?.price * quantity}</h5>
            <button onClick={() => handleRemove(itm._id)}>Remove</button>
          </div>
        </div>
      ))}
      <div>
        <span>Total : {price}</span>
      </div>
    </div>
  );
};

export default Cart;
