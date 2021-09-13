import React from 'react';
import Cart from '../Pages/Cart';
import News from '../Pages/News';
import NotFound from '../Pages/NotFound';
import Dashboard from '../Pages/Dashboard';
import LoginPage from '../Pages/LoginPage';
import Category from '../Pages/Category';
import Products from '../Pages/Product';
import NewDescription from '../Pages/NewDescription';

const Home = React.lazy(() => import('../Pages/Home'));

export const MAIN_ROUTES = [
    {
        name: 'Home',
        path: '/home',
        exact: true,
        component: Home,
    },
    {
        name: 'Products',
        path: '/catalog/:category/:name/:id',
        exact: false,
        component: Products,
    },
    {
        name: 'News',
        path: '/news',
        exact: false,
        component: News,
    },
    {
        name: 'Cart',
        path: '/cart',
        exact: false,
        component: Cart,
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
        exact: false,
        component: Dashboard,
    },
    {
        name: 'Category',
        path: '/Category',
        exact: false,
        component: Category,
    },
    {
        name: 'New description',
        path: '/New/:name/:id',
        exact: false,
        component: NewDescription,
    },
    {
        name: 'NotFound',
        path: '*',
        exact: false,
        component: NotFound,
    },
];

export const LOGIN_ROUTES = [
    {
        name: 'Login',
        path: '/login',
        component: LoginPage,
    },
    // {
    //     name: 'Fogot Password',
    //     path: '/forgot-password',
    //     component: ForgotPassword,
    // },
];
