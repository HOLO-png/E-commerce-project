import React from 'react'
import WatchComment1 from '../../Assets/Images/Product_img/WatchComment1.jpg'
import WatchComment4 from '../../Assets/Images/Product_img/WatchComment4.jpg'
import WatchComment5 from '../../Assets/Images/Product_img/WatchComment5.jpg'
import WatchComment6 from '../../Assets/Images/Product_img/WatchComment6.jpg'
import WatchComment8 from '../../Assets/Images/Product_img/WatchComment8.jpg'
function ProductComment() {
    return (
        <div className="ProductComment">
            <p className="ProductComment-text">Đánh giá - Nhận xét từ khách hàng</p>
            
            <div className="ProductComment-star">
                <div className="ProductComment-star__top">
                    <div className="ProductComment-star__top-number">
                        4.6
                    </div>
                    <div className="ProductComment-star__top-icon">
                        <i className="ProductComment-star__top-icon-item fas fa-star"></i>
                        <i className="ProductComment-star__top-icon-item fas fa-star"></i>
                        <i className="ProductComment-star__top-icon-item fas fa-star"></i>
                        <i className="ProductComment-star__top-icon-item fas fa-star"></i>
                        <i className="ProductComment-star__top-icon-item fas fa-star"></i>
                        <p className="ProductComment-star__top-icon-text"> 139 nhận xét</p>
                    </div>
                </div>
                <div className="ProductComment-star__buttom">
                    <div className="ProductComment-star__buttom-icon">
                        <i className="ProductComment-star__buttom-icon-item fas fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item fas fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item fas fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item fas fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item fas fa-star"></i>
                        <div className="ProductComment-star__buttom-icon-line">
                            <div className="ProductComment-star__buttom-icon-line-percent"></div>
                        </div>
                        <span className="ProductComment-star__buttom-icon-text">107</span>
                    </div>
                    <div className="ProductComment-star__buttom-icon">
                        <i className="ProductComment-star__buttom-icon-item fas fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item fas fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item fas fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item fas fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item far fa-star"></i>
                        <div className="ProductComment-star__buttom-icon-line">
                            <div className="ProductComment-star__buttom-icon-line-percent2"></div>
                        </div>
                        <span className="ProductComment-star__buttom-icon-text">23</span>
                    </div>
                    <div className="ProductComment-star__buttom-icon">
                        <i className="ProductComment-star__buttom-icon-item fas fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item fas fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item fas fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item far fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item far fa-star"></i>
                        <div className="ProductComment-star__buttom-icon-line">
                            <div className="ProductComment-star__buttom-icon-line-percent3"></div>
                        </div>
                        <span className="ProductComment-star__buttom-icon-text">4</span>
                    </div>
                    <div className="ProductComment-star__buttom-icon">
                        <i className="ProductComment-star__buttom-icon-item fas fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item fas fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item far fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item far fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item far fa-star"></i>
                        <div className="ProductComment-star__buttom-icon-line">
                            <div className="ProductComment-star__buttom-icon-line-percent4"></div>
                        </div>
                        <span className="ProductComment-star__buttom-icon-text">2</span>
                    </div>
                    <div className="ProductComment-star__buttom-icon">
                        <i className="ProductComment-star__buttom-icon-item fas fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item far fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item far fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item far fa-star"></i>
                        <i className="ProductComment-star__buttom-icon-item far fa-star"></i>
                        <div className="ProductComment-star__buttom-icon-line">
                            <div className="ProductComment-star__buttom-icon-line-percent5"></div>
                        </div>
                        <span className="ProductComment-star__buttom-icon-text">3</span>
                    </div>  
                </div>
            </div>
            <div className="ProductComment-image">
                <p className="ProductComment-image-text">Tất cả hình ảnh(63)</p>
                <div className="ProductComment-image-img">
                    <div className="ProductComment-image-img-item" style={{backgroundImage: `url(${WatchComment1})`}}></div>
                    <div className="ProductComment-image-img-item" style={{backgroundImage: `url(${WatchComment6})`}}></div>
                    <div className="ProductComment-image-img-item" style={{backgroundImage: `url(${WatchComment8})`}}></div>
                    <div className="ProductComment-image-img-item" style={{backgroundImage: `url(${WatchComment4})`}}></div>
                    <div className="ProductComment-image-img-item" style={{backgroundImage: `url(${WatchComment5})`}}></div>
                    <div className="ProductComment-image-img-item" style={{backgroundImage: `url(${WatchComment5})`}}>
                        <div className="ProductComment-image-img-item-cover">
                            <span>+57</span>
                        </div>
                    </div>
                </div>
                <div className="ProductComment-image__filter">
                    <p className="ProductComment-image__filter-text" >Lọc xem theo:</p>
                    <p className="ProductComment-image__filter-item" >Mới nhât</p>
                    <p className="ProductComment-image__filter-item" >Có hình ảnh</p>
                    <p className="ProductComment-image__filter-item" >Đã mua hàng</p>
                    <p className="ProductComment-image__filter-item" >5 <i className="far fa-star"></i></p>
                    <p className="ProductComment-image__filter-item" >4 <i className="far fa-star"></i></p>
                    <p className="ProductComment-image__filter-item" >3 <i className="far fa-star"></i></p>
                    <p className="ProductComment-image__filter-item" >2 <i className="far fa-star"></i></p>
                    <p className="ProductComment-image__filter-item" >1 <i className="far fa-star"></i></p>
                </div>
            </div>
        </div>
    )
}

export default ProductComment

