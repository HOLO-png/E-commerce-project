import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Badge, Card, Progress, Row } from 'antd';
import Slider from 'react-slick';
import numberWithCommas from '../../Utils/numberWithCommas';
import { openNotification } from '../../Utils/messageAlear';
import { slide_genuine } from '../../Assets/Fake-data/clienUi';
import { products_price_shock } from '../../Assets/Fake-data/clienUi';

const { Meta } = Card;

function SriceShock(props) {
    const { title } = props;
    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState(950);
    const settings2 = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleProductCheck = () => {
        openNotification(
            'Ahihi Ko Bấm Đc Đâu 🧨',
            'Hiện tại thì tui chưa thêm sản phẩm này nên tạm thời lướt chỗ khác đi nha 😁',
        );
    };
    return (
        <div className="price-shock">
            <div className="price-shock-title">
                <p className="price-shock-text">
                    {title ? (
                        title
                    ) : (
                        <i>
                            Giá Sốc <i className="fad fa-bolt"></i> Hôm Nay
                        </i>
                    )}
                </p>
            </div>
            <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ padding: 0 }}
            >
                <div
                    style={{
                        width: '100%',
                        display: display ? 'block' : 'none',
                        marginBottom: 20,
                    }}
                >
                    <Slider {...settings2}>
                        {slide_genuine.map((item, index) => (
                            <div className="product-slide-item" key={index}>
                                <img
                                    alt=""
                                    style={{ width: '100%' }}
                                    src={item}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </Row>
            <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ padding: 0 }}
            >
                <div
                    style={{
                        width: '100%',
                        display: display ? 'block' : 'none',
                    }}
                >
                    <Slider {...settings}>
                        {products_price_shock.map((item, index) => (
                            <div style={{ width: 247 }}>
                                <Badge.Ribbon
                                    text="Hot"
                                    color="red"
                                    style={{
                                        right: '0px',
                                        display:
                                            item.util > 50 ? 'block' : 'none',
                                    }}
                                    key={index}
                                >
                                    <Card
                                        hoverable
                                        cover={
                                            <img
                                                alt="example"
                                                src={item.image}
                                            />
                                        }
                                        onClick={handleProductCheck}
                                    >
                                        <Meta
                                            title={
                                                <>
                                                    {numberWithCommas(
                                                        item.price,
                                                    )}
                                                    <sup> đ</sup>
                                                </>
                                            }
                                            description={
                                                item.util > 50
                                                    ? 'Sắp bán hết'
                                                    : 'Vẫn còn nhiều hàng'
                                            }
                                        />
                                        <div style={{ width: 170 }}>
                                            <Progress
                                                percent={item.util}
                                                size="small"
                                                status="exception"
                                            />
                                            <i
                                                class="fas fa-fire"
                                                style={{
                                                    color:
                                                        item.util > 50
                                                            ? '#ff9595'
                                                            : '#fff',
                                                }}
                                            ></i>
                                        </div>
                                    </Card>
                                </Badge.Ribbon>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Row>
        </div>
    );
}

SriceShock.propTypes = {};

export default SriceShock;
