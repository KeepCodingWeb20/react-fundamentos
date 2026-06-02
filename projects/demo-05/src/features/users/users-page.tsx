import { Greetings } from './components/greetings/greetings';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import './users-page.css';


export const UsersPage: React.FC = () => {
    return (
        <section>
            <h2>Usuarios</h2>
            <Greetings/>
            <Login/>
            <Register/>
        </section>
    );
};

export default UsersPage;