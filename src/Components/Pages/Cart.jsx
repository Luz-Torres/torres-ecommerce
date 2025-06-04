import Layout from "../Layout/Layout";
import { useCart } from "../../Context/CartContext";
import Button from "../../Components/Button";
import Background from "../Layout/Background";

const Cart = () => {
    const {
        cart,
        total,
        totalQuantity,
        updateQuantity,
        removeFromCart,
        clearCart,
    } = useCart();

    return (
        <Layout className="h-[83vh]">
            <Background className="bg-gray-900 text-white p-6 rounded-lg">
                <h1 className="text-3xl font-bold mb-6">
                    {cart.length === 0 ? "Hasta el carrito está esperando que cobres." : "Carrito de compra"}
                </h1>

                {cart.length === 0 ? (
                    null
                ) : (
                    <>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border-collapse border border-gray-700">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-700 px-6 py-3 text-left">Producto</th>
                                        <th className="border border-gray-700 px-6 py-3 text-left">Cantidad</th>
                                        <th className="border border-gray-700 px-6 py-3 text-left">Precio unitario</th>
                                        <th className="border border-gray-700 px-6 py-3 text-left">Subtotal</th>
                                        <th className="border border-gray-700 px-6 py-3 text-left">Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item) => (
                                        <tr key={item.id} className="hover:bg-slate-700">
                                            <td className="border border-gray-700 px-6 py-3">{item.name}</td>
                                            <td className="border border-gray-700 px-6 py-3">
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity}
                                                    onChange={(e) =>
                                                        updateQuantity(item.id, parseInt(e.target.value))
                                                    }
                                                    className="w-16 text-center rounded bg-gray-700 text-white border border-gray-600"
                                                    aria-label={`Cantidad de ${item.name}`}
                                                />
                                            </td>
                                            <td className="border border-gray-700 px-6 py-3">
                                                ${item.price.toFixed(2)}
                                            </td>
                                            <td className="border border-gray-700 px-6 py-3">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </td>
                                            <td className="border border-gray-700 px-6 py-3">
                                                <Button
                                                    onClick={() => removeFromCart(item.id)}
                                                    aria-label={`Eliminar ${item.name}`}
                                                    className="bg-rose-600 hover:bg-rose-700"
                                                >
                                                    Eliminar
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <footer className="mt-6 border-t border-gray-700 pt-4 flex flex-col sm:flex-row sm:justify-between gap-4">
                            <p>Total productos: <strong>{totalQuantity}</strong></p>
                            <p className="font-semibold text-lime-400">Total: ${total.toFixed(2)}</p>
                        </footer>

                        <div className="mt-6 text-center">
                            <Button
                                onClick={clearCart}
                                className={`px-6 py-2 rounded ${
                                    cart.length === 0
                                        ? "bg-gray-500 cursor-not-allowed"
                                        : "bg-red-600 hover:bg-red-700"
                                }`}
                                disabled={cart.length === 0}
                            >
                                Vaciar carrito
                            </Button>
                        </div>
                    </>
                )}
            </Background>
        </Layout>
    );
};

export default Cart;

