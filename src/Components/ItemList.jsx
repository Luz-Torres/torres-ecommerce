import Item from './Item';
import Loader from './Loader';
const ItemList = ({ products }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {products && products.length > 0 ? (
                products.map((product) => (
                    <Item key={product.id} product={product} />
                ))
            ) : (
                <Loader/>
            )}
        </div>
    );
};

export default ItemList;
