import { useState } from "react";
import FormProducto from "./FormProducto";

const FormProductoContainer = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        precio: "",
        stock : "",
    });
    const [imagen, setImagen] = useState(null);
    const [cargando, setCargando] = useState(false);

    const manejarCambio = (evento) => {
        const { name, value } = evento.target;
        setDatosForm({
            ...datosForm, [name]: value,
        });
    };

    const manejarCambioImagen = (evento) => {
        setImagen(evento.target.files[0]);
    };

    const manejarEnvio = async (evento) => {
        evento.preventDefault();

        if (!imagen) {
            alert("Por favor, selecciona una imagen para el producto,");
            return;
        }

        setCargando(true);

        const apiKey = "df259a9212f2405ff031804760a89b1d";
        const formData = new FormData();
        formData.append("image", imagen);

        try {
            console.log("Subiendo imagen a Imgbb...");
            const respuestaImgbb = await fetch(
                `https://api.imgbb.com/1/upload?key=${apiKey}`,
                {
                    method: "POST",
                    body: formData,
                },
            );
            const datosImgbb = await respuestaImgbb.json();
            if (datosImgbb.success) {
                console.log("Imagen subida con éxito. URL: ", datosImgbb.data.url);
                
                const productoCompleto = {
                    ...datosForm, urlImagen: datosImgbb.data.url,
                }
                console.log("Enviando los siguientes datos COMPLETOS a la API:", productoCompleto);
            } else {
                throw new Error("La subida de la imagen a Imgbb falló.");
                
            }
        } catch (error) {
            console.error("Error en el proceso de envío:", error);
            alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
        } finally {
            setCargando(false);
        }
    };

    return (
        <FormProducto
        manejarCambio={manejarCambio}
        manejarEnvio={manejarEnvio}
        manejarCambioImagen={manejarCambioImagen}
        datosForm={datosForm}
        cargando={cargando}
        />
    );
};

export default FormProductoContainer;