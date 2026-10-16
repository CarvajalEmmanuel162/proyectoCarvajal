import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemList from "./ItemList";
import FormProductoContainer from "./FormProductoContainer";
import estilo from "./ItemListContainer.module.css";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const consulta = await getDocs(
                    collection(db, "productos")
                );

                const datos = consulta.docs.map(documento => ({
                    ...documento.data(),
                    id: documento.id
                }));

                setProductos(datos);
            } catch (error) {
                setError(error.message);
            } finally {
                setCargando(false);
            }
        };

        obtenerProductos();
    }, []);

    if (cargando)
        return <div>Cargando productos...</div>;

    if (error)
        return <div>Error: {error}</div>

    return (
        <div className={estilo.cuadro}>
            <FormProductoContainer />
            <ItemList productos={productos} />
        </div>

    )
}

export default ItemListContainer;