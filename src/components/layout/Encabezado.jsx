import estilo from "./Encabezado.module.css";

function Encabezado() {
  return (
    <div className={estilo.header}>
      <img className={estilo.logo} src="../favicon.ico"/>
      <h1>IRON STRING</h1>
    </div>
  );
};

export default Encabezado;
 