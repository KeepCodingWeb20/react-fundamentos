import { useEffect, useState } from 'react';
import type { Product, ProductCreateDTO } from '../../entities/products';
import { productsRepo } from '../../services/products-repo';
import './products-list.css';
import { ProductItem } from '../product-item/product-item';
import { ProductForm } from '../product-form/product-form';

export const ProductsList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const products = productsRepo.getProducts();
        setProducts(products);
    }, []);


    const addProduct = (product: ProductCreateDTO) => {
        const newProduct: Product = {
            id: crypto.randomUUID().slice(0, 4),
            ...product
        };
        setProducts([newProduct, ...products]);
    };

    const deleteProduct = (id: string) => {
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
    };

    return (
        <>
            <details>
                <summary>Add Product</summary>
                <ProductForm onAdd={addProduct} />
            </details>
            <section className="products-list">
                <ul>
                    {products.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            onDelete={deleteProduct}
                        />
                    ))}
                </ul>
            </section>
        </>
    );
};
