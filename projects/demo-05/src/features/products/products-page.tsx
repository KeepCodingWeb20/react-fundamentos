import { ProductsList } from './componsnts/products-list/products-list';
import './products-page.css';

export const ProductsPage: React.FC = () => {
    return (
        <section>
            <h2>Productos</h2>
            <ProductsList />
        </section>
    );
};

export default ProductsPage;
