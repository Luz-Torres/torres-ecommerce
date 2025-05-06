import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Import necesario
import { TfiShoppingCart } from "react-icons/tfi";
import { FiXSquare } from "react-icons/fi";
import Notification from "./Notification";
import Button from "./Button";

const CartWidget = ({ products = [3] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNotification, setNotification] = useState(false);
    const navigate = useNavigate(); // 👈 Hook de navegación

    const toggleCart = () => setIsOpen(prev => !prev);
    const closeCart = () => setIsOpen(false);

    const handleViewCart = () => {
        setNotification(true);

        setTimeout(() => {
            setNotification(false);
            navigate("/cart");
        }, 300);
    };

    return (
        <section className="relative" aria-label="Widget del carrito">
            <div role="button" aria-label="Abrir carrito" onClick={toggleCart} className="cursor-pointer relative">
                <TfiShoppingCart className="text-3xl text-slate-200 hover:text-lime-300 transition-colors" />
                {products.length > 0 && (
                    <span
                        className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                        aria-label={`Hay ${products.length} productos en el carrito`}
                    >
                        {products.length}
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
            <button onClick={closeCart} className="hover:text-red-400" aria-label="Cerrar carrito">
                <FiXSquare size={20} />
            </button>
        </header>

        <ul className="space-y-2 max-h-64 overflow-y-auto">
            {products.length === 0 ? (
                <li className="text-sm text-gray-300">Tu carrito está vacío.</li>
            ) : (
                products.map((prod, index) => (
                    <li key={index} className="flex justify-between items-center border-b border-gray-700 py-1">
                        <span>{prod.nombre}</span>
                        <span className="text-sm text-gray-400">${prod.precio}</span>
                    </li>
                ))
            )}
        </ul>

        {products.length > 0 && (
            <footer className="mt-4">
                <Button
                    onClick={handleViewCart}
                >
                    Ver carrito completo
                </Button>
            </footer>
        )}
    </article>
)}
            {showNotification && (
                <Notification
                    message="Redirigiendo al carrito completo..."
                    onClose={() => setNotification(false)}
                />
            )}
        </section>
    );
};

export default CartWidget;

