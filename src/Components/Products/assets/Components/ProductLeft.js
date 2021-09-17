import React from 'react'
import SmartWatch from '../img/SmartWatch.jpg'
import Watch1 from '../img/Watch1.jpg'
import Watch2 from '../img/Watch2.jpg'
import Watch3 from '../img/Watch3.jpg'
import Watch4 from '../img/Watch4.jpg'
import Watch5 from '../img/Watch5.jpg'
function ProductLeft(props) {
    return (
            <div className="product-left">
                <div class="product-left__img-big">
                <img src={SmartWatch} alt="" className="product-left__watch" />
                </div>
                <div className="product-left__img-small">
                  <div className="product-left__img-small-item">
                    <img src={Watch1} alt="" className="product-left__img-size-s" />
                  </div>
                  <div className="product-left__img-small-item">
                    <img src={Watch2} alt="" className="product-left__img-size-s" />
                  </div>
                  <div className="product-left__img-small-item">
                    <img src={Watch3} alt="" className="product-left__img-size-s" />
                  </div>
                  <div className="product-left__img-small-item">
                    <img src={Watch4} alt="" className="product-left__img-size-s" />
                  </div>
                  <div className="product-left__img-small-item">
                    <img src={Watch5} alt="" className="product-left__img-size-s" />
                  </div>
                  <div className="product-left__img-small-item">
                    <img src={SmartWatch} alt="" className="product-left__img-size-s" />
                  </div>
                </div>
                <div className="product-left__socal">
                  <span className="product-left__socal-share">Chia sẽ:</span>
                  <div className="product-left__socal-list">
                    <i className="product-left__socal-list-item product-left__socal-list-item-facebook fab fa-facebook" />
                    <i className="product-left__socal-list-item product-left__socal-list-item-instagram fab fa-instagram" />
                    <i className="product-left__socal-list-item product-left__socal-list-item-twitter fab fa-twitter-square" />
                    <i className="product-left__socal-list-item product-left__socal-list-item-messenger fab fa-facebook-messenger" />
                    <i className="product-left__socal-list-item product-left__socal-list-item-line fab fa-line" />
                    <i className="product-left__socal-list-item product-left__socal-list-item-heart-empty far fa-heart" />
                    <i class="product-left__socal-list-item product-left__socal-list-item-heart-full fas fa-heart"></i>
                  </div>
                </div>
              </div>
        
    )
}

ProductLeft.propTypes = {

}

export default ProductLeft

