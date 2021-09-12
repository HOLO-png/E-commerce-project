import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

function SlickSlider(props) {
    const { image_slider_home } = props;

    // const play = () => {
    //     slider.slickPlay();
    // };
    // const pause = () => {
    //     slider.slickPause();
    // };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div className="home__slider">
            <Slider {...settings}>
                {image_slider_home.map((item, index) => (
                    <div className="home_slider-img" key={index}>
                        <img alt="" src={item} />
                    </div>
                ))}
            </Slider>
            {/* <div style={{ textAlign: 'center' }}>
                <button className="button" onClick={play}>
                    Play
                </button>
                <button className="button" onClick={pause}>
                    Pause
                </button>
            </div> */}
        </div>
    );
}

SlickSlider.propTypes = {};

export default SlickSlider;
