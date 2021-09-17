import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Affix, Alert, Button, Col, Row, Checkbox } from 'antd';
import { category_product } from '../../Assets/Fake-data/clienUi';

function CatgorySelect(props) {
    const { productAll, handleImportProduct } = props;
    const [top, setTop] = useState(5);
    const [productState, setProductState] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        setProductState(productAll);
    }, [productAll]);

    const renderCategoryProduct = () =>
        category_product.map((item, index) => (
            <Col
                className="gutter-row"
                span={3}
                style={{ padding: 0 }}
                key={index}
            >
                <div
                    className={
                        active === index
                            ? 'category-select-card active'
                            : 'category-select-card'
                    }
                >
                    <div className="category-select-img">
                        <img alt="" src={item.image} />
                    </div>
                    <Button type="link">{item.title}</Button>
                </div>
            </Col>
        ));
    return (
        <Affix offsetTop={top}>
            <div className="category-select">
                <div className="category-select-title">
                    <i className="fad fa-lightbulb-on"></i> Gợi Ý Hôm Nay
                </div>
                <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{
                        margin: 0,
                        borderTop: ' 5px solid #f8f8f8',
                        borderBottom: ' 5px solid #f8f8f8',
                        borderRadius: '5px',
                    }}
                >
                    {renderCategoryProduct()}
                </Row>
            </div>
        </Affix>
    );
}

CatgorySelect.propTypes = {};

export default CatgorySelect;
