import { useState } from 'react';

const ItemCount = () => {

    const [count, setCount] = useState(0);
    
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (
        <div className="flex items-center gap-6 bg-white px-6 py-4 rounded-xl shadow-md border border-gray-200">
            <button
                onClick={decrement}
                className="text-2xl font-bold text-gray-700 w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
                –
            </button>
            <span className="text-3xl font-semibold text-gray-800 w-10 text-center select-none">{count}</span>
            <button
                onClick={increment}
                className="text-2xl font-bold text-gray-700 w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
                +
            </button>
        </div>
    );
}

export default ItemCount