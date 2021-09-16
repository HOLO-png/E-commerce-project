import './App.css';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Suspense } from 'react';
import './Sass/_variables.scss';
import './Sass/_base.scss';
import './Sass/_mixins.scss';

import MainLayout from './Common/MainLayout';
import LoginLayout from './Common/LoginLayout';
import { DASHBOARD_MAIN, LOGIN_ROUTES, MAIN_ROUTES } from './Constants/Route';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AuthProvider from './Contexts/AuthProvider';
import DashboardLayout from './Common/DashboardLayout';

function App() {
    const renderDashboardRoute = () => {
        let xhtml = null;
        xhtml = DASHBOARD_MAIN.map((route, index) => {
            return (
                <DashboardLayout
                    name={route.name}
                    key={index}
                    component={route.component}
                    exact={route.exact}
                    path={route.path}
                />
            );
        });
        return xhtml;
    };

    const renderAdminRoute = () => {
        let xhtml = null;
        xhtml = MAIN_ROUTES.map((route, index) => {
            return (
                <MainLayout
                    name={route.name}
                    key={index}
                    component={route.component}
                    exact={route.exact}
                    path={route.path}
                />
            );
        });
        return xhtml;
    };

    const renderLoginRoute = () => {
        let xhtml = null;
        xhtml = LOGIN_ROUTES.map((route, index) => {
            return (
                <LoginLayout
                    name={route.name}
                    key={index}
                    component={route.component}
                    exact={route.exact}
                    path={route.path}
                />
            );
        });

        return xhtml;
    };

    const renderMain = () => (
        <>
            <Header />
            <div className="container">
                <div className="main">
                    <Switch>{renderAdminRoute()}</Switch>
                </div>
            </div>
            <Footer />
        </>
    );

    return (
        <Suspense fallback={<div>loading...</div>}>
            <BrowserRouter>
                <AuthProvider>
                    <Switch>
                        <Redirect exact from="/" to="home" />
                        {renderDashboardRoute()}
                        {renderLoginRoute()}
                        {renderMain()}
                    </Switch>
                </AuthProvider>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
