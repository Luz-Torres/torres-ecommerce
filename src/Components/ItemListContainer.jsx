import ItemList from './ItemList';

const ItemListContainer = ({ products, selectedCategory }) => {
    return (
        <div>
            <ItemList products={products} selectedCategory={selectedCategory} />
        </div>
    );
};

export default ItemListContainer;

