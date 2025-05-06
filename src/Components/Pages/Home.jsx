import Button from "../Button";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
const Home = () => {
    return (
        <Layout>
            <h1 className="text-6xl font-extrabold mb-4 text-center">Bienvenido a tu tienda favorita</h1>
            <h3 className="text-xl mb-8 text-center max-w-xl">
                Cubos rubik, libros, juegos . Encontrás lo que necesitás
            </h3>
            <Button>
                <Link to="/products">Comprar</Link>
            </Button>
        </Layout>
    );
};

export default Home;
