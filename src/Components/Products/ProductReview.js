import React from 'react'
import iconWrote1 from '../../Assets/Images/Product_img/iconWrote1.png'
import iconWrote2 from '../../Assets/Images/Product_img/iconWrote2.png'
import WatchComment1 from '../../Assets/Images/Product_img/WatchComment1.jpg'
import WatchComment6 from '../../Assets/Images/Product_img/WatchComment6.jpg'
import WatchComment8 from '../../Assets/Images/Product_img/WatchComment8.jpg'
import WatchReview2 from '../../Assets/Images/Product_img/WatchReview2.jpg'
import WatchReview4 from '../../Assets/Images/Product_img/WatchReview4.jpg'
import DateNote from '../../Assets/Images/Product_img/DateNote.png'
import CommentReturn from '../../Assets/Images/Product_img/CommentReturn.png'
import WatchReview9 from '../../Assets/Images/Product_img/WatchReview9.jpg'
import WatchReview10 from '../../Assets/Images/Product_img/WatchReview10.jpg'
import WatchReview11 from '../../Assets/Images/Product_img/WatchReview11.jpg'
import WatchReview12 from '../../Assets/Images/Product_img/WatchReview12.jpg'
function ProductReview() {
    return (
        <div>
            <div className="ProductReview">
                <div className="ProductReview-left">
                    <div className="ProductReview-left__userName">
                        <div className="ProductReview-left__userName-icon">
                            PN
                        </div>
                        <div className="ProductReview-left__userName-identity">
                            <p className="ProductReview-left__userName-identity-name">Phong Nguyễn</p>
                            <p className="ProductReview-left__userName-identity-time">Đã tham gia 1 năm</p>
                        </div>
                    </div>
                    <div className="ProductReview-left__wrote">
                        <img className="ProductReview-left__wrote-img" src={iconWrote1}></img>
                        <span className="ProductReview-left__wrote-written">Đã viết:</span>
                        <span className="ProductReview-left__wrote-reply">1 Đánh giá</span>
                    </div>
                    <div className="ProductReview-left__wrote">
                        <img className="ProductReview-left__wrote-img" src={iconWrote2}></img>
                        <span className="ProductReview-left__wrote-written">Đã nhận:</span>
                        <span className="ProductReview-left__wrote-reply">33 lượt cảm ơn</span>
                    </div>
                </div>

                <div className="ProductReview-right">
                    <div className="ProductReview-right__satisfied">
                        <i className="ProductReview-right__satisfied-item fas fa-star"></i>
                        <i className="ProductReview-right__satisfied-item fas fa-star"></i>
                        <i className="ProductReview-right__satisfied-item fas fa-star"></i>
                        <i className="ProductReview-right__satisfied-item fas fa-star"></i>
                        <i className="ProductReview-right__satisfied-item fas fa-star"></i>
                        <span className="ProductReview-right__satisfied-text">Cực kì hài lòng</span>
                    </div>
                    <div className="ProductReview-right-bought">
                        <span>Đã mua từ</span>
                        <i class="fas fa-check-circle"></i>
                        <span>Joybuy Channel</span>
                    </div>
                    <p className="ProductReview-right-text">Joybuy uy tín và giá rất rẻ. Mình mua đây suốt. Có điều anh em đặt xong, k hóng hàng sẽ về nhanh hơn đấy :)) mình đặt 618k hôm 18/06, sáng 28/06 nhận. Bản nội địa nhé anh em</p>
                    <div className="ProductReview-right__image">
                        <div className="ProductReview-right__image-item" style={{backgroundImage: `url(${WatchReview2})`}}></div>
                        <div className="ProductReview-right__image-item" style={{backgroundImage: `url(${WatchComment1})`}}></div>
                        <div className="ProductReview-right__image-item" style={{backgroundImage: `url(${WatchReview4})`}}></div>
                        <div className="ProductReview-right__image-item" style={{backgroundImage: `url(${WatchComment6})`}}></div>
                        <div className="ProductReview-right__image-item" style={{backgroundImage: `url(${WatchComment8})`}}></div>
                    </div>
                    <p className="ProductReview-right__date">Nhận xét vào 29/06/2021
                        <span className="ProductReview-right__date-used">Đã dùng 1 ngày
                            <img className="ProductReview-right__date-used-img" src={DateNote}></img>
                            <span className="ProductReview-right__date-used-note">Khi viết đánh giá khách hàng đã dùng sản phẩm một ngày</span>
                        </span>
                    </p>
                    <div className="ProductReview-right__useful">
                        <span className="ProductReview-right__useful-liked">
                            <i class="far fa-thumbs-up"></i>
                            <span>Hữu ích(33)</span>
                        </span>
                        <span className="ProductReview-right__useful-reply">
                            Gửi phản hồi
                        </span>
                    </div>
                    <div className="ProductReview-right__otherPerson">
                        <p className="ProductReview-right__otherPerson-shortName">
                            NN
                        </p>
                        <div className="ProductReview-right__otherPerson-detail">
                            <span className="ProductReview-right__otherPerson-detail-name">Nam Nguyễn</span>
                            <span className="ProductReview-right__otherPerson-detail-date">29 tháng 06, 2021</span>
                            <p className="ProductReview-right__otherPerson-detail-text">
                                Mình đặt từ hôm 09/06 mà tới h vẫn còn đơn hàng đang xử lý, chán ko biết nói sao lun
                            </p>
                        </div>
                    </div>
                    <div className="ProductReview-right__seeMore">
                        <img className="ProductReview-right__seeMore-img" src={CommentReturn}></img>
                        <span className="ProductReview-right__seeMore-text">Xem thêm 26 câu trả lời</span>
                    </div>
                </div>
            </div>
            <div className="ProductReview">
                <div className="ProductReview-left">
                    <div className="ProductReview-left__userName">
                        <div className="ProductReview-left__userName-icon">
                            KL
                        </div>
                        <div className="ProductReview-left__userName-identity">
                            <p className="ProductReview-left__userName-identity-name">Trịnh Khánh Long</p>
                            <p className="ProductReview-left__userName-identity-time">Đã tham gia 5 năm</p>
                        </div>
                    </div>
                    <div className="ProductReview-left__wrote">
                        <img className="ProductReview-left__wrote-img" src={iconWrote1}></img>
                        <span className="ProductReview-left__wrote-written">Đã viết:</span>
                        <span className="ProductReview-left__wrote-reply">9 Đánh giá</span>
                    </div>
                    <div className="ProductReview-left__wrote">
                        <img className="ProductReview-left__wrote-img" src={iconWrote2}></img>
                        <span className="ProductReview-left__wrote-written">Đã nhận:</span>
                        <span className="ProductReview-left__wrote-reply">11 lượt cảm ơn</span>
                    </div>
                </div>

                <div className="ProductReview-right">
                    <div className="ProductReview-right__satisfied">
                        <i className="ProductReview-right__satisfied-item fas fa-star"></i>
                        <i className="ProductReview-right__satisfied-item fas fa-star"></i>
                        <i className="ProductReview-right__satisfied-item fas fa-star"></i>
                        <i className="ProductReview-right__satisfied-item fas fa-star"></i>
                        <i className="ProductReview-right__satisfied-item fas fa-star"></i>
                        <span className="ProductReview-right__satisfied-text">Cực kì hài lòng</span>
                    </div>
                    <div className="ProductReview-right-bought">
                        <span>Đã mua từ</span>
                        <i class="fas fa-check-circle"></i>
                        <span>Joybuy Channel</span>
                    </div>
                    <p className="ProductReview-right-text">
                        Shop nên ghi chú đây là hàng nội địa, chưa có update tiếng Việt,
                        sản phẩm cơ bản tốt, đặt hàng từ 20/07 đến 29/07 mới về Việt Nam,
                        và 02/08 là hàng đến tay, trong mùa dịch nên dễ hiểu,
                        tuy nhiên thời gian lâu như vậy cộng với việc
                        tiki update lịch trình nhận và vận chuyển hàng chưa cụ thể,
                        trạng thái 'đang lấy hàng' cứ hiện mãi từ 20/07 đến 28/07 lm ng mua dễ hủy đơn,
                        nên là hy vọng các lần tới tiki hỗ trợ cập nhật tình trạng đơn hàng quốc tế sát sao hơn để người mua an tâm.
                    </p>
                    <div className="ProductReview-right__image">
                        <div className="ProductReview-right__image-item" style={{backgroundImage: `url(${WatchReview10})`}}></div>
                        <div className="ProductReview-right__image-item" style={{backgroundImage: `url(${WatchReview11})`}}></div>
                        {/* <div className="ProductReview-right__image-item" style={{backgroundImage: `url(${WatchReview4})`}}></div> */}
                        {/* <div className="ProductReview-right__image-item" style={{backgroundImage: `url(${WatchReview12})`}}></div> */}
                        <div className="ProductReview-right__image-item" style={{backgroundImage: `url(${WatchReview9})`}}></div>
                    </div>
                    <p className="ProductReview-right__date">
                        <span className="ProductReview-right__date-text">Nhận xét vào 29/06/2021</span>
                        <span className="ProductReview-right__date-used">Đã dùng 1 ngày
                            <img className="ProductReview-right__date-used-img" src={DateNote}></img>
                            <span className="ProductReview-right__date-used-note">Khi viết đánh giá khách hàng đã dùng sản phẩm một ngày</span>
                        </span>
                    </p>
                    <div className="ProductReview-right__useful">
                        <span className="ProductReview-right__useful-liked">
                            <i class="far fa-thumbs-up"></i>
                            <span>Hữu ích(10)</span>
                        </span>
                        <span className="ProductReview-right__useful-reply">
                            Gửi phản hồi
                        </span>
                    </div>
                    <div className="ProductReview-right__otherPerson">
                        <p className="ProductReview-right__otherPerson-shortName">
                            CC
                        </p>
                        <div className="ProductReview-right__otherPerson-detail">
                            <span className="ProductReview-right__otherPerson-detail-name">Changg Changg</span>
                            <span className="ProductReview-right__otherPerson-detail-date">31 tháng 08, 2021</span>
                            <p className="ProductReview-right__otherPerson-detail-text">
                                Hàng nội địa mà sao trên shop để là hàng quốc tế vậy ạ
                            </p>
                        </div>
                    </div>
                    <div className="ProductReview-right__seeMore">
                        <img className="ProductReview-right__seeMore-img" src={CommentReturn}></img>
                        <span className="ProductReview-right__seeMore-text">Xem thêm 2 câu trả lời</span>
                    </div>
                </div>
            </div>
            <div className="ProductReview__changePage">
            <button className="ProductReview__changePage-item"><i class="fas fa-arrow-left"></i></button>
                <button className="ProductReview__changePage-item ProductReview__changePage-item-active">1</button>
                <button className="ProductReview__changePage-item">2</button>
                <button className="ProductReview__changePage-item">3</button>
                <button className="ProductReview__changePage-item">4</button>
                <button className="ProductReview__changePage-item">5</button>
                <button className="ProductReview__changePage-item"><i class="fas fa-arrow-right"></i></button>
            </div>
            
        </div>
    )
}

export default ProductReview
