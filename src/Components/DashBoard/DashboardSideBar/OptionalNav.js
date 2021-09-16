/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { nav_dashboard } from '../../../Assets/Fake-data/clienUi';

function OptionalNav(props) {
    const renderOptionalNav = nav_dashboard.map((item, index) => {
        // if (item.name === 'Orther') {
        //     return (
        //         <li className="parent">
        //             {/* <Link to={item}>
        //             </Link> */}
        //             <a data-toggle="collapse" href="#sub-item-1">
        //                 <i className={item.icon}></i> {item.name}
        //                 <span
        //                     data-toggle="collapse"
        //                     href="#sub-item-1"
        //                     className="icon pull-right"
        //                 >
        //                     <em className="fa fa-plus" />
        //                 </span>
        //             </a>
        //             <ul className="children collapse" id="sub-item-1">
        //                 <li>
        //                     <span className="fa fa-arrow-right">&nbsp;</span>
        //                     Sub Item 1
        //                 </li>
        //                 <li>
        //                     <span className="fa fa-arrow-right">&nbsp;</span>
        //                     Sub Item 2
        //                 </li>
        //                 <li>
        //                     <span className="fa fa-arrow-right">&nbsp;</span>
        //                     Sub Item 3
        //                 </li>
        //             </ul>
        //         </li>
        //     );
        // } else {
        return (
            <li className="active" key={index}>
                <NavLink
                    to={item.link}
                    activeStyle={{
                        fontWeight: 'bold',
                        color: '#fff',
                        backgroundColor: '#30a5ff',
                    }}
                >
                    <i className={item.icon}></i> {item.name}
                </NavLink>
            </li>
        );
        // }
    });
    return <ul className="nav menu">{renderOptionalNav}</ul>;
}

OptionalNav.propTypes = {};

export default OptionalNav;
