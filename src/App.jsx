import ItemCount from './Components/ItemCount';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Footer from './Components/Pages/Footer';
import ItemListContainer from './Components/ItemListContainer';
/* import Input from './Components/Input'; */
const App = () => {
  return (
    <>
    <Navbar/>
    <Home greeting="Bienvenidos a mi tienda"/>
    <Footer/>
    <ItemCount/>
    <ItemListContainer/>
    {/* <Input/> */}
    </>
  )
}

export default App