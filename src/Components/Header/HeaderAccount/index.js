import React from 'react';
import PropTypes from 'prop-types';

function HeaderAccount(props) {
    return (
        <div className="header__accout-login">
            <div className="header__image-user">
                <img
                    alt=""
                    src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
                />
            </div>
            <div className="header__login">
                <p className="header__login-title">Đăng Nhập / Đăng Ký</p>
                <div className="header__accout">
                    <p className="header__accout-title">Tài Khoản</p>
                    <i className="fas fa-sort-down"></i>
                </div>
            </div>
        </div>
    );
}

HeaderAccount.propTypes = {};

export default HeaderAccount;
