import React from 'react'
import NewsInfo from './NewsInfo'
import NewsContents from './NewsContents'

import userTitle from '../../Assets/Images/NewDescription_img/userTitle.png'

function NewsTitle(props) {
    return (
        <div className="NewsTitle">
            <div className="NewsTitle__header">
                <div className="NewsTitle__header-link">
                    <a className="NewsTitle__header-link-item" href="#">Trang chủ</a>
                    <a className="NewsTitle__header-link-item" href="#">Tin tức</a>
                    <a className="NewsTitle__header-link-item" href="#">Đánh giá - Tư vấn</a>
                </div>
                <div className="NewsTitle__header-title">
                    <h1 className="NewsTitle__header-title-text">So sánh iPhone 12 và iPhone 12 Pro Max dựa trên loạt tin tức rò rỉ</h1>
                </div>
                <p className="NewsTitle__header-user">
                    <span className="NewsTitle__header-user-image">
                        <img className="NewsTitle__header-user-image-img" src={userTitle}></img>
                    </span>
                    <span className="NewsTitle__header-user-text">Nguyễn Quốc Anh</span>
                    <span className="NewsTitle__header-user-distance">-</span>
                    <span className="NewsTitle__header-user-text">vào ngày 31/08/2020</span>
                    <a href="#" className="NewsTitle__header-user-link">
                        <i class="fas fa-comment-alt"></i>
                        7 bình luận
                    </a>
                </p>
            <div className="NewsTitle__line"></div>
            <div className="NewsTitle__post-info">
                <h3>Trong bài viết này, FPT Shop sẽ cùng bạn so sánh
                    iPhone 12 với iPhone 12 Pro Max dựa trên các thông tin
                    đồn đoán để đem tới cái nhìn rõ ràng hơn về hai sản phẩm
                    rất được chờ đợi này.</h3>
            </div>
            <div className="NewsTitle__line"></div>
            <NewsInfo/>
            <NewsContents/>
            </div>
        </div>  
    )
}

NewsTitle.propTypes = {

}

export default NewsTitle

