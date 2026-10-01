import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BotonFavorito from "../BotonFavorito";
import estilo from "./MostrarDetalle.module.css";

const MostrarDetalle = () => {

    const { id } = useParams();

    const [producto, setProducto] = useState(null);

    useEffect(() => {

        fetch("/datos/productos.json")
            .then(respuesta => respuesta.json())
            .then(data => {
                console.log("Producto:", data);
                console.log("ID buscado:", Number(id));

                const productoEncontrado = data.find(
                    producto => producto.id === Number(id)
                );

                setProducto(productoEncontrado);
            });

    }, [id]);

    if (!producto) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div className={estilo.detalle}>
            <div className={estilo.imagen}>
                <img
                    src={producto.Imagen}
                    alt={producto.nombre}
                />
            </div>
            <div className={estilo.informacion}>
                <h1>{producto.nombre}</h1>
                <p className={estilo.precio}>Precio: ${producto.precio}</p>
                <p>Descripción: {producto.descripcion}</p>
                <BotonFavorito />
                <button>Agregar al carrito</button>
            </div>
            <div className={estilo.botones}></div>
        </div>
    );
};

export default MostrarDetalle;