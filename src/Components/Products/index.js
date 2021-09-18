import React from 'react';
import './style.scss';
import NavBar from './NavBar'
import ProductLeft from './ProductLeft'
import ProductRight from './ProductRight'
import ProductByMore from './ProductByMore'
import ProductDesc from './ProductDesc'
import ProductInfo from './ProductInfo'
import ProductComment from './ProductComment'
import ProductReview from './ProductReview'
import ProductDiscover from './ProductDiscover'
import ProductOther from './ProductOther'
import ProductSaw from './ProductSaw'
function Products(props) {
    return <div>
        <div className="grida">
          <div className="container1">
            <NavBar/>
            <div className="content">
              <div className="product">
                {/* Img product */}
                <ProductLeft/>
                {/* Descripton product */}
                <ProductRight/>
              </div>
            </div>
          </div>
          <ProductByMore/>
          <ProductInfo/>
          <ProductDesc/>
          <ProductComment/>
          <ProductReview/>
          <ProductDiscover/>
          <ProductOther/>
          <ProductSaw/>
        </div>
    </div>;
}

Products.propTypes = {};

export default Products;
