import { Greetings } from '@features/home/components/greetings/greetings';
import { PanicButton } from './components/panic-button/panic-button.v2';
import './home-page.css';
import { CounterList } from './components/counter-list/counter-list';
import { Names } from './components/names/names';

export const HomePage: React.FC = () => {
    return (
        <section>
            <h2>Inicio</h2>
            <Greetings userName="" />
            <PanicButton />
            <CounterList />
            <Names />
        </section>
    );
};

export default HomePage;