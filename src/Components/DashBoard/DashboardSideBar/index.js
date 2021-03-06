/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AvatarInfo from './AvatarInfo';
import Search from './Search';
import OptionalNav from './OptionalNav';

function DashboardSideBar(props) {
    return (
        <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
            <AvatarInfo />
            <div className="divider" />
            <Search />
            <OptionalNav />
        </div>
    );
}

DashboardSideBar.propTypes = {};

export default DashboardSideBar;
