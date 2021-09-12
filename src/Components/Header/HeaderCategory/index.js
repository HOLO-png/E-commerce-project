import React from 'react';
import PropTypes from 'prop-types';

function HeaderCateforyProduct(props) {
    return (
        <div className="header__category-product">
            <div className="header__icon-toggle">
                <i className="fad fa-bars"></i>
            </div>
            <div className="header__category-title-toggle">
                <p className="header__category-title">Danh Mục</p>
                <div className="header__category-product-title-toggle">
                    <p className="header__category-product-title">Sản Phẩm</p>
                    <i className="fas fa-sort-down"></i>
                </div>
            </div>
        </div>
    );
}

HeaderCateforyProduct.propTypes = {};

export default HeaderCateforyProduct;
