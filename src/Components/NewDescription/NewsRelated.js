import React from 'react'
import IphoneReleted1 from '../../Assets/Images/NewDescription_img/IphoneRelated1.jpg'
import IphoneReleted2 from '../../Assets/Images/NewDescription_img/IphoneReleted2.jpg'
import IphoneReleted3 from '../../Assets/Images/NewDescription_img/IphoneReleted3.jpg'
import IphoneReleted4 from '../../Assets/Images/NewDescription_img/IphoneReleted4.jpg'
import IphoneReleted5 from '../../Assets/Images/NewDescription_img/IphoneReleted5.jpg'
import IphoneReleted6 from '../../Assets/Images/NewDescription_img/IphoneReleted6.jpg'

function NewsRelated() {
    return (
        <div className="NewsRelated">
            <div className="NewsRelated__content">
                <p className="NewsRelated__content-text">Bài viết liên quan</p>
                <div className="NewsRelated__content-list">
                    <div className="NewsRelated__content-list-item">
                        <div className="NewsRelated__content-list-item-left">
                            <img src={IphoneReleted1}></img>
                        </div>
                        <div className="NewsRelated__content-list-item-right">
                            <h4>Tổng hợp iPhone 13: Hình ảnh, giá bán, ngày ra mắt chính thức</h4>
                            <p>Jasmine trong <a href="#">Đánh giá - Tư vấn</a></p>
                        </div>
                    </div>
                    <div className="NewsRelated__content-list-item">
                        <div className="NewsRelated__content-list-item-left">
                            <img src={IphoneReleted2}></img>
                        </div>
                        <div className="NewsRelated__content-list-item-right">
                            <h4>So sánh Iphone 12 với Iphone 12Pro dựa trên những thông tin cập nhật gần đây</h4>
                            <p>Nguyễn Quốc Anh trong <a href="#">Đánh giá - Tư vấn</a></p>
                        </div>
                    </div>
                    <div className="NewsRelated__content-list-item">
                        <div className="NewsRelated__content-list-item-left">
                            <img src={IphoneReleted3}></img>
                        </div>
                        <div className="NewsRelated__content-list-item-right">
                            <h4>Iphone 12 có mấy màu, màu sắc nào sẽ hot nhất năm nay?</h4>
                            <p>Nguyễn Quốc Anh trong <a href="#">Tin mới</a></p>
                        </div>
                    </div>
                    <div className="NewsRelated__content-list-item">
                        <div className="NewsRelated__content-list-item-left">
                            <img src={IphoneReleted4}></img>
                        </div>
                        <div className="NewsRelated__content-list-item-right">
                            <h4>Tổng hợp cấu hình Iphone 12 rò rỉ trước khi trình làng</h4>
                            <p>Nguyễn Quốc Anh trong <a href="#">Đánh giá - Tư vấn</a></p>
                        </div>
                    </div>
                    <div className="NewsRelated__content-list-item">
                        <div className="NewsRelated__content-list-item-left">
                            <img src={IphoneReleted5}></img>
                        </div>
                        <div className="NewsRelated__content-list-item-right">
                            <h4>Tổng hợp camera Iphone 12 series: Sự khác biệt của cảm biến LiDAR</h4>
                            <p>Nguyễn Quốc Anh trong <a href="#">Đánh giá - Tư vấn</a></p>
                        </div>
                    </div>
                    <div className="NewsRelated__content-list-item">
                        <div className="NewsRelated__content-list-item-left">
                            <img src={IphoneReleted6}></img>
                        </div>
                        <div className="NewsRelated__content-list-item-right">
                            <h4>Có nên mua Iphone 12 hay sắm luôn các siêu phẩm khác trên thị trường?</h4>
                            <p>Diễm trong <a href="#">Đánh giá - Tư vấn</a></p>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default NewsRelated
