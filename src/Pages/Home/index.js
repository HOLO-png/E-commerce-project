import React from 'react';
// import PropTypes from 'prop-types';
import './style.scss';
import Helmet from '../../Components/Helmet';
import { Button } from 'antd';
import SlickSlider from '../../Components/SlickSlider';
import { image_slider_home } from '../../Assets/Fake-data/clienUi';

function Home(props) {
    return (
        <Helmet title="Home">
            <div className="home">
                <div className="home__slider-home">
                    <SlickSlider image_slider_home={image_slider_home} />
                    <div className="home__banner-home">
                        <img
                            alt=""
                            src="https://salt.tikicdn.com/cache/w400/ts/banner/8c/14/18/a5c1445521cb70a1e51e36b5b6db61a1.png.webp"
                        />
                    </div>
                </div>
            </div>
        </Helmet>
    );
}

Home.propTypes = {};

export default Home;
