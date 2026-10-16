import { useCarrito } from "../context/CarritoContext";
import estilo from "./Carrito.module.css";

const Carrito = () => {
    const {
        carrito,
        limpiarCarrito,
        eliminarDelCarrito,
        incrementarCantidad,
        decrementarCantidad,
        cobroTotal
    } = useCarrito();
    if (carrito.length === 0) {
        return (
            <div>
                <img className={estilo.carro} src={`${import.meta.env.BASE_URL}/3447.jpg`} alt="" />
                <h1>Carrito vacío</h1>
                <p>Aquí se mostrarán los productos que agregaste.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Carrito de compras</h1>
            {carrito.map(item => (
                <div key={item.id}>
                    <img src={item.imagen} alt={item.nombre}/>
                    <div>
                        <h4>{item.nombre}</h4>
                        <button onClick={() => decrementarCantidad(item.id)}>-</button>
                        <span>{item.cantidad}</span>
                        <button onClick={() => incrementarCantidad(item.id)}>+</button>
                    </div>

                    <button onClick={() => eliminarDelCarrito(item.id)}>
                        <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            ></svg>
                    </button>
                </div>
            ))}

            <hr/>
            <h3>Total a pagar: ${cobroTotal().toFixed(2)}</h3>
            <button onClick={limpiarCarrito}>Vaciar carrito</button>
        </div>
    );
};
export default Carrito;
