import { useState } from "react";
import BotonFavorito from "../BotonFavorito";
import estilo from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, Imagen }) => {
    const [contador, setContador] = useState(0);
    const incrementar = () => { setContador(contador + 1) };
    const decrementar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        };
    }
    const reset = () => { setContador(0) };

    return (
        <div className={estilo.card}>
            <h2>{nombre}</h2>
            <h2>${precio}</h2>
            <img className={estilo.foto} src={Imagen} alt={nombre} />
            <div className={estilo.botones}>
                <BotonFavorito />
                <button onClick={decrementar}> - </button>
                <p>cantidad: {contador}</p>
                <button onClick={incrementar}> + </button>

                <Link to={`/productos/${id}`}>Detalle</Link>
            </div>
        </div>
    )
}
export default Item;