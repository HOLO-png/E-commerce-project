import React from 'react';
// import PropTypes from 'prop-types';
import './style.scss';
import Helmet from '../../Components/Helmet';

function Home(props) {
    return (
        <Helmet title="Home">
            <p>Trang Chủ</p>
        </Helmet>
    );
}

Home.propTypes = {};

export default Home;
