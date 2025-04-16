import Item from './Item';

const ItemList = ({ products }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {products && products.length > 0 ? (
                products.map((product) => (
                    <Item key={product.id} product={product} />
                ))
            ) : (
                <p>No hay productos</p>
            )}
        </div>
    );
};

export default ItemList;
