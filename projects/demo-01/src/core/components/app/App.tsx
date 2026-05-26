import './App.css';
import { Socials } from '../socials/socials.tsx';
import { Docs } from '../docs/docs.tsx';
import { Counter } from '../counter/counter.tsx';
import { AboutPage } from '../../../features/about/about-page.tsx';
import { CounterBad } from '../counter/counter.bad.tsx';
import { CounterList } from '../counter-list/counter-list.tsx';

export const App: React.FC = () => {
    const title = 'Vite + React';
    const appPath = 'src/core/components/app/App.tsx';



    return (
        <>
            <section id="center">
                <AboutPage title={title} path={appPath}></AboutPage>
                <CounterList />
                <CounterBad />
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
};
