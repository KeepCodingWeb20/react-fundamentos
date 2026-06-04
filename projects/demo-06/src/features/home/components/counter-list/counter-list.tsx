import { useState } from 'react';
import { Counter } from '../counter/counter';
import './counter-list.css';

interface State {
    total: number;
    totalClicks: number;
}

export const CounterList: React.FC = () => {
    const counters = [19, 23, 36];

    // Opción con 2 estados independientes

    const [total, setTotal] = useState(0);
    const [totalClicks, setTotalClicks] = useState(0);

    // Opción con un estado mas complejo

    const [state, setState] = useState<State>({
        total: 0,
        totalClicks: 0,
    });

    const handleCounterChange = (delta = 1) => {
        setTotal((prevTotal) => prevTotal + delta);
        setTotalClicks((prevClicks) => prevClicks + 1);
        
        setState((prevState) => ({
            total: prevState.total + delta,
            totalClicks: prevState.totalClicks + 1,
        }));
    }

  
    return (
        <>
            <p>Counters. Total: {total} {state.total}</p>
            <p>Clicks. Total: {totalClicks} {state.totalClicks}</p>
            <div className="counter-list">
                {counters.map((id) => (
                    <Counter key={id} id={id} onChange={handleCounterChange} />
                ))}
            </div>
        </>
    );
};


