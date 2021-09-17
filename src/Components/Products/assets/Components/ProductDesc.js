import React from 'react'
import PropTypes from 'prop-types'
import ProductDetail from '../img/ProductDetail.jpg'
function ProductDesc(props) {
    return (
        <div className="ProductDesc">
           <p className="ProductDesc-text">Thông tin chi tiết</p>
           <p className="ProductDesc-text__small">Mi Band 6 Full Color Screen, 30 Sports Modes, 24h Heart Rate Detection, 50 Meters Waterproof Smart Bracelet, 21 Years New</p>
           <div className="ProductDesc__img" style={{
               backgroundImage:  `url(${ProductDetail})` 
               }}>
                <span></span>
            </div>
            <button className="ProductDesc__img-btn">Xem thêm nội dung</button>
        </div>
    )
}

ProductDesc.propTypes = {

}

export default ProductDesc

