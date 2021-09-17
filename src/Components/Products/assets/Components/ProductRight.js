import React from 'react'
import PropTypes from 'prop-types'
import tikiCard from '../img/tikiCard.png'
import freeship from '../img/freeship.png'
import Watch1 from '../img/Watch1.jpg'
import Watch2 from '../img/Watch2.jpg'
import BaoTinWatch from '../img/BaoTinWatch.jpg'
import official from '../img/official.png'
import compensation from '../img/compensation.svg'
import refund from '../img/refund.svg'
import guarantee from '../img/guarantee.svg'

function ProductRight(props) {
    return (
        <div className="product-right">
                <div className="product-right__top">
                  <div className="product-right__top-decs">
                    <span className="product-right__top-decs-brand">
                      Thương hiệu: <a href="#" className="product-right__top-decs-brand-link">Xiaomi</a>
                    </span>
                    <span className="product-right__top-decs-rank">
                      Đứng thứ 1 trong <a href="#" className="product-right__top-decs-rank-link">Top 1000 Đồng hồ thông minh bán chạy nhất tháng nay</a>
                    </span>
                    <h3 className="product-right__top-decs-title">Đồng Hồ Đeo Tay Thông Minh Nhỏ Gọn, Đa Năng Xiaomi Mi Band 6</h3>
                    <div className="product-right__top-star">
                      {/* <i class="product-right__top-star-item far fa-star"></i> */}
                      <i className="product-right__top-star-item fas fa-star" />
                      <i className="product-right__top-star-item fas fa-star" />
                      <i className="product-right__top-star-item fas fa-star" />
                      <i className="product-right__top-star-item fas fa-star" />
                      <i className="product-right__top-star-item fas fa-star" />
                      <span className="product-right__top-star-comment">(Xem 134 đánh giá)</span>
                      <span className="product-right__top-star-spend">Đã bán 411</span>
                    </div>
                  </div>
                </div>
                <div className="product-right__bottom">
                  <div className="product-right__bottom-left">
                    <div className="product-right__bottom-left-price">
                      <span className="product-right__bottom-left-price-main">188.000 ₫</span>
                      <span className="product-right__bottom-left-price-begin">400.000 ₫</span>
                      <span className="product-right__bottom-left-price-percent">-53%</span>
                      <div className="product-right__bottom-left-price-tikiCard">
                        <img src={tikiCard} alt="" className="product-right__bottom-left-price-tikiCard-img" />
                        <span className="product-right__bottom-left-price-tikiCard-text">
                          Hoàn tiền 15% tối đa 600k/1 tháng
                          <i className="product-right__bottom-left-price-tikiCard-text-icon far fa-question-circle" />
                        </span>
                      </div>
                      <div className="product-right__bottom-left-price-freeShip">
                        <img src={freeship} alt="" className="product-right__bottom-left-price-freeShip-img" />
                        <span className="product-right__bottom-left-price-freeShip-text">
                          Miễn phí vận chuyển
                          <i className="product-right__bottom-left-price-tikiCard-text-icon far fa-question-circle" />
                        </span>
                      </div>
                    </div>
                    <div className="product-right__bottom-left-color">
                      <p className="product-right__bottom-left-color-text">
                        <span>Màu:</span>
                        Màu đen</p>
                      <div className="product-right__bottom-left-color-chooseColor">
                        <div className="product-right__bottom-left-color-chooseColor-browser">
                          <img src={Watch1} alt="" className="product-right__bottom-left-color-chooseColor-browser-img" />
                          <p className="product-right__bottom-left-color-chooseColor-browser-text">Màu xám</p>
                        </div>
                        <div className="product-right__bottom-left-color-chooseColor-browser">
                          <img src={Watch2} alt="" className="product-right__bottom-left-color-chooseColor-browser-img" />
                          <p className="product-right__bottom-left-color-chooseColor-browser-text">Màu đen</p>
                        </div>
                      </div>
                    </div>
                    <div className="product-right__bottom-left-discount">
                      <span className="product-right__bottom-left-discount-text">5 Mã giảm giá</span>
                      <div className="product-right__bottom-left-discount-main">
                        <div className="product-right__bottom-left-discount-main-button">
                          <div className="product-right__bottom-left-discount-main-button-text">Giảm 100k</div>
                        </div>
                        <div className="product-right__bottom-left-discount-main-button">
                          <div className="product-right__bottom-left-discount-main-button-text">Giảm 100k</div>
                        </div>
                        <div className="product-right__bottom-left-discount-main-button">
                          <div className="product-right__bottom-left-discount-main-button-text">Giảm 100k</div>
                        </div>
                      </div>
                      <div className="product-right__bottom-left-discount-address">
                        <span className="product-right__bottom-left-discount-address-text">Bạn hãy
                          <a href className="product-right__bottom-left-discount-address-text-link">NHẬP ĐỊA CHỈ</a>
                          nhận hàng để được dự báo thời gian &amp; chi phí giao hàng một cách chính xác nhất.
                        </span>
                        <a href />
                      </div>
                    </div>
                    <div className="product-right__bottom-left-quantity">
                      <p className="product-right__bottom-left-quantity-text">Số lượng:</p>
                      <span className="product-right__bottom-left-quantity-item product-right__bottom-left-quantity-item-sizeL product-right__bottom-left-quantity-noClick">-</span>
                      <input type="text" className="product-right__bottom-left-quantity-input" defaultValue={1} />
                      <span className="product-right__bottom-left-quantity-item">+</span>
                    </div>
                    <button className="product-right__bottom-left-shopping">
                      Chọn Mua
                    </button>
                  </div>
                  <div className="product-right__bottom-right">
                    <div className="product-right__bottom-right-shop">
                      <div>
                        <img src={BaoTinWatch} alt="" className="product-right__bottom-right-shop-img" />
                      </div>
                      <div className="product-right__bottom-right-shop-name">
                        <p className="product-right__bottom-right-shop-name-text">Bảo Tín Watch</p>
                        <img src={official} alt="" className="product-right__bottom-right-shop-name-official" />
                      </div>
                    </div>
                    <div className="product-right__bottom-right-interact">
                      <div className="product-right__bottom-right-interact-number">
                        <p className="product-right__bottom-right-interact-number-item">
                          4.5 / 5
                          <i className="product-right__bottom-right-interact-number-item-star fas fa-star" />
                        </p>
                        <p className="product-right__bottom-right-interact-number-item">8.6k+</p>
                        <p className="product-right__bottom-right-interact-number-item">96%</p>
                      </div>
                      <div className="product-right__bottom-right-interact-text">
                        <span className="product-right__bottom-right-interact-text-item">11k+</span>
                        <span className="product-right__bottom-right-interact-text-item">Theo dõi</span>
                        <span className="product-right__bottom-right-interact-text-item">Phản hồi chat</span>
                      </div>
                    </div>
                    <div className="product-right__bottom-right-homeShop">
                      <div className="product-right__bottom-right-homeShop-button">
                        <span className="product-right__bottom-right-homeShop-button-icon"><i className="fas fa-store" /></span>
                        <span className="product-right__bottom-right-homeShop-button-text">Xem shop</span>
                      </div>
                      <div className="product-right__bottom-right-homeShop-button">
                        <span className="product-right__bottom-right-homeShop-button-plusBig">+</span>
                        <span className="product-right__bottom-right-homeShop-button-text">Theo dõi</span>
                      </div>
                    </div>
                    <div className="product-right__bottom-right-insurance">
                      <div className="product-right__bottom-right-insurance-left">
                        <p className="product-right__bottom-right-insurance-left-time">Thời gian bảo hành</p>
                        <p className="product-right__bottom-right-insurance-left-time">Hình thức bảo hành</p>
                      </div>
                      <div className="product-right__bottom-right-insurance-right">
                        <p className="product-right__bottom-right-insurance-right-time">30 tháng</p>
                        <p className="product-right__bottom-right-insurance-right-time">Hóa đơn</p>
                      </div>
                    </div>
                    <p className="product-right__bottom-right-text">Nơi bảo hành</p>
                    <p className="product-right__bottom-right-textBold">Bảo hành bởi nhà bán hàng thông qua Tiki</p>
                    <div className="product-right__bottom-right-giude">
                      <span className="product-right__bottom-right-giude-left">Hướng dẫn bảo hành</span>
                      <span className="product-right__bottom-right-giude-right">
                        <a href="#">Xem chi tiết</a>
                      </span>
                    </div>
                    <div className="product-right__bottom-right-commit">
                      <div className="product-right__bottom-right-commit-box">
                        <img src={compensation} alt="" />
                        <br />
                        Hoàn tiền
                        <br />
                        <b>111%</b>
                        <br />
                        nếu hàng giả
                      </div>
                      <div className="product-right__bottom-right-commit-box">
                        <img src={guarantee} alt="" />
                        <br />
                        Mở hộp
                        <br />
                        Kiểm tra
                        <br />
                        nhận hàng
                      </div> 
                      <div className="product-right__bottom-right-commit-box">
                        <img src={refund} alt="" />
                        <br />
                        Đổi trả trong
                        <br />
                        <b>7 ngày</b>
                        <br />
                        nếu sp lỗi
                      </div>                               
                    </div>
                    <div className="product-right__bottom-right-other">
                      <div className="product-right__bottom-right-other-left">
                        <p>4 nhà bán khác</p>
                        <span>Giá từ: 189.000 ₫</span>
                      </div>
                      <div className="product-right__bottom-right-other-right">
                        So sánh
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    )
}

ProductRight.propTypes = {

}

export default ProductRight

