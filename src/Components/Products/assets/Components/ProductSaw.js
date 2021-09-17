import React from 'react'
import WatchSameFreeShip from '../img/WatchSameFreeShip.png'
import OtherWatch15 from '../img/OtherWatch15.jpg'
import OtherWatch5 from '../img/OtherWatch5.jpg'
import OtherWatch6 from '../img/OtherWatch6.jpg'
function ProductSaw() {
    return (
        <div className="ProductSaw">
            <p className="ProductSaw-text">Sản phẩm bạn đã xem</p>
            <div className="ProductSaw__list">
            <div className="ProductList-item__watch ProductSaw__watch">
                    <div className="ProductList-item__watch-image"><div className="ProductList-item__watch-image-img ProductSaw__watch-img" style={{backgroundImage: `url(${OtherWatch15})`}}></div>
                    </div>
                    {/* <div>
                        <img src={WatchSameFreeShip} className="ProductList-item__watch-image-free"></img>
                    </div> */}
                    <p className="ProductList-item__watch-desc">
                        Đồng hồ thể thao vòng đeo tay thông minh Rogbid GT2 1.3 inch TFT màn hình cảm ứng đầy đủ BT5.0 thiết bị theo dõi thể dục 24 chế độ tập thể dục Slee/Heart
                    </p>
                    <div className="ProductList-item__watch-star">
                        <i className="ProductList-item__watch-star-item fas fa-star"/>
                        <i className="ProductList-item__watch-star-item fas fa-star"/>
                        <i className="ProductList-item__watch-star-item fas fa-star"/>
                        <i className="ProductList-item__watch-star-item fas fa-star"/>
                        <i className="ProductList-item__watch-star-item fas fa-star"/>
                        <span className="ProductList-item__watch-star-bought">Đã bán 14</span>
                    </div>
                    <div className="ProductList-item__watch-price">
                        <span className="ProductList-item__watch-price-number">633.000 ₫</span>
                        <span className="ProductList-item__watch-price-discount">-09%</span>
                    </div>
                    <div className="ProductList-item__watch-sale">
                        <span className="ProductList-item__watch-sale-number">711.500 ₫</span>
                    </div>
            </div>
            <div className="ProductList-item__watch ProductSaw__watch">
                    <div className="ProductList-item__watch-image"><div className="ProductList-item__watch-image-img ProductSaw__watch-img" style={{backgroundImage: `url(${OtherWatch5})`}}></div>
                    </div>
                    {/* <div>
                        <img src={WatchSameFreeShip} className="ProductList-item__watch-image-free"></img>
                    </div> */}
                    <p className="ProductList-item__watch-desc">
                        Đồng Hồ Thông Minh Theo Dõi Vận Động Theo Dõi Sức Khỏei Huami Amazfit Bip U / Bip U Pro - Hàng Chính Hãng
                    </p>
                    <div className="ProductList-item__watch-star">
                        <i className="ProductList-item__watch-star-item fas fa-star"/>
                        <i className="ProductList-item__watch-star-item fas fa-star"/>
                        <i className="ProductList-item__watch-star-item fas fa-star"/>
                        <i className="ProductList-item__watch-star-item fas fa-star"/>
                        <i className="ProductList-item__watch-star-item fas fa-star"/>
                        <span className="ProductList-item__watch-star-bought">Đã bán 142</span>
                    </div>
                    <div className="ProductList-item__watch-price">
                        <span className="ProductList-item__watch-price-number">1.633.000 ₫</span>
                        <span className="ProductList-item__watch-price-discount">-19%</span>
                    </div>
                    <div className="ProductList-item__watch-sale">
                        <span className="ProductList-item__watch-sale-number">1.150.500 ₫</span>
                    </div>
                </div>
            <div className="ProductList-item__watch ProductSaw__watch">
                    <div className="ProductList-item__watch-image"><div className="ProductList-item__watch-image-img ProductSaw__watch-img" style={{backgroundImage: `url(${OtherWatch6})`}}></div>
                    </div>
                    {/* <div>
                        <img src={WatchSameFreeShip} className="ProductList-item__watch-image-free"></img>
                    </div> */}
                    <p className="ProductList-item__watch-desc">
                        Vòng đeo tay thông minh Xiaomi Mi Band 5 (Màu ngẫu nhiên) - Hàng nhập Khẩu
                    </p>
                    <div className="ProductList-item__watch-star">
                        <i className="ProductList-item__watch-star-item fas fa-star"/>
                        <i className="ProductList-item__watch-star-item fas fa-star"/>
                        <i className="ProductList-item__watch-star-item fas fa-star"/>
                        <i className="ProductList-item__watch-star-item fas fa-star"/>
                        <i className="ProductList-item__watch-star-item fas fa-star"/>
                        <span className="ProductList-item__watch-star-bought">Đã bán 12</span>
                    </div>
                    <div className="ProductList-item__watch-price">
                        <span className="ProductList-item__watch-price-number">716.000 ₫</span>
                        <span className="ProductList-item__watch-price-discount">-28%</span>
                    </div>
                    <div className="ProductList-item__watch-sale">
                        <span className="ProductList-item__watch-sale-number">999.500 ₫</span>
                    </div>
                </div>
                
        </div>
            
        </div>
    )
}

export default ProductSaw
