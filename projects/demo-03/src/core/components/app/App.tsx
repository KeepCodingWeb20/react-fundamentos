import { Greetings } from '../../../features/users/components/greetings/greetings';
import { Login } from '../../../features/users/components/login/login';
import { Register } from '../../../features/users/components/register/register';
import './App.css';

function App() {
    return (
        <>
            <header>
                <h1>React + TypeScript + Vite</h1>
            </header>
            <main>
                <Greetings />
                <Login />
                <Register />
                <Register />
            </main>
        </>
    );
}

export default App;
