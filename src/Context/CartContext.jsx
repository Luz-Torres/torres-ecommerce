import { createContext, useContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0,
    addToCart: () => { },
    removeFromCart: () => { },
    clearCart: () => { },
    updateQuantity: () => { },
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        const totalCalc = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const quantityCalc = cart.reduce((acc, item) => acc + item.quantity, 0);

        setTotal(totalCalc);
        setTotalQuantity(quantityCalc);
    }, [cart]);

    const addToCart = (product, quantity = 1) => {
        setCart((prevCart) => {
            const existing = prevCart.find((item) => item.id === product.id);

            if (existing) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });

        Swal.fire('Agregado', 'Producto agregado al carrito', 'success');
    };

    const removeFromCart = (id) => {
        Swal.fire({
            title: '¿Eliminar producto?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {
                setCart((prevCart) => prevCart.filter((item) => item.id !== id));
                Swal.fire('Eliminado', 'Producto eliminado del carrito', 'success');
            }
        });
    };

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) return;

        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
        Swal.fire('Carrito vacío', 'Todos los productos fueron eliminados', 'info');
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                total,
                totalQuantity,
                addToCart,
                removeFromCart,
                clearCart,
                updateQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
