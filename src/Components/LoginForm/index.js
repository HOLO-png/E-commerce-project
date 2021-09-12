import React, { useState } from 'react';
import firebase, { auth } from '../../Firebase/config';
import Signin from './Signin';
import Signup from './Signup';
import './style.scss';

const fbProvider = new firebase.auth.FacebookAuthProvider();
function LoginForm(props) {
    const [isActive, setIsActive] = useState(false);
    const isShowSignup = () => {
        setIsActive(!isActive);
    };

    const handleFbLogin = () => {
        auth.signInWithPopup(fbProvider);
    };

    auth.onAuthStateChanged((user) => {
        console.log({ user });
    });
    return (
        <div className="form">
            <div
                className={
                    isActive ? 'container right-panel-active' : 'container'
                }
            >
                <Signup handleFbLogin={handleFbLogin} />
                <Signin />

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
