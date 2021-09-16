/* eslint-disable no-template-curly-in-string */
import React from 'react';
import * as Yup from 'yup';
import { FastField, Form, Formik, isEmptyChildren } from 'formik';
import { Button, FormGroup, Input, Label, Spinner } from 'reactstrap';
import PropTypes from 'prop-types';
import InputField from '../../InputField';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../../Firebase/config';
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
ForgotPassword.propTypes = {
    onSubmit: PropTypes.func,
};
ForgotPassword.defaultProps = {
    onSubmit: null,
};

function ForgotPassword(props) {
    const history = useHistory();
    const initialValues = {
        email: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email format')
            .required('This field is required !'),
    });

    const handleSubmit = (val) => {
        setTimeout(async () => {
            await auth
                .sendPasswordResetEmail(val.email)
                .then(() => {
                    notification.open({
                        message: 'Kiểm Tra Tài Khoản',
                        description: `Yêu cầu đã được gửi đến ${val.email}, Vui lòng xác nhận lại mật khẩu của bạn 😍`,
                        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                    });
                    window.localStorage.setItem(
                        'emailForRegistration',
                        JSON.stringify(val.email),
                    );
                    history.push('/login');
                })
                .catch((error) => {
                    notification.open({
                        message: 'Kiểm Tra Tài Khoản',
                        description:
                            'Lỗi không mong muốn, vui lòng load lại trang 🙄',
                        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                    });
                });
        }, 1000);
    };
    return (
        <div className="form">
            <div className="form__forgot-password">
                <div className="form__container">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {(formikProps) => {
                            const { values, errors, touched, isSubmitting } =
                                formikProps;
                            console.log(isSubmitting);
                            return (
                                <Form>
                                    <h1 className="form__title">
                                        Forgot Password
                                    </h1>
                                    <div className="form__social-container"></div>
                                    <span>
                                        Please enter your email or mobile number
                                        to search your account
                                    </span>
                                    <FastField
                                        name="email"
                                        component={InputField}
                                        label="Email"
                                        type="email"
                                        placeholder="Email ..."
                                    />
                                    <FormGroup>
                                        <Link to="/login">
                                            <Button
                                                type="button"
                                                className="btn-outline-light"
                                            >
                                                Cancel
                                            </Button>
                                        </Link>

                                        <Button type="submit">Search</Button>
                                    </FormGroup>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

ForgotPassword.propTypes = {};

export default ForgotPassword;
