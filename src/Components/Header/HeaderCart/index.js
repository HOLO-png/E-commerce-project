import React from 'react';
import PropTypes from 'prop-types';

function HeaderCart(props) {
    return (
        <div className="header__cart">
            <div className="header__cart-icon">
                <img
                    alt=""
                    src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
                />
                <div className="header__num">0</div>
            </div>
            <div className="header__cart-des">
                <div className="header__cart-title">Giỏ Hàng</div>
            </div>
        </div>
    );
}

HeaderCart.propTypes = {};

export default HeaderCart;
