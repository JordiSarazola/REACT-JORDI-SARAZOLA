
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ConsultarBDD } from '../../utils/funciones';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {
    const { idCategoria } = useParams()
    const [productos, setProductos] = useState([])

    useEffect(() => {
        if (idCategoria) {
            ConsultarBDD('../json/productos.json').then(products => {
                const prods = products.filter(prod => prod.idCategoria === idCategoria)
                const items = ItemList({ prods })
                setProductos(items)
            })
        }
        else {
            ConsultarBDD('./json/productos.json').then(prods => {
                const items = ItemList({ prods })
                setProductos(items)
            })
        }
    }
        , [idCategoria])
    return (
        <div className='row p-3 cardProductos'>
            {productos}
        </div>
    );
}


