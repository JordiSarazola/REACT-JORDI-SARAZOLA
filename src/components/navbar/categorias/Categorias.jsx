import { Link } from "react-router-dom";

export const Categorias = () => {
    return (
        
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <button className="btn btn-info">Productos</button>
                </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to={'/category/Velas'}>Velas</Link></li>
                    <li><Link className="dropdown-item" to={'/category/Aromatizantes'}>Aromatizantes</Link></li>
                    <li><Link className="dropdown-item" to={'/category/Refill'}>Refill</Link></li>
                </ul></li>
        
    );
}


