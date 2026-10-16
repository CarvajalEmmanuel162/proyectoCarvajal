import { useEffect } from "react";
import Asistentes from "../Asistentes";

const asistentes = [ 
  { nombre: 'Juan Pérez', tarea: 'Frontend Developer', emoji: '' },
  { nombre: 'Ana Gómez', tarea: 'Diseñadora UX/UI', emoji: '' },
  { nombre: 'Carlos Ruiz', tarea: 'Backend Developer', emoji: '' }
];

function CuerpoPosteo (){
    useEffect(() => {
        console.log("El componente se esta montando");
        return () => {
            console.log("El componente de ha desmontado");
        }
    },[])
    return (
        <>
        <p> Aca va lo del cuerpo.</p>
        <Asistentes personas={asistentes}/>
        </>
        
    );  
};

export default CuerpoPosteo;