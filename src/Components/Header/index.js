import React from 'react';
import PropTypes from 'prop-types';
import HeaderLogo from './HeaderLogo';
import HeaderCateforyProduct from './HeaderCategory';
import HeaderSearch from './HeaderSearch';
import HeaderOrther from './HeaderOrther';
import HeaderAccount from './HeaderAccount';
import HeaderCart from './HeaderCart';
import './style.scss';
import MenuCategory from './MenuCategory';

function Header(props) {
    return (
        <div className="header-product">
            <header className="header">
                <HeaderLogo />
                <HeaderCateforyProduct />
                <HeaderSearch />
                <HeaderAccount />
                <HeaderCart />
                <HeaderOrther />
            </header>
            <MenuCategory />
        </div>
    );
}

Header.propTypes = {};

export default Header;
