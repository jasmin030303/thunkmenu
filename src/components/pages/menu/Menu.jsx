import React from "react";
import "./Menu.scss";
import { useSelector } from "react-redux";

const Menu = () => {
  const product = useSelector((s) => s.product);

  const filtered = product.filter(
    (el) => el.category?.toLowerCase() === "детское меню"
  );

  return (
    <div id="menu">
      <div className="container">
        <div className="menu">
          {filtered.length ? (
            filtered.map((el) => (
              <div key={el._id} className="menu--card">
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

export default Menu;
