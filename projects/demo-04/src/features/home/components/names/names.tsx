import { Button } from '@core/components/button/button';
import { Card } from '@core/components/card/card';
import { useEffect, useState } from 'react';

const getNames = () => {
    return ['Alice', 'Bob', 'Charlie'];
};

export const Names: React.FC = () => {
    console.log('Render Names');
    const [names, setNames] = useState<string[]>(getNames());

    useEffect(() => {
        console.log('Initial effect');
        return () => {
            console.log('Cleanup effect');
        };
    }, []);

    useEffect(() => {
        console.log('Name added' + names.at(-1));
    }, [names]);

    // Estado derivado o computad state
    const aNamesNumber = names.filter((name) => name.startsWith('A')).length;

    return (
        <Card title="Names">
            <p>Total A names: {aNamesNumber}</p>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
            <Button onClick={() => setNames([...names, `Alberto`])}>
                Add Name
            </Button>
        </Card>
    );
};
