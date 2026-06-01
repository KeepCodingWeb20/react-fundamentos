import { useId, useState, type ChangeEvent } from 'react';
import { Card } from '../../../../core/components/card/card';

interface User {
    username: string;
    // email: string;
    password: string;
    isOkConditions: boolean;
    turn: string;
    course: string;
}

const initialUser: User = {
    username: '',
    password: '',
    isOkConditions: false,
    turn: '',
    course: '',
};

export const Register: React.FC = () => {
    const [user, setUser] = useState<User>(initialUser);

    const registerIds = {
        userName: useId(),
        // email: useId(),
        password: useId(),
        isOkConditions: useId(),
        turn: useId(),
        course: useId(),
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({ ...prevUser, [name]: event.target.type === 'checkbox' ? event.target.checked : value }));
    };

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Register data:', user);
    };

    return (
        <Card title="Register">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={registerIds.userName}>Username:</label>
                    <input
                        type="text"
                        id={registerIds.userName}
                        name="username"
                        required
                        value={user.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor={registerIds.password}>Password:</label>
                    <input
                        type="password"
                        id={registerIds.password}
                        name="password"
                        required
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="group-control-line">
                    <input
                        type="checkbox"
                        id={registerIds.isOkConditions}
                        name="isOkConditions"
                        onChange={handleChange}
                    />
                    <label htmlFor={registerIds.isOkConditions}>
                        Acepto las condiciones...
                    </label>
                </div>

                  <fieldset name="turn" >
                    <legend>Selecciona un turno</legend>
                    <div className="group-control-line">
                        <label htmlFor={registerIds.turn + "-m"}>
                            <input
                                type="radio"
                                name="turn"
                                id={registerIds.turn + "-m"}
                                value="M"
                                onChange={handleChange}
                            />
                            <span>Mañana</span>
                        </label>

                        <label htmlFor={registerIds.turn + "-t"}>
                            <input
                                type="radio"
                                name="turn"
                                id={registerIds.turn + "-t"}
                                value="T"
                                onChange={handleChange}
                            />
                            <span>Tarde</span>
                        </label>
                        <label htmlFor={registerIds.turn + "-n"}>
                            <input
                                type="radio"
                                name="turn"
                                id={registerIds.turn + "-n"}
                                value="N"
                                onChange={handleChange}
                            />
                            <span>Noche</span>
                        </label>
                    </div>
                </fieldset>
                <div className="group-control-line">
                    <label htmlFor={registerIds.course}>
                        <span>Elige un curso</span>
                        <select
                            name="course"
                            id={registerIds.course}
                            value={user.course || ''}
                            onChange={handleChange}
                        >
                            <option value=""></option>
                            <option value="A">Angular</option>
                            <option value="R">React</option>
                            <option value="N">Node</option>
                        </select>
                    </label>
                </div>

                <button type="submit">Register</button>
            </form>
        </Card>
    );
};
