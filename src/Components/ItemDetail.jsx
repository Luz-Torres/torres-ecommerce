import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // 👈 se agrega useNavigate
import { getProductById } from '../utils/getProducts';
import Loader from './Loader';
import Layout from './Layout/Layout';
import Button from './Button';
import ItemCount from './ItemCount';
import { useCart } from '../Context/CartContext';

const ItemDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // 👈 hook de navegación
    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    useEffect(() => {
        getProductById(id)
            .then((product) => {
                setProduct(product);
            })
            .catch((err) => {
                console.error('Error al obtener el producto:', err);
            });
    }, [id]);

    if (!product) {
        return <Loader />;
    }

    const { name, description, price, image } = product;

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return (
        <Layout className="h-[83vh]">
            <main className=" flex flex-col items-center p-6 text-center">
                <Button
                    onClick={() => navigate(-1)}
                    className="self-start mb-4 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded"
                >
                    Volver
                </Button>

                <article className="bg-slate-800 shadow-xl rounded-xl p-6 w-full max-w-3xl animate-fade-in text-white flex flex-col md:flex-row gap-6">
                    <figure className="md:w-1/2">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-64 object-cover rounded"
                        />
                    </figure>

                    <div className="flex flex-col justify-between md:w-1/2">
                        <header>
                            <h1 className="text-2xl font-bold">{name}</h1>
                            <p className="text-gray-300 mt-2">{description}</p>
                        </header>

                        <footer className="mt-4 flex flex-col gap-4">
                            <span className="text-2xl font-semibold text-green-400">${price}</span>
                            <ItemCount count={quantity} setCount={setQuantity} />
                            <Button
                                aria-label={`Agregar ${name} al carrito`}
                                className="w-full bg-green-600 hover:bg-green-700 transition"
                                onClick={handleAddToCart}
                            >
                                Agregar al carrito
                            </Button>
                        </footer>
                    </div>
                </article>
            </main>
        </Layout>
    );
};

export default ItemDetail;
