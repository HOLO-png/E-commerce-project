import React from 'react';
import PropTypes from 'prop-types';

function HeaderOrther(props) {
    return (
        <div className="header__orther">
            <img
                alt=""
                src="https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg"
            />
            <p className="header__orther-title">Bán hàng cùng Tiki</p>
        </div>
    );
}

HeaderOrther.propTypes = {};

export default HeaderOrther;
