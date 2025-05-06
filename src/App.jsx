import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';

import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Products from './Components/Pages/Products';
import Cart from './Components/Pages/Cart';
import NotFound from './Components/Pages/NotFound';

import ChatWidget from './Components/ChatWidget';
import ItemDetailContainer from "./Components/ItemDetailContainer";

/* import ItemList from './Components/ItemList';
import ItemListContainer from "./Components/ItemListContainer"; */


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/item-detail/:id' element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <ChatWidget />
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App