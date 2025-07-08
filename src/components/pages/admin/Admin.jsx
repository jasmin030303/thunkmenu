import { useState } from "react";
import "./Admin.scss";
import axios from "axios";
import { useDispatch } from "react-redux";

const Admin = () => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  function addProduct() {
    let newProduct = {
      img: url,
      name: name,
      description: des,
      price: price,
      category: category,
    };
    axios.post(
      `https://api-crud.elcho.dev/api/v1/ac417-c9e0b-0f9fe/dishes`,
      newProduct
    );
    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
    setUrl("");
    setName("");
    setDes("");
    setPrice("");
    setCategory("");
  }
  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <h4>
            вы можете добавит продукты так как вы являутесь администратором!!!
          </h4>

          <div className="admin--block">
            <input
              type="text"
              placeholder="product url"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
            <input
              type="text"
              placeholder="product name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              placeholder="product description"
              onChange={(e) => setDes(e.target.value)}
              value={des}
            />
            <input
              type="text"
              placeholder="product price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <select onChange={(e) => setCategory(e.target.value)}>
              <option>category</option>
              <option value="закуски">Закуски</option>
              <option value="салаты">Салаты</option>
              <option value="супы">Супы</option>
              <option value="горячие блюда">Горячие Блюда</option>
              <option value="напитки">Напитки</option>
              <option value="десерты">Десерты</option>
              <option value="детское меню">Детсккое меню</option>
            </select>
            <button onClick={() => addProduct()}>CREATE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
