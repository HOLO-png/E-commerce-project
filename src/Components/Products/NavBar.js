import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {
    return (
            <div className="navbar">
            <ul className="navbar-title navbar-title--left">
              <li className="navbar-title__item">Trang chủ</li>
              <li className="navbar-title__item">Hàng quốc tế</li>
              <li className="navbar-title__item">Thiết bị số - Phụ kiện số</li>
              <li className="navbar-title__item">Thiết bị thông minh</li>
              <li className="navbar-title__item">Đồng hồ thông minh</li>
            </ul>
            <div className="navbar-title navbar-title--right">
              <span className="navbar-title__text">Đồng hồ đeo tay thông minh nhỏ gọn, đa năng Xiaomi Mi Band 6</span>
            </div>
          </div>
    )
}

Navbar.propTypes = {

}

export default Navbar
