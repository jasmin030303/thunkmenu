import "./Header.scss";
import food from "../../../assets/images/food.png";
import { BsPersonFillLock } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa";
import { TiAdjustBrightness } from "react-icons/ti";
import { TiAdjustContrast } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const modal = useSelector((s) => s.modal);
  const [login, setLogin] = useState("");
  const [password, setPasword] = useState("");

  const dark = useSelector((s) => s.dark);

  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <NavLink to={"/"}>
            <img src={food} alt="img" />
          </NavLink>
          <input type="text" placeholder="Search..." />
          <span>
            <CiSearch />
          </span>

          <div className="header--nav">
            <NavLink
              to={"/admin"}
              onClick={() => dispatch({ type: "OPEN_MODAL" })}
            >
              <BsPersonFillLock />
            </NavLink>
            <NavLink to={"/basket"}>
              <FaOpencart />
            </NavLink>
            <div className="header--nav__btn">
              <button
                className="header--nav__btn--white"
                onClick={() => dispatch({ type: "DARK" })}
              >
                <TiAdjustBrightness />
              </button>
              <div className="header--nav__btn--street"></div>
              <button
                className="header--nav__btn--black"
                onClick={() => dispatch({ type: "DARK_LIGHT" })}
              >
                <TiAdjustContrast />
              </button>
            </div>
          </div>
        </div>
        {modal ? (
          <div className="modals">
            <div className="modal">
              <h2>Log in...</h2>
              <input
                type="text"
                placeholder="Login..."
                onChange={(e) => setLogin(e.target.value)}
                value={login}
              />
              <input
                type="text"
                placeholder="Password..."
                onChange={(e) => setPasword(e.target.value)}
                value={password}
              />
              <button onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
                Log in
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
