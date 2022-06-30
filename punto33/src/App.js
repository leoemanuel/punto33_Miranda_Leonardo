import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import {ItemListContainer} from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Router, Route, Routes, Navigate} from 'react-router-dom'
import { CartView } from './Components/CartView/CartView';
import { CartContextProvider } from './Components/CartContext/CartContext';
import { AppRouter } from './router/AppRouter';

function App() {


  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <AppRouter/>
      </BrowserRouter>
    </CartContextProvider>

    
  );
}

export default App;