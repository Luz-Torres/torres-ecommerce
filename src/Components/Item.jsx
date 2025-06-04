import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <article className="flex flex-col items-center justify-between bg-slate-800 shadow-lg rounded-2xl p-4 m-4 w-full max-w-sm transition-transform duration-300 hover:scale-105">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover rounded-xl"
            />
            <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-100">{product.name}</h2>
                <p className="text-xl font-bold text-rose-600 mt-2 mb-6">${product.price}</p>

                <Link to={`/item-detail/${product.id}`} className="px-6 py-2 font-bold bg-yellow-400 hover:bg-yellow-500 text-stone-950 rounded-lg transition">
                    Más info
                </Link>
            </div>
        </article>
    );
};

export default Item;