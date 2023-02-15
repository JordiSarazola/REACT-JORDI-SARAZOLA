
import { useState } from "react";
export const  ItemCount = ({ValInicial, stock}) => {
    const [contador, setContador] = useState (ValInicial, stock) 
    const sumar = () => contador < stock &&  setContador (contador +1) 
    const restar = () => contador > ValInicial && setContador (contador -1)



    return (
        <div>
            <button className="btn btn-danger" onClick={ ()=> {restar (contador-1) }}>-</button>
            {contador}
            <button className=" btn btn-danger" onClick={ ()=> {sumar(contador+1) }}>+</button>
            <button className="btn btn-light">Agregar al Carrito</button>
        </div>
    );
}


