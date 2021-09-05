import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { search_item } from '../../../Assets/Fake-data/clienUi';

function HeaderSearch(props) {
    return (
        <div className="header__search">
            <div className="header__search-input">
                <input
                    type="text"
                    placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn,..."
                />
                <Button type="primary" icon={<SearchOutlined />}>
                    Tìm Kiếm
                </Button>
            </div>
            <div className="header__search-hith">
                {search_item.map((item, index) => (
                    <div className="header__search-hith-item" key={index}>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

HeaderSearch.propTypes = {};

export default HeaderSearch;
