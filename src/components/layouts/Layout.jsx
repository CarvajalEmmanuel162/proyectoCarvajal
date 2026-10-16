import { Outlet } from "react-router-dom";
import Encabezado from "./Encabezado";
import PieDePosteo from "./PieDePosteo";
import Nav from "./Nav";
import estilo from "./Layout.module.css"

const Layout = () => {
    return (
        <div className={estilo.base}>
            <Encabezado/>
            <Nav/>
            <main>
                <Outlet />
            </main>
            
            <PieDePosteo/>
        </div>
    );
};
export default Layout;