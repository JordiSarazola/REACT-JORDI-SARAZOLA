import { Link } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"
import { useCarritoContext } from "../../context/CarritoContext"
export const ItemDetail = ({ prod }) => {
  const { addItem } = useCarritoContext()

  const onAdd = (cantidad) => { //Agregar producto al carrito
    addItem(prod, cantidad)
  }
  return (
    <div className="row g-0">
        <div className="col-md-4">
        <img src={prod.img} className="rounded img-cart mx-auto d-block card-img-top" alt="..." />
    </div>
    <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">{prod.nombre}</h5>
            <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
            <p className="card-text">Stock: {prod.stock}</p>
            <ItemCount ValInicial={1} stock={prod.stock} onAdd={onAdd}/>
            <Link className="nav-link" to={"/"}><button className="btn btn-danger mt-1">Continuar comprando</button></Link>
        </div>
    </div>
    </div>
  )
}


