import React from 'react';
import PropTypes from 'prop-types';

function HeaderAccount(props) {
    return (
        <div class="header__accout-login">
            <div class="header__image-user">
                <img
                    alt=""
                    src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
                />
            </div>
            <div class="header__login">
                <p class="header__login-title">Đăng Nhập / Đăng Ký</p>
                <div class="header__accout">
                    <p class="header__accout-title">Tài Khoản</p>
                    <i class="fas fa-sort-down"></i>
                </div>
            </div>
        </div>
    );
}

HeaderAccount.propTypes = {};

export default HeaderAccount;
