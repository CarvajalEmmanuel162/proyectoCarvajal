import { Link } from "react-router-dom";
import estilo from "./Nav.module.css"

const Nav = () => {
    return (
        <ul className={estilo.nav}>
            <li><Link to="/" > Inicio </Link></li>
            <li><Link to= "/productos"> Productos </Link></li>
            <li><Link to="/carrito">Carrito</Link></li>
        </ul>
    )
}
export default Nav;