import Layout from "./components/layout/Layout";
import ItemListContainer from "./components/products/ItemListContainer";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import MostrarDetalle from "./components/products/MostrarDetalle";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<h1>Inicio</h1>}/>
          <Route path="/carrito" element={<h1>Carrito</h1>}/>
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:id" element={<MostrarDetalle/>} />
        </Route>
      </Routes>
    </>
  );
};


export default App;