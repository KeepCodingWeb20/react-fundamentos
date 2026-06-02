import type { ProductCreateDTO } from '@features/products/entities/products';
import './product-form.css';
import { useState } from 'react';

interface Props {
    onAdd: (data: ProductCreateDTO) => void;
}

export const ProductForm: React.FC<Props> = ({ onAdd }) => {
    const initialProduct: ProductCreateDTO = {
        name: '',
        vehicleClass: '',
        model: '',
        cargoCapacity: 0,
        consumables: '',
        crew: 0,
        length: 0,
        manufacturer: '',
        passengers: 0,
        costs: 0,
        maxSpeed: 0,
    };

    const [product, setProduct] = useState(initialProduct);

    console.log('Producto', product);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Producto creado', product);
        onAdd(product);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    return (
        <section className="product-form">
            <h3>Formulario de Producto</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Crear Producto</button>
            </form>
        </section>
    );
};
