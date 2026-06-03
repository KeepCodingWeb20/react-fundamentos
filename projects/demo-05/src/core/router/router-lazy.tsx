import React from 'react';
import { Route, Routes } from 'react-router';

const HomePage = React.lazy(() => import('@features/home/home-page'));
const DashboardPage = React.lazy(
    () => import('@features/dashboard/dashboard-page'),
);
const UsersPage = React.lazy(() => import('@features/users/users-page'));
const ProductsPage = React.lazy(
    () => import('@features/products/products-page'),
);
const AboutPage = React.lazy(() => import('@features/about/about-page'));
export const Router: React.FC = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <React.Suspense fallback={<p>Loading...</p>}>
                        <HomePage />
                    </React.Suspense>
                }
            />
            <Route
                path="/home"
                element={
                    <React.Suspense fallback={<p>Loading...</p>}>
                        <HomePage />
                    </React.Suspense>
                }
            />
            <Route
                path="/dashboard"
                element={
                    <React.Suspense fallback={<p>Loading...</p>}>
                        <DashboardPage />
                    </React.Suspense>
                }
            />
            <Route
                path="/users"
                element={
                    <React.Suspense fallback={<p>Loading...</p>}>
                        <UsersPage />
                    </React.Suspense>
                }
            />
            <Route
                path="/products"
                element={
                    <React.Suspense fallback={<p>Loading...</p>}>
                        <ProductsPage />
                    </React.Suspense>
                }
            />
        <Route
                path="/product/:id"
                element={
                    <React.Suspense fallback={<p>Loading...</p>}>
                        <ProductsPage />
                    </React.Suspense>
                }
            />

            <Route
                path="/about"
                element={
                    <React.Suspense fallback={<p>Loading...</p>}>
                        <AboutPage />
                    </React.Suspense>
                }
            />
            <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
    );
};
