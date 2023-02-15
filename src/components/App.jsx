
import './App.css';

import { Navbar } from './navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';




export const App = () => {
  return (
  <> 
    <Navbar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
    
    
  </>



);
}

