import type { Product } from '@features/products/entities/products';
import { useNavigate } from 'react-router';
import { useDetails } from './use-details';
import { Card } from '@core/components/card/card';
import './product-detail.css';

type Props = {
    id: Product['id'];
};

export const ProductDetail: React.FC<Props> = ({ id }) => {
    const { product } = useDetails(id);
    const navigate = useNavigate();

    const handleGoBack = (): void => {
        navigate('/products');
    };

    return (
        <Card title={product?.name}>
            {product ? (
                <article className="product-card">
                    <dl>
                        <dt>ID:</dt>
                        <dd>{product.id}</dd>
                        <dt>Nombre:</dt>
                        <dd>{product.name}</dd>
                        <dt>Modelo:</dt>
                        <dd>{product.model}</dd>
                        <dt>Clase:</dt>
                        <dd>{product.vehicleClass}</dd>
                        <dt>Fabricante:</dt>
                        <dd>{product.manufacturer}</dd>
                        <dt>Costo en créditos:</dt>
                        <dd>{product.costs}</dd>
                        <dt>Longitud:</dt>
                        <dd>{product.length}</dd>
                        <dt>Tripulación:</dt>
                        <dd>{product.crew}</dd>
                        <dt>Pasajeros:</dt>
                        <dd>{product.passengers}</dd>
                        <dt>Velocidad atmosférica máxima:</dt>
                        <dd>{product.maxSpeed}</dd>
                        <dt>Capacidad de carga:</dt>
                        <dd>{product.cargoCapacity}</dd>
                        <dt>Consumibles:</dt>
                        <dd>{product.consumables}</dd>
                    </dl>
                </article>
            ) : (
                <p>Invalid product id [{id}]</p>
            )}
            <button onClick={handleGoBack}>Back to products list</button>
        </Card>
    );
};
