import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const NotFound = () => {
    return (
        <Layout>
        <main>
            <div className="text-8xl mb-4">😕</div>
            <h1 className="text-4xl font-bold mb-2">404 - No encontramos nada</h1>
            <p className="mb-6">La página no existe.</p>
            <Link
                to="/"
                className="px-6 py-2 font-bold  bg-yellow-400 hover:bg-yellow-500 text-stone-950 rounded-lg transition"
            >
                Volver al inicio
            </Link>
        </main>
        </Layout>
    );
}
export default NotFound;