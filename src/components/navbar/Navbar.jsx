import { CartWidget } from "../CardWidget/CardWidget";
import { Categorias } from "./categorias/Categorias";
import { Secciones } from "./secciones/Secciones";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Secciones/>
                        <Categorias/>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
}