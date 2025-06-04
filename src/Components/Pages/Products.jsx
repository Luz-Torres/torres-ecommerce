import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Layout from '../Layout/Layout';
import ItemListContainer from '../../Components/ItemListContainer';
import Filter from '../../Components/Filter';
import { getProductsByCategory } from '../../utils/getProducts';

const Products = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsByCategory(categoryId || 'todos').then((res) => {
            setProducts(res);
        });
    }, [categoryId]);

    return (
        <Layout>
            <h1 className="text-3xl text-center font-bold mt-5 mb-5">Productos</h1>
            <Filter selectedCategory={categoryId || 'todos'} />
            <main>
                <ItemListContainer 
                    products={products} 
                    selectedCategory={categoryId || 'todos'} 
                />
            </main>
        </Layout>
    );
};

export default Products;
