import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {renderInput} from '../helpers';

class SignIn extends Component {

  handleSignIn (vals) {
    console.log("vals: ", vals);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1 className="center-align">Sign In</h1>
        <div className="row">
          <div className="col s8 offset-s2 grey lighten-4">
            <div className="card-content">
              <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
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
                <div className="right-align">
                  <button className="btn blue darken-2">SIGN IN</button>
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
  return error;
}

SignIn = reduxForm({
  form: "sign-in",
  validate: validate
})(SignIn);

export default SignIn;
