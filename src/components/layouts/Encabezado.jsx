import estilo from "./Encabezado.module.css";
import { Link } from "react-router-dom";
import { useCarrito } from "../../context/CarritoContext";

function Encabezado() {
  const { itemsEnCarrito } = useCarrito();
  const totalItems = itemsEnCarrito();

  return (
    <div className={estilo.header}>
      <img
        className={estilo.logo}
        src={`${import.meta.env.BASE_URL}/favicon.ico`}
      />
      <h1>IRON STRING</h1>
      <Link to="/carrito">
        <button>
          <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {totalItems > 0 && <spam>{totalItems}</spam>}
        </button>
      </Link>
    </div>
  );
};

export default Encabezado;
