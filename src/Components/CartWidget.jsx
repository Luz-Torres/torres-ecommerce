import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TfiShoppingCart } from "react-icons/tfi";
import { FiXSquare } from "react-icons/fi";
import Button from "./Button";
import { useCart } from "../Context/CartContext";

const CartWidget = () => {
    const { cart, total } = useCart();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleCart = () => {
        if (cart.length > 0) setIsOpen(prev => !prev);
    };

    const closeCart = () => setIsOpen(false);

    const handleViewCart = () => {
        navigate("/cart");
        closeCart();
    };

    return (
        <section className="relative" aria-label="Widget del carrito">
            <div
                role="button"
                aria-label="Abrir carrito"
                onClick={toggleCart}
                className="cursor-pointer relative"
            >
                <TfiShoppingCart className="text-3xl text-slate-200 hover:text-lime-300 transition-colors" />
                {cart.length > 0 && (
                    <span
                        className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                        aria-label={`Hay ${cart.length} productos en el carrito`}
                    >
                        {cart.length}
                    </span>
                )}
            </div>

            {isOpen && (
                <article
                    role="dialog"
                    aria-modal="true"
                    className="absolute top-full right-0 mt-3 w-80 sm:w-96 bg-slate-800 text-white p-4 rounded-xl shadow-xl animate-fade-in z-50"
                >
                    <header className="flex justify-between items-center mb-3">
                        <h2 className="text-lg font-semibold">Tu carrito</h2>
                        <Button onClick={closeCart} className="hover:text-red-400" aria-label="Cerrar carrito">
                            <FiXSquare size={20} />
                        </Button>
                    </header>

                    <ul className="space-y-2 max-h-64 overflow-y-auto">
                        {cart.length === 0 ? (
                            <li className="text-sm text-gray-300">Tu carrito está vacío.</li>
                        ) : (
                            cart.map((prod, index) => (
                                <li key={index} className="flex justify-between items-center border-b border-gray-700 py-1">
                                    <span>{prod.name}</span>
                                    <span className="text-sm text-white">
                                        ${prod.price} x {prod.quantity}
                                    </span>
                                </li>
                            ))
                        )}
                    </ul>

                    {cart.length > 0 && (
                        <footer className="mt-4 text-center">
                            <p className=" text-xl text-white mb-2">Total: ${total.toFixed(2)}</p>
                            <Button onClick={handleViewCart}>
                                Ver carrito completo
                            </Button>
                        </footer>
                    )}
                </article>
            )}
        </section>
    );
};

export default CartWidget;
