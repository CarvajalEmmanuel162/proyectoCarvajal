import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCarrito } from "../../context/CarritoContext";
import { db } from "../../firebase/config";
import {doc, getDoc } from "firebase/firestore";
import BotonFavorito from "../BotonFavorito";
import estilo from "./MostrarDetalle.module.css";

const MostrarDetalle = () => {
    const { id } = useParams();
    const { agregarAlCarrito } = useCarrito();

    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
            setCargando(true);
            try {
                const docRef = doc(db, "productos", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProducto({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setError("El producto no existe");
                }
            } catch (err) {
                console.error("Error al obtener producto: ", err);
                setError("Error al cargar el producto");
            } finally {
                setCargando(false);
            }
        };

        fetchProducto();
    }, [id]);

    const manejarAgregarAlCarrito =()  => {
        agregarAlCarrito({ producto, cantidad: 1 });
    };

    if (cargando) {
        return <div>Cargando detalle del producto...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!producto) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div className={estilo.detalle}>
            <div className={estilo.imagen}>
                <img
                    src={producto.imagen}
                    alt={producto.nombre}
                />
            </div>
            <div className={estilo.informacion}>
                <h1>{producto.nombre}</h1>
                <p className={estilo.precio}>Precio: ${producto.precio}</p>
                <p>Descripción: {producto.descripcion}</p>
                <BotonFavorito />
                <button onClick={manejarAgregarAlCarrito}>Agregar al carrito</button>                
            </div>
            <div className={estilo.botones}></div>
        </div>
    );
};

export default MostrarDetalle;