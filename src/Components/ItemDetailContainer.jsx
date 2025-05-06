import { useEffect,useState } from 'react'
import{ useParams} from 'react-router-dom';
import { getProductById } from '../utils/getProducts';
import ItemDetail from './ItemDetail';
const ItemDetailContainer = () => {
    const {id} = useParams();
    const[product, setProduct] = useState();

    useEffect(() => {
        getProductById(id)
            .then((product) => { setProduct(product);
            })
            .catch((err) => { console.error('Error al obtener el producto:',err); });
    },[id]);
    
        return (
            <section>
                <ItemDetail {...product}/>
            </section>
        );
}

export default ItemDetailContainer