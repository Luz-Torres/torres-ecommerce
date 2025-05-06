import { useEffect,useState } from 'react'
import{ useParams} from 'react-router-dom';
import { getProductById } from '../utils/getProducts';

import Button from './Button';


const ItemDetail = () => {
    const {id} = useParams();
    const[product, setProduct] = useState();

    useEffect(() => {
        getProductById(id)
            .then((product) => {
                setProduct(product);
            })
            .catch((err) => {
                console.error('Error al obtener el producto:',err);
            });
    },[id]);
    

        if (!product) {
            return (
                <section className="text-center p-8" role="status" aria-live="polite">
                    Cargando...
                </section>
            );
        }

        const { name, description, price, image } = product;
    
        return (
            <main className="max-w-4xl mx-auto p-8">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <figure className="md:w-1/2">
                        <img
                            className="h-64 w-full object-cover md:h-full"
                            src={image}
                            alt={name}
                        />
                        <figcaption className="sr-only">{name}</figcaption>
                    </figure>
    
                    <section className="p-6 flex flex-col justify-between md:w-1/2">
                        <header>
                            <h1 className="text-2xl font-bold mb-2">{name}</h1>
                        </header>
    
                        <p className="text-gray-600 mb-4">{description}</p>
    
                        <footer className="flex items-center justify-between mt-4">
                            <span className="text-xl font-semibold text-green-600">
                                ${price}
                            </span>
                            <Button
                                aria-label={`Agregar ${name} al carrito`}
                            >
                                Agregar al carrito
                            </Button>
                        </footer>
                    </section>
                </article>
            </main>
        );
}
export default ItemDetail;
