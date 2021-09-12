import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SlickSlider from '../../SlickSlider';
import './styles.scss';
import { menu_category } from '../../../Assets/Fake-data/clienUi';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

function MenuCategory(props) {
    const [widthSlide, setWidthSlide] = useState(0);
    const handleMoveSlidePrev = () => {
        setWidthSlide(0);
    };

    const handleMoveSlideNext = () => {
        setWidthSlide(-1000);
    };
    return (
        <div className="category-menu">
            <Button
                icon={<LeftOutlined />}
                type="text"
                className="category-menu__btn-prev"
                onClick={handleMoveSlidePrev}
                style={{ display: widthSlide === 0 ? 'none' : ' block' }}
            ></Button>
            <div className="category-menu__move-slide">
                <div
                    className="category-menu__content"
                    style={{
                        transform: `translateX(${widthSlide}px)`,
                        transition: 'all 0.5s ease 0s',
                    }}
                >
                    {menu_category.map((item, index) => (
                        <div className="category-menu__item" key={index}>
                            <h3>{item}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <Button
                icon={<RightOutlined />}
                type="text"
                className="category-menu__btn-next"
                onClick={handleMoveSlideNext}
                style={{ display: widthSlide === -1000 ? 'none' : ' block' }}
            ></Button>
        </div>
    );
}

MenuCategory.propTypes = {};

export default MenuCategory;
