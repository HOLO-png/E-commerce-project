import React from 'react';
import PropTypes from 'prop-types';

function HeaderLogo(props) {
    return (
        <div className="header__logo">
            <img
                alt=""
                src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                className="header__logo--01"
            ></img>
            <img
                alt=""
                src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
                className="header__logo--02"
            ></img>
        </div>
    );
}

HeaderLogo.propTypes = {};

export default HeaderLogo;
