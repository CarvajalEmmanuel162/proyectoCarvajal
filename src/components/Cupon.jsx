import { useState, useEffect } from "react";
import { collection, getDoc } from "firebase/firestore";
import { db } from   "../firebase/config";

const Cupon = () => {
    const [cupones, setCupones] = useState([]);
    const[cargando,setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCupones = async () => {
            try {
                setCargando(true);
                const querySnapshot = await getDoc(collection(db, "cupones"));
                const docs = querySnapshot.doc.map(docSnap => ({
                    id: docSnap.id,
                    ...docSnap.data(),
                }));
                setCupones(docs);
            } catch (err) {
                console.log("Error al obtener cupones: ", err);
                setError("Ocurrió un error al cargar los cupones.");
            } finally {
                setCargando(false);
            }
        };
        fetchCupones();
    }, []);
    return (
        <div>
            <section>
                <header>
                    <h1>Cupones Promocionales</h1>
                </header>

                {cargando && <p>Carcgando cupones...</p>}

                {error && <div>{error}</div>}

                {!cargando && !error && cupones.length === 0 && (
                    <p>No hay cupones creados en la base de datos</p>
                )}

                {!cargando && !error && cupones.length > 0 && (
                    <section>
                        <div>
                            <h2>Cupones activos</h2>
                            <span>{cupones.length}</span>
                        </div>

                        <div>
                            {cupones.map(cupon => (
                                <article key={cupon.id}>
                                    <div>
                                        <span>{cupon.codigo}</span>
                                        <span>{cupon.descuento}%</span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                )}
            </section>
        </div>
    );
}

export default Cupon;