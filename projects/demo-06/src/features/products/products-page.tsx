import { useParams } from 'react-router';
import { ProductsList } from './componsnts/products-list/products-list';
import './products-page.css';
import { ProductDetail } from './componsnts/product-detail/product-detail';

export const ProductsPage: React.FC = () => {
      const { id } = useParams<{ id: string }>();
    
    return (

        <section>
            <h2>Productos</h2>
            {id ? <ProductDetail id={id} /> : <ProductsList />}
        </section>
    );
};

export default ProductsPage;
