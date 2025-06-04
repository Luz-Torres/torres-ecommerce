import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';

import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Products from './Components/Pages/Products';
import Cart from './Components/Pages/Cart';
import NotFound from './Components/Pages/NotFound';

import ChatWidget from './Components/ChatWidget';
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { CartProvider } from "./Context/CartContext";


const App = () => {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <Navbar/>

    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />

          <Route path="/products" element={<Navigate to="/products/todos" />} />
          <Route path='/products/:categoryId' element={<Products />} />

          <Route path='/item-detail/:id' element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

    <ChatWidget />
    <Footer/>
    </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App