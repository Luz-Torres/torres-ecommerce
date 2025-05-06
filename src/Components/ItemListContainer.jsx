import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getProducts } from '../utils/getProducts';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6">
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
