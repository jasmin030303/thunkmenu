import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Admin from "./components/pages/admin/Admin";
import Home from "./components/pages/home/Home";
import Sup from "./components/pages/sup/Sup";
import Zakuski from "./components/pages/zakuski/Zakuski";
import Salaty from "./components/pages/salaty/Salaty";
import Napitki from "./components/pages/napitki/Napitki";
import Bluda from "./components/pages/bluda/Bluda";
import Menu from "./components/pages/menu/Menu";
import Deserty from "./components/pages/deserty/Deserty";
import Basket from "./components/pages/basket/Basket";
import { useSelector } from "react-redux";

function App() {
  const dark = useSelector((s) => s.dark);
  const routers = [
    {
      id: 1,
      path: "/",
      element: <Home />,
    },
    {
      id: 2,
      path: "/admin",
      element: <Admin />,
    },
    {
      id: 3,
      path: "/zakuski",
      element: <Zakuski />,
    },
    {
      id: 4,
      path: "/sup",
      element: <Sup />,
    },
    {
      id: 5,
      path: "/salaty",
      element: <Salaty />,
    },
    {
      id: 6,
      path: "/napitki",
      element: <Napitki />,
    },
    {
      id: 7,
      path: "/menu",
      element: <Menu />,
    },
    {
      id: 8,
      path: "/deserty",
      element: <Deserty />,
    },
    {
      id: 9,
      path: "/bluda",
      element: <Bluda />,
    },
    {
      id: 10,
      path: "/basket",
      element: <Basket />,
    },
  ];
  return (
    <div
      className="app"
      style={{
        background: !dark ? "white" : "#000",
        color: !dark ? "black" : "white",
      }}
    >
      <Header />
      <Routes>
        {routers.map((el) => (
          <Route path={el.path} element={el.element} key={el.id} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
