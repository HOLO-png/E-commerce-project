import React from 'react';
import './style.scss'

import NewsTitle from './NewsTitle'
import NewsRelated from './NewsRelated'
import NewsQuestion from './NewsQuestion'

function Products(props) {
    return <div>
        <div className="NewsDesc">
            <NewsTitle/>
            <NewsRelated/>
            <NewsQuestion/>
        </div>
    </div>;
}

Products.propTypes = {};

export default Products;
