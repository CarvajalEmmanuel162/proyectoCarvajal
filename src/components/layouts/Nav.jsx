import { Link } from "react-router-dom";
import estilo from "./Nav.module.css"

const Nav = () => {
    return (
        <nav className={estilo.nav}>
            <ul className={estilo.lista}>
                <li><Link to="/" className={estilo.listado}> Inicio </Link></li>
                <li><Link to="/productos" className={estilo.listado}> Productos</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;