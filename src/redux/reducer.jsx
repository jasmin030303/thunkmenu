const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  modal: false,
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  dark: false,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      localStorage.setItem("product", JSON.stringify(action.payload));
      return { ...state, product: action.payload };

    case "ADD_PRODUCT":
      let addProduct = [...state.product, { ...action.payload }];
      localStorage.setItem("product", JSON.stringify(addProduct));
      return { ...state, product: addProduct };

    case "OPEN_MODAL":
      return { ...state, modal: true };

    case "CLOSE_MODAL":
      return { ...state, modal: false };

    case "GET_BASKET":
      return { ...state, basket: action.payload };

    case "ADD_TO_BASKET":
      let res = [...state.basket, { ...action.payload, quantity: 1 }];
      localStorage.setItem("basket", JSON.stringify(res));
      return { ...state, basket: res };

    case "DELETE_PRODUCT":
      let delPro = [...state.product.filter((el) => el._id !== action.payload)];
      localStorage.setItem("product", JSON.stringify(delPro));
      return { ...state, product: delPro };

    case "DARK":
      return { ...state, dark: true };

    case "DARK_LIGHT":
      return { ...state, dark: false };

    case "INCREMENT":
      let incrementQuan = state.basket.map((el) =>
        el._id === action.payload ? { ...el, quantity: el.quantity + 1 } : el
      );
      localStorage.setItem("basket", JSON.stringify(incrementQuan));
      return { ...state, basket: incrementQuan };

    case "DECREMENT":
      let deccrementQuan = state.basket.map((el) =>
        el._id === action.payload
          ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
          : el
      );
      localStorage.setItem("basket", JSON.stringify(deccrementQuan));
      return { ...state, basket: deccrementQuan };

    default:
      return state;
  }
};
