import './App.css';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Suspense } from 'react';

import MainLayout from './Common/MainLayout';
import LoginLayout from './Common/LoginLayout';
import { LOGIN_ROUTES, MAIN_ROUTES } from './Constants/Route';

function App() {
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
            <div className="container">
                {/* <Header /> */}
                <div className="main">
                    <Switch>{renderAdminRoute()}</Switch>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );

    return (
        <Suspense fallback={<div>loading...</div>}>
            <BrowserRouter>
                <Switch>
                    <Redirect exact from="/" to="home" />
                    {renderLoginRoute()}
                    {renderMain()}
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
