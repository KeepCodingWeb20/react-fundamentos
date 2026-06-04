import { AboutPage } from '@features/about/about-page';
import { DashboardPage } from '@features/dashboard/dashboard-page';
import { HomePage } from '@features/home/home-page';
import ProductsPage from '@features/products/products-page';
import { UsersPage } from '@features/users/users-page';
import { Route, Routes } from 'react-router';

export const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
    );
};
