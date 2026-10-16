import { useState, createContext, useContext } from "react";

export const CarritoContext = createContext();

export const useCarrito = () => {
    const context = useContext(CarritoContext);
    if (!context) {
        throw new Error("useCarrito de ser usado dentro de un CarritoProvider");
    }
    
    return context;
};

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = ({producto, cantidad = 1 }) => {
        const itemEnCarrito = carrito.find(item => item.id === producto.id);
        if(itemEnCarrito) {
            const actualizarCarrito = carrito.map(item =>
                item.id === producto.id ? { ...item, cantidad: item.cantidad + cantidad}
                : item
            );
            setCarrito(actualizarCarrito);
        } else {
            setCarrito(anteriorCarrito => [...anteriorCarrito, { ...producto, cantidad }]);
        }
    };

    const eliminarDelCarrito = (id) => {
        setCarrito(anteriorCarrito => anteriorCarrito.filter(item => item.id !== id));
    };

    const incrementarCantidad = (id) => {
        setCarrito(anteriorCarrito =>
            anteriorCarrito.map(item =>
                item.id === id ?{ ...item, cantidad: item.cantidad + 1 } :  item
            )
        );
    };

    const decrementarCantidad = (id) => {
        setCarrito(anteriorCarrito =>
            anteriorCarrito.map(item => 
                item.id === id ?{ ...item, cantidad: item.cantidad -1 } : item
            )
            .filter(item => item.cantidad > 0)
        );
    };

    const limpiarCarrito = ()  => {
        setCarrito([]);
    };

    const itemsEnCarrito = () => {
        return carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0);
    };

    const cobroTotal = () => {
        return carrito.reduce((acumulador, item) => acumulador+ (item.precio * item.cantidad), 0);
    };

    return (
        <CarritoContext.Provider value={{
            carrito,
            agregarAlCarrito,
            eliminarDelCarrito,
            incrementarCantidad,
            decrementarCantidad,
            limpiarCarrito,
            itemsEnCarrito,
            cobroTotal
        }}>
            {children}
        </CarritoContext.Provider>
    );
};