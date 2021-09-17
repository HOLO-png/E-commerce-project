import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import './style.scss';
import Helmet from '../../Components/Helmet';
import { Button, Divider } from 'antd';
import SlickSlider from '../../Components/SlickSlider';
import { image_slider_home, police } from '../../Assets/Fake-data/clienUi';
import Section, { SectionBody, SectionTitle } from '../../Components/Section';
import Grid from '../../Components/Grid';
import { Link } from 'react-router-dom';
import PoliceCart from '../../Components/PoliceCart';
import GenuineBrand from '../../Components/GenuineBrand';
import SriceShock from '../../Components/SriceShock';
import { getProducts } from '../../Utils/randomProduct';
import ProductCart from '../../Components/ProductCart';
import CatgorySelect from '../../Components/CatgorySelect';
import { getMobilesApi, mobilesSelector } from '../../Store/Reducer/mobile_api';
import { getLaptopsApi, laptopsSelector } from '../../Store/Reducer/laptop_api';
import { getTabletsApi, tabletsSelector } from '../../Store/Reducer/tablet_api';
import { useDispatch, useSelector } from 'react-redux';

function Home(props) {
    const [productAll, setProductAll] = useState([]);
    const mobile_api = useSelector(mobilesSelector);
    const laptop_api = useSelector(laptopsSelector);
    const tablet_api = useSelector(tabletsSelector);
    const [minHeight, setMinHeight] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMobilesApi());
        dispatch(getLaptopsApi());
        dispatch(getTabletsApi());
    }, [dispatch]);

    useEffect(() => {
        setProductAll([...laptop_api, ...mobile_api, ...tablet_api]);
    }, [laptop_api, mobile_api, tablet_api]);

    const mobileTabletTop = [...mobile_api, ...tablet_api];

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
                <Section>
                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={20}>
                            {police.map((item, index) => (
                                <Link
                                    to="/policy"
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    <PoliceCart
                                        name={item.name}
                                        description={item.description}
                                        icon={item.icon}
                                    />
                                </Link>
                            ))}
                        </Grid>
                    </SectionBody>
                </Section>
                <SriceShock />
                <GenuineBrand />
                <Section data-aos="fade-up">
                    <SectionTitle icon="crown">MUA NHIỀU NHẤT</SectionTitle>

                    <Divider
                        orientation="center"
                        style={{
                            transform: 'translateY(30px)',
                            color: '#c3c3c3',
                        }}
                    >
                        <i className="fad fa-mobile"></i> IPHONE + TABLET
                    </Divider>
                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={20}>
                            {getProducts(4, mobileTabletTop).map(
                                (item, index) => (
                                    <div data-aos="fade-up" key={index}>
                                        <ProductCart
                                            id={item.id}
                                            name={item.name}
                                            price={item.price}
                                            status={item.status}
                                            star={item.star}
                                            amount={item.amount}
                                            category={item.category}
                                            capacity={item.capacity}
                                            varation={item.varation}
                                            image={item.image}
                                            description={item.description}
                                            priceOld={item.priceOld}
                                            height="400"
                                            img_width="95%"
                                            right="11px"
                                        ></ProductCart>
                                    </div>
                                ),
                            )}
                        </Grid>
                    </SectionBody>
                    <Divider
                        orientation="center"
                        style={{
                            transform: 'translateY(30px)',
                            color: '#c3c3c3',
                        }}
                    >
                        <i className="fad fa-laptop"></i> LAPTOP
                    </Divider>
                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={20}>
                            {getProducts(4, laptop_api).map((item, index) => (
                                <div data-aos="fade-up" key={index}>
                                    <ProductCart
                                        data-aos="fade-up"
                                        id={item.id}
                                        name={item.name}
                                        price={item.price}
                                        status={item.status}
                                        star={item.star}
                                        amount={item.amount}
                                        category={item.category}
                                        capacity={item.capacity}
                                        varation={item.varation}
                                        image={item.image}
                                        description={item.description}
                                        priceOld={item.priceOld}
                                        height="400"
                                        img_width="95%"
                                        right="11px"
                                    ></ProductCart>
                                </div>
                            ))}
                        </Grid>
                    </SectionBody>
                </Section>
                <CatgorySelect
                    // handleCategorySamSung={handleCategorySamSung}
                    // handleProductAll={handleProductAll}
                    // handleImportProduct={handleImportProduct}
                    productAll={[...laptop_api, ...mobile_api, ...tablet_api]}
                />
                <SectionBody>
                    <div
                        className="cart-products"
                        style={{ height: 'auto', overflow: 'hidden' }}
                    >
                        <Grid col={5} mdCol={2} smCol={1} gap={0}>
                            {getProducts(21, productAll).map((item, index) => (
                                <div data-aos="fade-up" key={index}>
                                    <ProductCart
                                        id={item.id}
                                        name={item.name}
                                        price={item.price}
                                        status={item.status}
                                        star={item.star}
                                        amount={item.amount}
                                        category={item.category}
                                        capacity={item.capacity}
                                        varation={item.varation}
                                        image={item.image}
                                        description={item.description}
                                        priceOld={item.priceOld}
                                        height="350"
                                        img_width="90%"
                                        right="5px"
                                    ></ProductCart>
                                </div>
                            ))}
                        </Grid>
                    </div>
                </SectionBody>
            </div>
        </Helmet>
    );
}

Home.propTypes = {};

export default Home;
