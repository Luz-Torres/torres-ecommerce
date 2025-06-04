import Button from "./Button";

const ItemCount = ({ count, setCount }) => {
    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 0) setCount(count - 1);
    };

    return (
        <div className="flex w-fit items-center gap-3 px-6 py-4 rounded-2xl">
            <Button
                onClick={decrement}
                disabled={count === 0}
                className={`w-10 h-10 rounded-full border  text-xl font-bold transition-all duration-200
                    ${count === 0
                        ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100 hover:scale-105'}
                `}
            >
                –
            </Button>

            <span className="text-2xl font-semibold text-white w-12 text-center select-none">
                {count}
            </span>

            <Button
                onClick={increment}
                className="w-8 h-10 rounded-full border  text-xl font-bold text-gray-700 hover:bg-gray-100 hover:scale-105 transition-all duration-200"
            >
                +
            </Button>
        </div>
    );
};

export default ItemCount;
