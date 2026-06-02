import type { MenuOption } from '@core/types/menu-option';
import { Layout } from '@core/components/layout/layout';
import './App.css';
import { Router } from '@core/router/router';

const getOptions = (): MenuOption[] => {
    return [
        {
            path: '/home',
            label: 'Inicio',
        },
        {
            path: '/dashboard',
            label: 'Dashboard',
        },
        {
            path: '/users',
            label: 'Usuarios',
        },
    ];
};

export const App: React.FC = () => {
    const appTitle = 'Demo 1';
    const subTitle = 'React - TS - Vite';

    const menuOptions: MenuOption[] = getOptions();
    menuOptions.push({ path: '/about', label: 'Acerca de' });

    return (
        <Layout
            appTitle={appTitle}
            subTitle={subTitle}
            menuOptions={menuOptions}
        >
            {/* Parte que varía en cada página dependiendo del Router */}
            <Router></Router>
        </Layout>
    );
};
