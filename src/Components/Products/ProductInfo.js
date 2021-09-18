import React from 'react'
import PropTypes from 'prop-types'

function ProductInfo(props) {
    return (
        <div className="ProductInfo">
           <p className="ProductInfo-text">Thông tin chi tiết</p>
           <div className="ProductDetail">
                <div className="ProductInfo-brand">
                        <p className="ProductInfo-brand-text">Thương hiệu</p>
                        <p className="ProductInfo-brand-text">Xuất xứ thương hiệu</p>
                        <p className="ProductInfo-brand-text">Xuất xứ</p>
                        <p className="ProductInfo-brand-text">Kích thước</p>
                        <p className="ProductInfo-brand-text">Phụ kiện đi kèm</p>
                </div>
                <div className="ProductInfo-address">
                        <p className="ProductInfo-address-text">Xiaomi</p>
                        <p className="ProductInfo-address-text ProductInfo-address-bold">USA</p>
                        <p className="ProductInfo-address-text">Hamilton</p>
                        <p className="ProductInfo-address-text ProductInfo-address-bold">17.3cm x 7.5cm x 2.3cm</p>
                        <p className="ProductInfo-address-text">1 x band</p>
                </div>
            </div>
        </div>
    )
}

ProductInfo.propTypes = {

}

export default ProductInfo

