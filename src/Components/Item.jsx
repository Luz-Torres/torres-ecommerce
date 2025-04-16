const Item = ({ product }) => {
    return (
        <div className="flex flex-col items-center justify-between bg-white shadow-lg rounded-2xl p-4 m-4 w-full max-w-sm transition-transform duration-300 hover:scale-105">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-xl"
            />
            <div className="mt-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                <p className="text-xl font-bold text-rose-600 mt-2">${product.price}</p>

                <button className="mt-4 px-4 py-2 bg-slate-800 text-slate-200 rounded-lg hover:text-lime-300 transition duration-200 border border-slate-600">
                    Ver más
                </button>
            </div>
        </div>
    );
};

export default Item;