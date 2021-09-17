import React from 'react'
import SmartWatchSame2 from '../img/SmartWatchSame2.png'
import SmartWatchSame3 from '../img/SmartWatchSame3.jpg'
import SmartWatchSame4 from '../img/SmartWatchSame4.jpg'
import SmartWatchSame5 from '../img/SmartWatchSame5.jpg'
import SmartWatchSame6 from '../img/SmartWatchSame6.jpg'
import WatchSameFreeShip from '../img/WatchSameFreeShip.png'
function ProductByMore(props) {
    return (
        <div className="ProductByMore">
            <p className="ProductByMore__text">Sản phẩm tương tự</p>
            <div className="ProductList">
                <div className="ProductList-item">
                    {/* item Watch */}
                    <div className="ProductList-item__watch">
                        <div className="ProductList-item__watch-image"><div className="ProductList-item__watch-image-img" style={{backgroundImage: `url(${SmartWatchSame2})`}}></div>
                        </div>
                        <div>
                            <img src={WatchSameFreeShip} className="ProductList-item__watch-image-free"></img>
                        </div>
                        <p className="ProductList-item__watch-desc">
                            2021 Xiami Mi Band 6 smart watch-black phiên bản mới nhất toàn quốc
                        </p>
                        <div className="ProductList-item__watch-star">
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <span className="ProductList-item__watch-star-bought">Đã bán 4</span>
                        </div>
                        <div className="ProductList-item__watch-price">
                            <span className="ProductList-item__watch-price-number">1.108.000 ₫</span>
                            <span className="ProductList-item__watch-price-discount">-61%</span>
                        </div>
                        <div className="ProductList-item__watch-sale">
                            <span className="ProductList-item__watch-sale-number">2.773.500 ₫</span>
                        </div>
                    </div>
                    <div className="ProductList-item__watch">
                        <div className="ProductList-item__watch-image"><div className="ProductList-item__watch-image-img" style={{backgroundImage: `url(${SmartWatchSame4})`}}></div>
                        </div>
                        <div>
                            <img src={WatchSameFreeShip} className="ProductList-item__watch-image-free"></img>
                        </div>
                        <p className="ProductList-item__watch-desc">
                            Đồng hồ thông minh Xiaomi MI Band 6.1.56 " AMOLED BT5.0.21 Chiếu áng
                        </p>
                        <div className="ProductList-item__watch-star">
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <span className="ProductList-item__watch-star-bought">Đã bán 3</span>
                        </div>
                        <div className="ProductList-item__watch-price">
                            <span className="ProductList-item__watch-price-number">917.000 ₫</span>
                            <span className="ProductList-item__watch-price-discount">-72%</span>
                        </div>
                        <div className="ProductList-item__watch-sale">
                            <span className="ProductList-item__watch-sale-number">3.250.0000 ₫</span>
                        </div>
                    </div>
                    <div className="ProductList-item__watch">
                        <div className="ProductList-item__watch-image"><div className="ProductList-item__watch-image-img" style={{backgroundImage: `url(${SmartWatchSame3})`}}></div>
                        </div>
                        <div>
                            <img src={WatchSameFreeShip} className="ProductList-item__watch-image-free"></img>
                        </div>
                        <p className="ProductList-item__watch-desc">
                            Vòng đeo tay thông minh Xiami MI Band 4 (0.95 Inch)
                        </p>
                        <div className="ProductList-item__watch-star">
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <span className="ProductList-item__watch-star-bought">Đã bán 4</span>
                        </div>
                        <div className="ProductList-item__watch-price">
                            <span className="ProductList-item__watch-price-number">638.000 ₫</span>
                            <span className="ProductList-item__watch-price-discount">-62%</span>
                        </div>
                        <div className="ProductList-item__watch-sale">
                            <span className="ProductList-item__watch-sale-number">1.648.000 ₫</span>
                        </div>
                    </div>
                    <div className="ProductList-item__watch">
                        <div className="ProductList-item__watch-image"><div className="ProductList-item__watch-image-img" style={{backgroundImage: `url(${SmartWatchSame5})`}}></div>
                        </div>
                        <div>
                            <img src={WatchSameFreeShip} className="ProductList-item__watch-image-free"></img>
                        </div>
                        <p className="ProductList-item__watch-desc">
                            Đồng hồ thông minh thể dục theo dõi 30 chế độ thể thao
                        </p>
                        <div className="ProductList-item__watch-star">
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <span className="ProductList-item__watch-star-bought">Đã bán 2</span>
                        </div>
                        <div className="ProductList-item__watch-price">
                            <span className="ProductList-item__watch-price-number">680.000 ₫</span>
                            {/* <span className="ProductList-item__watch-price-discount">-48%</span> */}
                        </div>
                        {/* <div className="ProductList-item__watch-sale">
                            <span className="ProductList-item__watch-sale-number">1.289.000 ₫</span>
                        </div> */}
                    </div>
                    <div className="ProductList-item__watch">
                        <div className="ProductList-item__watch-image"><div className="ProductList-item__watch-image-img" style={{backgroundImage: `url(${SmartWatchSame6})`}}></div>
                        </div>
                        <div>
                            <img src={WatchSameFreeShip} className="ProductList-item__watch-image-free"></img>
                        </div>
                        <p className="ProductList-item__watch-desc">
                            HUAWEI Bracelet 6 standard Edition sport Bracelet Smart Watch
                        </p>
                        <div className="ProductList-item__watch-star">
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <i className="ProductList-item__watch-star-item fas fa-star"/>
                            <span className="ProductList-item__watch-star-bought">Đã bán 8</span>
                        </div>
                        <div className="ProductList-item__watch-price">
                            <span className="ProductList-item__watch-price-number">1.125.000 ₫</span>
                            <span className="ProductList-item__watch-price-discount">-29%</span>
                        </div>
                        <div className="ProductList-item__watch-sale">
                            <span className="ProductList-item__watch-sale-number">1.771.000 ₫</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductByMore.propTypes = {

}

export default ProductByMore

