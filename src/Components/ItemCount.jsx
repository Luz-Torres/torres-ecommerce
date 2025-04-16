import { useState } from 'react';

const ItemCount = () => {

    const [count, setCount] = useState(0);
    
    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 0) setCount(count - 1);
    };
    return (
        <div className="flex w-fit items-center gap-1 bg-white px-6 py-4 rounded-xl">
            <button
                onClick={decrement} disabled={count === 0}
                className={
                    `text-2xl font-bold w-10 h-10 border rounded-lg transition 
                    ${count === 0
                    ? 'text-gray-400 border-gray-200 cursor-not-allowed bg-gray-100'
                    : 'text-gray-700 border-gray-300 hover:bg-gray-100'}
                `}
                /* className="text-2xl font-bold text-gray-700 w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
             */>
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