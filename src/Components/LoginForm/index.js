import { SmileOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import firebase, { auth } from '../../Firebase/config';
import { addDocument } from '../../Firebase/Services';
import Signin from './Signin';
import Signup from './Signup';
import './style.scss';

const fbProvider = new firebase.auth.FacebookAuthProvider();
const ggProvider = new firebase.auth.GoogleAuthProvider();
function LoginForm(props) {
    const [isActive, setIsActive] = useState(false);
    const isShowSignup = () => {
        setIsActive(!isActive);
    };
    const history = useHistory();

    const handleFbLogin = () => {
        auth.signInWithPopup(fbProvider);
    };

    const handleGgLogin = () => {
        auth.signInWithPopup(ggProvider);
    };

    auth.onAuthStateChanged((user) => {
        console.log({ user });
    });

    const handleLoginSignin = async (val) => {
        return new Promise((resolve) => {
            console.log('Form Submit:', val);

            setTimeout(() => {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(val.email, val.password)
                    .then((data) => {
                        notification.open({
                            message: 'Xin Chào',
                            description: `Chào mừng bạn quay lại 🥰`,
                            icon: (
                                <SmileOutlined style={{ color: '#108ee9' }} />
                            ),
                        });
                        history.push('/home');
                    })
                    .catch((err) => {
                        notification.open({
                            message: 'Xin Lỗi',
                            description: `Lỗi không mong muốn, tài khoản bạn nhập không chính xác, vui lòng nhập lại 🤨`,
                            icon: (
                                <SmileOutlined style={{ color: '#108ee9' }} />
                            ),
                        });
                        history.push('/login');
                        return;
                    });

                resolve(true);
            }, 1000);
        });
    };

    const handleLoginSignup = (val) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                auth.createUserWithEmailAndPassword(val.email, val.password)
                    .then((result) => {
                        let config = {
                            url: 'https://localhost:3001',
                            handleCodeInApp: true,
                        };
                        auth.sendSignInLinkToEmail(val.email, config)
                            .then((result) => {
                                notification.open({
                                    message: 'Xác Minh Tài Khoản',
                                    description: `Email ${val.email} đã được gửi đi, vui lòng vào hòm email để xác nhận 😁`,
                                    icon: (
                                        <SmileOutlined
                                            style={{ color: '#108ee9' }}
                                        />
                                    ),
                                });
                                window.localStorage.setItem(
                                    'emailForRegistration',
                                    JSON.stringify(val.email),
                                );
                            })
                            .catch((error) => {
                                notification.open({
                                    message: 'Xin Lỗi',
                                    description: `lỗi không mong muốn vui lòng nhập lại thông tin🤨`,
                                    icon: (
                                        <SmileOutlined
                                            style={{ color: '#108ee9' }}
                                        />
                                    ),
                                });
                            });
                    })
                    .then((data) => {
                        addDocument('users', {
                            displayName: val.name,
                            email: val.email,
                            photoURL: null,
                            uid: val.name,
                        });
                        // history.push('/');
                    })
                    .catch((err) => {
                        notification.open({
                            message: 'Xin Lỗi',
                            description: `lỗi không mong muốn vui lòng nhập lại thông tin🤨`,
                            icon: (
                                <SmileOutlined style={{ color: '#108ee9' }} />
                            ),
                        });
                        history.push('/login');
                        return;
                    });

                resolve(true);
            }, 1000);
        });
    };

    return (
        <div className="form">
            <div
                className={
                    isActive ? 'container right-panel-active' : 'container'
                }
            >
                <Signup
                    handleFbLogin={handleFbLogin}
                    handleGgLogin={handleGgLogin}
                    onSubmit={handleLoginSignup}
                />
                <Signin
                    handleFbLogin={handleFbLogin}
                    handleGgLogin={handleGgLogin}
                    onSubmit={handleLoginSignin}
                />

                <div className="form__overlay-container">
                    <div className="form__overlay">
                        <div className="form__overlay-panel form__overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your
                                personal info
                            </p>
                            <button
                                className="form__btn__ghost"
                                onClick={isShowSignup}
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="form__overlay-panel form__overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>
                                Enter your personal details and start journey
                                with us
                            </p>
                            <button
                                className="form__btn__ghost"
                                onClick={isShowSignup}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="form__footer">
                <p>
                    Shop điện tử Iphone <i className="fa fa-heart" /> của
                    <a type="link"> Hoàng Long</a> - Xin chân thành cảm ơn quý
                    khách đã ghé qua ạ
                </p>
            </footer>
        </div>
    );
}

LoginForm.propTypes = {};

export default LoginForm;
