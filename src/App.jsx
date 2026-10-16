import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import ItemListContainer from "./components/products/ItemListContainer";
import MostrarDetalle from "./components/products/MostrarDetalle";
import Carrito from "./page/Carrito";
import "./app.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<h1>Inicio</h1>}/>
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:id" element={<MostrarDetalle/>} />
        </Route>
      </Routes>
    </>
  );
};


export default App;