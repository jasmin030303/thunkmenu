import "./Salaty.scss";
import { useSelector } from "react-redux";

const Salaty = () => {
  const product = useSelector((s) => s.product);

  const filtered = product.filter(
    (el) => el.category?.toLowerCase() === "салаты"
  );

  return (
    <div id="salaty">
      <div className="container">
        <div className="salaty">
          {filtered.length ? (
            filtered.map((el) => (
              <div key={el._id} className="salaty--card">
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

export default Salaty;
