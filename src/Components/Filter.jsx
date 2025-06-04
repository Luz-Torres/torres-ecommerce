import { Link } from "react-router-dom";

const Filter = () => {

    return (
        <nav className="flex justify-center gap-4 mb-6">
            <Link className="px-6 py-2 font-bold  bg-yellow-400 hover:bg-yellow-500 text-stone-950 rounded-lg transition " to="/products">Todos</Link>
            <Link className="px-6 py-2 font-bold  bg-yellow-400 hover:bg-yellow-500 text-stone-950 rounded-lg transition " to="/products/1">Cubos</Link>
            <Link className="px-6 py-2 font-bold  bg-yellow-400 hover:bg-yellow-500 text-stone-950 rounded-lg transition " to="/products/2">Libros</Link>
        </nav>
    );
};

export default Filter;