import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../utils/getProducts';
import Loader from './Loader';
import Layout from './Layout/Layout';
import Button from './Button';
import ItemCount from './ItemCount';
import { useCart } from '../Context/CartContext'; 

const ItemDetail = () => {
    const { id } = useParams();
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
            <main className="flex justify-center p-6">
                <article
                    role="dialog"
                    aria-modal="true"
                    className="bg-slate-800 shadow-xl rounded-xl p-6 w-80 sm:w-96 mb-3 animate-fade-in text-white"
                >
                    <figure className="mb-4 rounded-lg overflow-hidden">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-48 object-cover"
                        />
                    </figure>

                    <header className="mb-3">
                        <h1 className="text-xl font-bold">{name}</h1>
                    </header>

                    <p className="text-gray-300 mb-5">{description}</p>

                    <footer className="flex flex-col gap-4">
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
                </article>
            </main>
        </Layout>
    );
};

export default ItemDetail;
