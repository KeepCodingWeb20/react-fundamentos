import { Card } from '@core/components/card/card';
import { useState, type ChangeEvent } from 'react';
import './greetings.css';

export const Greetings: React.FC = () => {
    const [userName, setUserName] = useState<string>('');
    console.log(userName);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    return (
        <>
            <label className="control-wrapper" htmlFor="name">
                Introduce tu nombre:
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={userName}
                />
            </label>
            <Card>
                {userName ? (
                    <>
                        <p> Hola {userName}</p>
                        <button onClick={() => setUserName('')}>
                            Borrar nombre
                        </button>
                    </>
                ) : (
                    <p>Hola amigo </p>
                )}
            </Card>
        </>
    );
};
