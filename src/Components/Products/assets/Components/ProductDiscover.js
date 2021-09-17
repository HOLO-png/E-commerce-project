import React from 'react'
import WatchSuggest1 from '../img/WatchSuggest1.png'
import WatchSuggest2 from '../img/WatchSuggest2.jpg'
import WatchSuggest3 from '../img/WatchSuggest3.jpg'
import WatchSuggest4 from '../img/WatchSuggest4.png'
import WatchSuggest5 from '../img/WatchSuggest5.jpg'
import WatchSuggest6 from '../img/WatchSuggest6.jpg'
function ProductDiscover() {
    return (
        <div className="ProductDiscover">
            <p className="ProductDiscover-text">Khám phá thêm</p>
            <div className="ProductDiscover-suggest">
                <div className="ProductDiscover-suggest__item ProductDiscover-suggest__item-active">
                    <img className="ProductDiscover-suggest__item-img" src={WatchSuggest1}></img>
                    <p className="ProductDiscover-suggest__item-text">Dành cho bạn</p>
                </div>
                <div className="ProductDiscover-suggest__item">
                    <img className="ProductDiscover-suggest__item-img" src={WatchSuggest2}></img>
                    <p className="ProductDiscover-suggest__item-text">Đồng hồ thông minh</p>
                </div>
                <div className="ProductDiscover-suggest__item">
                    <img className="ProductDiscover-suggest__item-img" src={WatchSuggest3}></img>
                    <p className="ProductDiscover-suggest__item-text">Vòng đeo thông minh</p>
                </div>
                <div className="ProductDiscover-suggest__item">
                    <img className="ProductDiscover-suggest__item-img" src={WatchSuggest4}></img>
                    <p className="ProductDiscover-suggest__item-text">Đi chợ siêu sale</p>
                </div>
                <div className="ProductDiscover-suggest__item">
                    <img className="ProductDiscover-suggest__item-img" src={WatchSuggest5}></img>
                    <p className="ProductDiscover-suggest__item-text">Deal siêu hot</p>
                </div>
                <div className="ProductDiscover-suggest__item">
                    <img className="ProductDiscover-suggest__item-img" src={WatchSuggest6}></img>
                    <p className="ProductDiscover-suggest__item-text">Trending</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDiscover
