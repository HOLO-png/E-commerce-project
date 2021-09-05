import React from 'react';
import PropTypes from 'prop-types';
import {
    footerAboutLink,
    footerCustomLink,
} from '../../Assets/Fake-data/clienUi';
import './style.scss';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';

function Footer(props) {
    return (
        <footer className="footer">
            <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                className="footer__row"
            >
                <Col className="gutter-row footer__col" span={6}>
                    <div className="footer__item">
                        <div className="footer__title">Support call center</div>
                        <div className="footer__content">
                            <p>
                                Order contact<strong>0397348149</strong>
                            </p>
                            <p>
                                Order inquiries<strong>0397348149</strong>
                            </p>
                            <p>
                                Suggestions, complaints
                                <strong>0397348149</strong>
                            </p>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row products-pay__col" span={6}>
                    <div className="footer__item">
                        <div className="footer__title">About Iphone</div>
                        <div className="footer__content">
                            {footerAboutLink.map((item, index) => (
                                <p key={index}>
                                    <Link to={item.path}>{item.display}</Link>
                                </p>
                            ))}
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row products-pay__col" span={6}>
                    <div className="footer__item">
                        <div className="footer__title">Customer care</div>
                        <div className="footer__content">
                            {footerCustomLink.map((item, index) => (
                                <p key={index}>
                                    <Link to={item.path}>{item.display}</Link>
                                </p>
                            ))}
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row footer__col" span={6}>
                    <div className="footer__about footer__item">
                        <div className="footer__logo">
                            <img
                                alt=""
                                src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                                className="footer__logo--01"
                            ></img>
                            <img
                                alt=""
                                src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
                                className="footer__logo--02"
                            ></img>
                        </div>
                        <p>
                            Hướng đến mục tiêu là tạo nên 1 thị trường điện tử
                            lớn nhất Việt Nam, shop Iphone cung cấp những chiếc
                            Iphone đời mới nhất, với những tiện ích mà hiếm có
                            hãng điện thoại nào sánh được. Hãy cùng Iphone hướng
                            đến 1 cuộc sống đầy đủ tiện nghi hơn.
                        </p>
                    </div>
                </Col>
            </Row>
        </footer>
    );
}

Footer.propTypes = {};

export default Footer;
