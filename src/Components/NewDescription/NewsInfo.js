import React from 'react'
import Iphone12ProMax from '../../Assets/Images/NewDescription_img/Iphone12ProMax.jpg'


function NewsInfo() {
    return (
        <div className="NewsInfo">
            <ul className="NewsInfo__list">
                <li className="NewsInfo__list-item">
                    <a>iPhone 13 sắp ra mắt, giá bán hiện tại của iPhone còn bao nhiêu?</a>
                </li>
                <li className="NewsInfo__list-item">
                    <a>Apple iPhone 12 giữ giá tốt hơn 20% so với Samsung Galaxy S21</a>
                </li>
                <li className="NewsInfo__list-item">
                    <a>So sánh Apple iPhone 12 Pro Max và OPPO Find X3 Pro</a>
                </li>
            </ul>
            <div className="NewsTitle__line"></div>
            <div className="NewsInfo__content">
                <p>Trong loạt sản phẩm iPhone 2020 sắp trình làng thời gian tới,
                    hai chiếc <a href="#">điện thoại</a> được giới chuyên môn dự đoán sẽ hút khách nhất sau khi lên kệ là iPhone 12 tiêu chuẩn với mức giá rẻ, dễ tiếp cận và iPhone 12 Pro Max cao cấp nhất dự kiến rất được lòng
                    các iFan luôn kiếm tìm trải nghiệm hoàn hảo trên iPhone.
                </p>
                <p>
                    Nhưng liệu có sự chênh lệch nào lớn lao giữa chiếc iPhone rẻ nhất và đắt nhất trong năm nay?
                    Dưới đây là một vài so sánh dựa trên loạt tin tức rò rỉ
                    về dòng iPhone 12 series.
                </p>
                <p>Xem thêm: <a href="#"> So sánh iPhone 12 và iPhone 11 dựa trên những thông tin rò rỉ mới nhất </a> </p>
                <img className="NewsInfo__content-img" src={Iphone12ProMax}></img>
            </div>
        </div>
    )
}

export default NewsInfo
