import React from "react";
import Error from "./forms/Error";
import Success from "../components/forms/Success";

export default function Login() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        success: false,
        error: false,
    });
    // console.log(formData)
    const handleChange = (e) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // submitToApi(formData)
        console.log(formData);
    };

    return (
        <div className="login">
            <div className="flex--center login__logo-wrapper">
                <img
                className='logo'
                    src="http://ones.flatheme.net/assets/images/client-3.png"
                    alt=""
                />
            </div>
            <div className="login__main-content">
                <div className="login__container-default">
                    <div className="login__utility-page-form text-center">
                        <div className="module__inner-container--center">
                            <div className="inner_container">
                                <img
                                    className="mb-32"
                                    src="https://assets.website-files.com/6260849a6eab2a733e282630/627972fdabfa5fbd3e741ae5_log-in-icon-dashboardly-webflow-template.svg"
                                    alt=""
                                />
                            </div>
                            <h3 className="h3">Welcome Back</h3>
                            <p className="mb-32">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit sedol do
                                eiusmod tempor consectur.
                            </p>
                            <div className="login__form mb-24">
                                <form className="form flex__column" onSubmit={handleSubmit}>
                                    <input
                                        className="form__input mb-16"
                                        type="email"
                                        placeholder="email"
                                        onChange={handleChange}
                                        name="firstName"
                                        value={formData.email}
                                    />
                                    <input
                                        className="form__input"
                                        type="password"
                                        placeholder="password"
                                        onChange={handleChange}
                                        name="email"
                                        value={formData.email}
                                    />
                                    <br />
                                    <br />
                                    <button className="form__submit">Submit</button>
                                </form>
                                <div className="error-messages">
                                    <div style={{ display: !formData.success ? 'none' : 'block' }} className="login__message--success">
                                        <Success />
                                    </div>
                                    <div style={{ display: !formData.error ? 'none' : 'block' }}>
                                        <Error />
                                    </div>
                                </div>
                            </div>
                            <div className="flex mb-32 w-100">
                                <div className="grid w-100">
                                    <div className="row">
                                        <div className="col-1-of-1 w-100">
                                            <div className="flex--between w-100">
                                                <div className="remember-me flex--center">
                                                    <input className='mr-8' type="checkbox" />{" "}
                                                    <p className="text__200--regular">Remember Account</p>
                                                </div>
                                                <p className="forgot">Forgot your password</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="flex__column col-1-of-1">
                                            <button className="login__btn--google">
                                                <div className="flex--center">
                                                    <img
                                                        src="https://assets.website-files.com/6260849a6eab2a733e282630/6279829180c310b40ce5131b_google-button-icon-dashboardly-webflow-template.svg"
                                                        alt=""
                                                        className="mr-12"
                                                    />
                                                    <p className="text__200">Sign in with Google</p>
                                                </div>
                                            </button>
                                            <button className="login__btn--facebook">
                                                <div className="flex--center">
                                                    <img
                                                        src="https://assets.website-files.com/6260849a6eab2a733e282630/62798291655acc6122b270e4_facebook-button-icon-dashboardly-webflow-template.svg"
                                                        alt=""
                                                        className="mr-12"
                                                    />
                                                    <p className="text__200">Sign in with Facebook</p>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex--center">
                                        <p className="text__200 mr-12">Don't have an account?</p>
                                        <a className="text__200--blue">Create an account</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
