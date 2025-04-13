import React from 'react';
import ItemCount from './Components/ItemCount';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import Footer from './Components/Pages/Footer';


const App = () => {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting="Bienvenidos a mi tienda"/>
    <Footer/>
    <ItemCount/>
    </>
  )
}

export default App