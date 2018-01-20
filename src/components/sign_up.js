import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {renderInput} from '../helpers';

class SignUp extends Component {

  handleSignUp(vals) {
    console.log("vals: ", vals);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1 className="center-align">Sign Up</h1>
        <div className="row">
          <div className="col s8 offset-s2 grey lighten-4">
            <div className="card-content">
              <form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter email address"
                  component={renderInput}
                />
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  component={renderInput}
                />
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  component={renderInput}
                />
                <div className="right-align">
                  <button className="btn blue darken-4">SIGN UP</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const error = {};
  if (!values.email) {
    error.email = "Please enter email";
  }
  if (!values.password) {
    error.password = "Please enter password";
  }
  if (values.password !== values.confirmPassword) {
    error.confirmPassword = "Password do not match";
  }
  return error;
}

SignUp = reduxForm({
  form: "sign-up",
  validate: validate
})(SignUp);

export default SignUp;
