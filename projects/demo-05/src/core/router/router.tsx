import { AboutPage } from '@features/about/about-page';
import { DashboardPage } from '@features/dashboard/dashboard-page';
import { HomePage } from '@features/home/home-page';
import { UsersPage } from '@features/users/users-page';
import { useRouter } from './use-router';

export const Router: React.FC = () => {

    const currentPath = useRouter();
    let CurrentPage: React.FC = () => null;

    switch (currentPath) {
        case '/':
        case '/home':
            CurrentPage = HomePage;
            break;
        case '/dashboard':
            CurrentPage = DashboardPage;
            break;
        case '/users':
            CurrentPage = UsersPage;
            break;
        case '/about':
            CurrentPage = AboutPage;
            break;
        default:
            CurrentPage = () => <p>404 Not Found</p>;
            break;
    }

    return <CurrentPage />;
};
