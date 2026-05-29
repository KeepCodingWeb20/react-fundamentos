import { Card } from '@core/components/card/card';
import { useEffect, useState } from 'react';

export const Timer: React.FC = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) {
            return;
        }
        const timerId = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 500);
        return () => {
            if (timerId) {
                clearInterval(timerId);
            }
        };
    }, [isRunning]);

    return (
        <Card title="Timer">
            <p>
                Timer <output>{count}</output>
            </p>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setIsRunning(true)}>Start</button>
            <button onClick={() => setIsRunning(false)}>Stop</button>
        </Card>
    );
};
