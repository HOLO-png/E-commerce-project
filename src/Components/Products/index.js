import React from 'react';
import './assets/css/app.css'
import NavBar from './assets/Components/NavBar'
import ProductLeft from './assets/Components/ProductLeft'
import ProductRight from './assets/Components/ProductRight'
import ProductByMore from './assets/Components/ProductByMore'
import ProductDesc from './assets/Components/ProductDesc'
import ProductInfo from './assets/Components/ProductInfo'
import ProductComment from './assets/Components/ProductComment'
import ProductReview from './assets/Components/ProductReview'
import ProductDiscover from './assets/Components/ProductDiscover'
import ProductOther from './assets/Components/ProductOther'
import ProductSaw from './assets/Components/ProductSaw'
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
