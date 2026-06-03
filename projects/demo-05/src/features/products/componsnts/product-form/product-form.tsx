import type {
    Product,
    ProductCreateDTO,
} from '@features/products/entities/products';
import './product-form.css';
import { useState } from 'react';

interface Props {
    editedProduct?: Product;
    onAdd?: (data: ProductCreateDTO) => void;
    onEdit?: (data: Product) => void;
}

export const ProductForm: React.FC<Props> = ({
    editedProduct,
    onAdd,
    onEdit,
}) => {
    const initialProduct: Product | ProductCreateDTO = editedProduct || {
        name: '',
        model: '',
        vehicleClass: '',
        manufacturer: '',
        length: 0,
        costs: 0,
        crew: 0,
        passengers: 0,
        maxSpeed: 0,
        cargoCapacity: 0,
        consumables: '',
    };

    const [product, setProduct] = useState(initialProduct);

    console.log('Producto', product);

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (editedProduct && onEdit && 'id' in product) {
            console.log('Producto actualizado', product);
            // Aquí podrías llamar a una función de actualización en lugar de onAdd
            onEdit(product);
        } else if (onAdd) {
            console.log('Producto creado', product);
            onAdd(product);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;
        const numericFields: Array<keyof ProductCreateDTO> = [
            'length',
            'costs',
            'crew',
            'passengers',
            'maxSpeed',
            'cargoCapacity',
        ];

        setProduct({
            ...product,
            [name]: numericFields.includes(name as keyof ProductCreateDTO)
                ? Number(value)
                : value,
        });
    };

    return (
        <section className="product-form">
            <h3>Formulario de Producto</h3>
            <form onSubmit={handleSubmit}>
                {`id` in product && (
                    <label htmlFor="id" className="control-group">
                        <span>ID:</span>
                        <input
                            type="text"
                            id="id"
                            value={product.id}
                            readOnly
                        />
                    </label>
                )}

                <label htmlFor="name" className="control-group">
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="model" className="control-group">
                    Model:
                    <input
                        type="text"
                        name="model"
                        value={product.model}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="vehicleClass" className="control-group">
                    Vehicle Class:
                    <input
                        type="text"
                        name="vehicleClass"
                        value={product.vehicleClass}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="manufacturer" className="control-group">
                    Manufacturer:
                    <input
                        type="text"
                        name="manufacturer"
                        value={product.manufacturer}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="length" className="control-group">
                    Length:
                    <input
                        type="number"
                        name="length"
                        value={product.length}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="costs" className="control-group">
                    Costs:
                    <input
                        type="number"
                        name="costs"
                        value={product.costs}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="crew" className="control-group">
                    Crew:
                    <input
                        type="number"
                        name="crew"
                        value={product.crew}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="passengers" className="control-group">
                    Passengers:
                    <input
                        type="number"
                        name="passengers"
                        value={product.passengers}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="maxSpeed" className="control-group">
                    Max Speed:
                    <input
                        type="number"
                        name="maxSpeed"
                        value={product.maxSpeed}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="cargoCapacity" className="control-group">
                    Cargo Capacity:
                    <input
                        type="number"
                        name="cargoCapacity"
                        value={product.cargoCapacity}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="consumables" className="control-group">
                    Consumables:
                    <input
                        type="text"
                        name="consumables"
                        value={product.consumables}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">
                    {editedProduct ? 'Actualizar Producto' : 'Crear Producto'}
                </button>
            </form>
        </section>
    );
};
