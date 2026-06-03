import type { Product } from '@features/products/entities/products';
import React from 'react';
import './product-item.css';
import { ProductForm } from '../product-form/product-form';
import { Link } from 'react-router';

interface Props {
    product: Product;
    onDelete: (id: string) => void;
    onEdit: (product: Product) => void;
}

export const ProductItem: React.FC<Props> = ({ product, onDelete, onEdit }) => {
    const dialogRef = React.useRef<HTMLDialogElement>(null);
    const handleDelete = () => {
        console.log(`Producto con id ${product.id} eliminado`);
        onDelete(product.id);
    };

    const handleEdit = (product: Product) => {
        console.log(`Producto con id ${product.id} editado`);
        onEdit(product);
        dialogRef.current?.close();
    };

    const handleStartEdit = () => {
        console.log(`Producto con id ${product.id} preparado para edición`);
        // Open ProductForm with product data for editing
        dialogRef.current?.showModal();
    };

    return (
        <li className="product-item">
            <h3>{product.name}</h3>
            <p>{product.vehicleClass}</p>
            <p>{product.model}</p>
            <p>{product.manufacturer}</p>
            <button onClick={handleStartEdit}>Editar</button>
            <button onClick={handleDelete}>Borrar</button>
            <Link to={'/product/' + product.id}>
                <button>Details</button>
            </Link>
            <dialog ref={dialogRef}>
                <ProductForm onEdit={handleEdit} editedProduct={product} />
            </dialog>
        </li>
    );
};
