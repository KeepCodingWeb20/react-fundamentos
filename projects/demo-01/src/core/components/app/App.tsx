import './App.css';
import { Socials } from '../socials/socials.tsx';
import { Docs } from '../docs/docs.tsx';
import { Hero } from '../hero/hero.tsx';
import { Counter } from '../counter/counter.tsx';

export const App: React.FC = () => {
    const title = 'Vite + React';
    const appPath = 'src/core/components/app/App.tsx';

    const counters = [19, 23, 36];
 

    return (
        <>
            <section id="center">
                <Hero title={title} path={appPath} />
                {counters.map((id) => (
                    <Counter key={id} id={id} />
                ))}
            </section>
            <div className="ticks"></div>
            <section id="next-steps">
                <Docs />
                <Socials />
            </section>
            <div className="ticks"></div>
            <section id="spacer"></section>
        </>
    );
}

