import { useState } from 'react';

interface Props {
    id?: number;
}

export const Counter: React.FC<Props> = ({ id }) => {
    const [count, setCount] = useState(0);
    return (
        <div className="counter-container">
            <h3>Counter - {id}</h3>
            <button
                type="button"
                className="counter"
                onClick={() => setCount((count) => count + 1)}
            >
                Count is {count}
            </button>
        </div>
    );
};
