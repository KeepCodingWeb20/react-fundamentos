import { useEffect, useState } from 'react';
import './counter.css';
import { Card } from '@core/components/card/card';

interface Props {
    id?: number;
    onChange?: (delta?: number) => void;
}

const INITIAL_COUNT = 0;

export const Counter: React.FC<Props> = ({ id, onChange }) => {
    const [count, setCount] = useState<number>(INITIAL_COUNT);

    useEffect(() => {
        console.log('Clicked; actual value', count);
    }, [count]);

    // const handlerClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    const handlerClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const delta = Number(event.currentTarget.dataset.delta);
        // setCount(count + delta);
        setCount((count) => count + delta);
        onChange?.(delta);
        // Desactualizado:
        console.log('Clicked; old value', count);
    };

    return (
        <Card>
            <div className="counter-container">
                <h3>Counter {id ? ` - ${id}` : ''}</h3>
                <button
                    type="button"
                    className="counter"
                    data-delta={-1}
                    onClick={handlerClick}
                >
                    ➖
                </button>
                <output>{count}</output>
                <button
                    type="button"
                    className="counter"
                    data-delta={1}
                    onClick={handlerClick}
                >
                    ➕
                </button>
            </div>
        </Card>
    );
};
