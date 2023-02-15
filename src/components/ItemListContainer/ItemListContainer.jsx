
import { useState, useEffect } from 'react';
import { ConsultarBDD } from '../../utils/funciones';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        ConsultarBDD('./json/productos.json').then(prods => {
            const items = ItemList({ prods })
            setProductos(items)
        })
    }
        , [])
    return (
        <div className='row p-3 cardProductos'>
            {productos}
        </div>
    );
}


