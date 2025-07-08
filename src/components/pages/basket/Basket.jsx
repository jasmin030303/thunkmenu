import React from "react";
import "./Basket.scss";
import { useDispatch, useSelector } from "react-redux";

const Basket = () => {
  const basket = useSelector((s) => s.basket);
  const dispatch = useDispatch();

  function incrementQuantity(item) {
    dispatch({ type: "INCREMENT", payload: item });
  }
  function decrementQuantity(item) {
    dispatch({ type: "DECREMENT", payload: item });
  }

  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          {basket.map((el) => (
            <div key={el._id} className="basket--nav">
              <img src={el.img} alt="img" />
              <span>
                <h4>Name: {el.name}</h4>
                <h3>Price: {el.price * el.quantity}$</h3>
                <h3>Category: {el.category}</h3>
              </span>
              <div className="basket--nav__quantity">
                <button onClick={() => incrementQuantity(el._id)}>+</button>
                <h2>{el.quantity}</h2>
                <button onClick={() => decrementQuantity(el._id)}>-</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Basket;
