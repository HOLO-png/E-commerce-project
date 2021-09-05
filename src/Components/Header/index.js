import React from 'react';
import PropTypes from 'prop-types';
import HeaderLogo from './HeaderLogo';
import HeaderCateforyProduct from './HeaderCategory';
import HeaderSearch from './HeaderSearch';
import HeaderOrther from './HeaderOrther';
import HeaderAccount from './HeaderAccount';
import HeaderCart from './HeaderCart';
import './style.scss';

function Header(props) {
    return (
        <header className="header">
            <HeaderLogo />
            <HeaderCateforyProduct />
            <HeaderSearch />
            <HeaderAccount />
            <HeaderCart />
            <HeaderOrther />
        </header>
    );
}

Header.propTypes = {};

export default Header;
