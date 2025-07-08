import React from "react";
import "./Sup.scss";
import { useSelector } from "react-redux";

const Sup = () => {
  const product = useSelector((s) => s.product);

  const filtered = product.filter(
    (el) => el.category?.toLowerCase() === "супы"
  );

  return (
    <div id="sup">
      <div className="container">
        <div className="sup">
          {filtered.length ? (
            filtered.map((el) => (
              <div key={el._id} className="sup--card">
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

export default Sup;
