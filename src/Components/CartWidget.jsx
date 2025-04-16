import { TfiShoppingCart } from "react-icons/tfi";

const CartWidget = () => {
    return (
        <div className="relative">
            <TfiShoppingCart className="text-3xl text-slate-200 hover:text-lime-300 cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                5
            </span>
        </div>
    );
};

export default CartWidget;
