import { useDispatch, useSelector } from "react-redux";
import "./Home.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const product = useSelector((s) => s.product);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");

  const getProduct = () => {
    return async (dispatch) => {
      let res = await axios(
        `https://api-crud.elcho.dev/api/v1/ac417-c9e0b-0f9fe/dishes`
      );
      dispatch({ type: "GET_PRODUCT", payload: res.data.data });
    };
  };

  function addBasket(item) {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  }

  function delProduct(item) {
    dispatch({ type: "DELETE_PRODUCT", payload: item });
  }

  // const cate = category
  //   ? product.filter((el) => el.category === category)
  //   : product;

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <div className="home--nav">
            <NavLink to={"/zakuski"} onClick={() => setCategory("Закуски")}>
              Закуски
            </NavLink>
            <NavLink to={"/salaty"} onClick={() => setCategory("Салаты")}>
              Салаты
            </NavLink>
            <NavLink to={"/sup"} onClick={() => setCategory("Супы")}>
              Супы
            </NavLink>
            <NavLink to={"/bluda"} onClick={() => setCategory("Горячие Блюда")}>
              Горячие Блюда
            </NavLink>
            <NavLink to={"/napitki"} onClick={() => setCategory("Напитки")}>
              Напитки
            </NavLink>
            <NavLink to={"/deserty"} onClick={() => setCategory("Десерты")}>
              Десерты
            </NavLink>
            <NavLink to={"/menu"} onClick={() => setCategory("Детское Меню")}>
              Детское Меню
            </NavLink>
          </div>

          <div className="home--block">
            {product.map((el) => (
              <div key={el._id} className="home--block__card">
                <img src={el.img} alt="img" />
                <h2>
                  <span>NAME:</span> {el.name}
                </h2>
                <p>{el.description}</p>
                <h2>
                  <span>PRICE:</span> {el.price}$
                </h2>
                <h4>Category: {el.category}</h4>
                <div className="home--block__card--link">
                  <button
                    className="home--block__card--link__del"
                    onClick={() => delProduct(el._id)}
                  >
                    DELETE
                  </button>
                  <button
                    className="home--block__card--link__bas"
                    onClick={() => addBasket(el)}
                  >
                    BASKET
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* {
          cate.map((el)=> (
            <div className="cate">
              <img src={el.img} alt="img" />
            </div>
          ))
        } */}
      </div>
    </div>
  );
};

export default Home;
