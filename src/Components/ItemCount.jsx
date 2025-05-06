import { useState } from 'react';
import Button from './Button';

const ItemCount = () => {

    const [count, setCount] = useState(0);
    
    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 0) setCount(count - 1);
    };
    return (
        <div className=" flex w-fit items-center gap-1 px-6 py-4 rounded-xl">
            <Button
                onClick={decrement} disabled={count === 0}
                className={
                    `w-10 h-10 border border-gray-300
                    ${count === 0
                    ? 'text-gray-400  cursor-not-allowed bg-gray-100'
                    : 'text-gray-700  hover:bg-gray-100'}
                `}
            >-</Button>

            <span className="text-3xl font-semibold text-gray-800 w-10 text-center select-none">{count}</span>
            <Button
                onClick={increment}
                className="w-10 h-10 border border-gray-300"
            >
                +
            </Button>
        </div>
    );
}

export default ItemCount