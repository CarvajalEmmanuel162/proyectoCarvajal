import { useEffect, useState } from "react";
import ItemList from "./ItemList"
import FormProductoContainer from "./FormProductoContainer";
import estilo from "./ItemListContainer.module.css";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando]= useState(true);

    const API = "./datos/productos.json"
    useEffect(() => {
        fetch(API)
            .then(res => {
                if(!res.ok) {
                    throw new Error("No se pudo cargar la información de los producto");
                }
                return res.json();
            })
            .then(datos => setProductos(datos))
            .catch(error => console.log(error))
            .finally(() => {
                setCargando(false);
            })
    }, [])
    return (
        <div className={estilo.cuadro}>
            <FormProductoContainer />
            <ItemList productos={productos} />
        </div>

    )
}

export default ItemListContainer;