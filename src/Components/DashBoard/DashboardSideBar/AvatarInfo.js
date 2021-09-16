import React from 'react';
import PropTypes from 'prop-types';

function AvatarInfo(props) {
    return (
        <div className="profile-sidebar">
            <div className="profile-userpic">
                <img
                    src="https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg"
                    className="img-responsive"
                    alt=""
                />
            </div>
            <div className="profile-usertitle">
                <div className="profile-usertitle-name">Username</div>
                <div className="profile-usertitle-status">
                    <span className="indicator label-success" />
                    Online
                </div>
            </div>
            <div className="clear" />
        </div>
    );
}

AvatarInfo.propTypes = {};

export default AvatarInfo;
