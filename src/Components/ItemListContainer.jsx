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
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Products</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
