import React from "react";
import "./Napitki.scss";
import { useSelector } from "react-redux";

const Napitki = () => {
  const product = useSelector((s) => s.product);

  const filtered = product.filter(
    (el) => el.category?.toLowerCase() === "напитки"
  );

  return (
    <div id="napitki">
      <div className="container">
        <div className="napitki">
          {filtered.length ? (
            filtered.map((el) => (
              <div key={el._id} className="napitki--card">
                <img src={el.img} alt="img" />
                <h3>{el.name}</h3>
                <p>{el.description}</p>
                <h4>Price: {el.price}$</h4>
                <h3>Категория: {el.category}</h3>
              </div>
            ))
          ) : (
            <p>Салаты не найдены</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Napitki;
