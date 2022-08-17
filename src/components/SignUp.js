import React from 'react'
import Error from './forms/Error';
import signImg from '../styles/images/register-graphic.svg';
import logoImg from '../styles/images/logo.svg';
import Success from './forms/Success';

export default function SignUp() {
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
    <div className="sign-up-page">
      <div className="sign-up-page__left-side">
        <div className="sign-up-page__logo-container">
          <div className="sign-up-page__inner-container w-100">
            <a href="/" className="sign-up-page__logo-wrapper">
              <img src={logoImg} alt="" className="logo" />
            </a>
          </div>
        </div>
        <div className="sign-up-page__inner-container">
          <h1 className="h3 mb-8">Create an account</h1>
          <p className="mb-24">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sedol do eiusmod tempor consectur.
          </p>
          <div className="login__form mb-24">
            <form className="form flex__column" onSubmit={handleSubmit}>
              <input
                className="form__input mb-16"
                type="text"
                placeholder="Full name"
                onChange={handleChange}
                name="fullName"
                value={formData.fullName}
              />
              <input
                className="form__input mb-16"
                type="email"
                placeholder="Email address"
                onChange={handleChange}
                name="email"
                value={formData.email}
              />
              <input
                className="form__input"
                type="password"
                placeholder="password"
                onChange={handleChange}
                name="password"
                value={formData.password}
              />
              <br />
              <br />
              <button className="form__submit">Sign Up</button>
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
                      <p className="text__200--bold">Accept terms and conditions</p>
                    </div>
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
            </div>
          </div>
        </div>
      </div>
      <div className="sign-up-page__right-side">
        <div className="sign-up-page__inner-container">
          <img src={signImg} alt="" className="w-100" />
        </div>
        <div className="sign-up-page__right-side--bg"/>
      </div>
    </div>
  )
}
