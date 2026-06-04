import './products-list.css';
import { ProductItem } from '../product-item/product-item';
import { ProductForm } from '../product-form/product-form';
import { useProducts } from './use-products';

export const ProductsList: React.FC = () => {
    const { products, error, editProduct, addProduct, deleteProduct } =
        useProducts();

    return (
        <>
            {error && <p className="error">{error}</p>}
            
            <details>
                <summary>Add Product</summary>
                <ProductForm onAdd={addProduct} />
            </details>


            {!error && (
                <section className="products-list">
                    <ul>
                        {products.map((product) => (
                            <ProductItem
                                key={product.id}
                                product={product}
                                onDelete={deleteProduct}
                                onEdit={editProduct}
                            />
                        ))}
                    </ul>
                </section>
            )}
        </>
    );
};
