import React from 'react';
import Cart from '../Pages/Cart';
import News from '../Pages/News';
import NotFound from '../Pages/NotFound';
import Dashboard from '../Pages/Dashboard';
import LoginPage from '../Pages/LoginPage';
import Category from '../Pages/Category';
import Products from '../Pages/Product';
import NewDescription from '../Pages/NewDescription';
import DashboardWidgets from '../Components/DashBoard/DashboardWidgets';
import DashboardMain from '../Components/DashBoard/DashboardMain';
import DashboardCharts from '../Components/DashBoard/DashboardCharts';
import DashboardCustomer from '../Components/DashBoard/DashboardCustomer';
import DashboardOrder from '../Components/DashBoard/DashboardOrder';
import DashboardChat from '../Components/DashBoard/DashboardChat';
import DashboardNews from '../Components/DashBoard/DashboardNews';
import ForgotPassword from '../Components/LoginForm/ForgotPassword';

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
    {
        name: 'Fogot Password',
        path: '/forgot-password',
        component: ForgotPassword,
    },
];

export const DASHBOARD_MAIN = [
    {
        name: 'Dashboard Main',
        path: '/dashboard/:url',
        exact: true,
        component: Dashboard,
    },
];

export const DASHBOARD_ROUTES = [
    {
        name: 'Dashboard Main',
        path: '/dashboard/main',
        exact: false,
        component: DashboardMain,
    },
    {
        name: 'DashboardWidgets',
        path: '/dashboard/widgets',
        exact: false,
        component: DashboardWidgets,
    },
    {
        name: 'Dashboard Charts',
        path: '/dashboard/charts',
        exact: false,
        component: DashboardCharts,
    },
    {
        name: 'DashboardCustomer',
        path: '/dashboard/customer',
        exact: false,
        component: DashboardCustomer,
    },
    {
        name: 'Dashboard Order',
        path: '/dashboard/order',
        exact: false,
        component: DashboardOrder,
    },
    {
        name: 'Dashboard Chat',
        path: '/dashboard/chat',
        exact: false,
        component: DashboardChat,
    },
    {
        name: 'Dashboard News',
        path: '/dashboard/news',
        exact: false,
        component: DashboardNews,
    },
    {
        name: 'Dashboard Logout',
        path: '/login',
        exact: false,
    },
];
