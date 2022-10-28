import React, { useState } from "react";

const Cart = ({ cart, setCart }) => {
    const [price, setPrice] = useState(0);
  return (
    <div>
      {
        cart?.map((itm)=> (
            <div>
                <h5>{itm?.price}</h5>
                <div>
                    <button>+</button>
                    <button>-</button>
                </div>
                <div>
                    <h5>{itm?.price}</h5>
                    <button>Remove</button>
                </div>
            </div>
        ))
      }
      <div>
        <span>
            Total : 
        </span>
      </div>
    </div>
  );
};

export default Cart;
