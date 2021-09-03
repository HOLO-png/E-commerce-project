import React from 'react';
import PropTypes from 'prop-types';

function Helmet(props) {
    const { title, children } = props;
    document.title = 'E-Commerce - ' + title;

    return <div>{children}</div>;
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired,
};

Helmet.defaultProps = {
    title: 'Iphone',
};

export default Helmet;
