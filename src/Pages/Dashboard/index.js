import React, { useEffect, useState } from 'react';
import './style.scss';
import Helmet from '../../Components/Helmet';
import DashboardHeader from '../../Components/DashBoard/DashboardHeader';
import DashboardSideBar from '../../Components/DashBoard/DashboardSideBar';
import { DASHBOARD_ROUTES } from '../../Constants/Route';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import DashboardItemLayout from '../../Common/DashboardItemLayout';

const renderDashboardRender = () => {
    let xhtml = null;
    xhtml = DASHBOARD_ROUTES.map((route, index) => {
        return (
            <DashboardItemLayout
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
const Dashboard = (props) => {
    return (
        <Helmet title="dashboard">
            <div className="dashboard">
                <DashboardHeader />
                <DashboardSideBar />
                <Switch>{renderDashboardRender()}</Switch>
            </div>
        </Helmet>
    );
};
export default Dashboard;
