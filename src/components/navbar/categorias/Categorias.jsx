import React from 'react';

export const Categorias = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Productos
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="">Velas</a></li>
                    <li><a className="dropdown-item" href="">Aromatizantes</a></li>
                    <li><a className="dropdown-item" href="">Refills</a></li>
                </ul></li>
        </>
    );
}


