import { Focus } from './components/focus/focus';
import { RenderCount } from './components/render-count/render-count';
import { Timer } from './components/timer/timer';
import './dashboard-page.css';

export const DashboardPage: React.FC = () => {
    return (
        <section>
            <h2>Dashboard</h2>
            <Timer />
            <RenderCount />
            <Focus />
        </section>
    );
};

export default DashboardPage;