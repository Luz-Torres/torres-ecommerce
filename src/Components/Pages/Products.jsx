import { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import ItemListContainer from '../../Components/ItemListContainer';
import Filter from './Filter';
import { getProductsByCategory } from '../../utils/getProducts';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('todos');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsByCategory(selectedCategory).then((res) => {
            setProducts(res);
        });
    }, [selectedCategory]);

    return (
        <Layout>
            <h1 className="text-3xl text-center font-bold mt-5 mb-5">Productos</h1>

            <Filter
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
            />

            <main>
                <ItemListContainer products={products} />
            </main>
        </Layout>
    );
};

export default Products;
