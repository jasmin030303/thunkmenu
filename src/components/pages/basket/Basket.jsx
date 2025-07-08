import React from "react";
import "./Basket.scss";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDeleteForever } from "react-icons/md";

const Basket = () => {
  const basket = useSelector((s) => s.basket);
  const dispatch = useDispatch();

  function incrementQuantity(item) {
    dispatch({ type: "INCREMENT", payload: item });
  }
  function decrementQuantity(item) {
    dispatch({ type: "DECREMENT", payload: item });
  }

  function delBasket(item) {
    dispatch({ type: "DELETE_BASKET", payload: item });
  }

  const totalPrice = basket.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);

  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          <div className="basket--block">
            {basket.map((el) => (
              <div key={el._id} className="basket--block__nav">
                <h5 onClick={() => delBasket(el._id)}>
                  <MdOutlineDeleteForever />
                </h5>
                <img src={el.img} alt="img" />
                <span>
                  <h4>Name: {el.name}</h4>
                  <h3>Price: {el.price * el.quantity}$</h3>
                  <h3>Category: {el.category}</h3>
                </span>
                <div className="basket--block__nav--quantity">
                  <button onClick={() => incrementQuantity(el._id)}>+</button>
                  <h2>{el.quantity}</h2>
                  <button onClick={() => decrementQuantity(el._id)}>-</button>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <h1>Totale price: <span> {totalPrice}</span>$</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
