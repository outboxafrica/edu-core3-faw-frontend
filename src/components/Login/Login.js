import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const defaultState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: ""
}

const isLoggedIn = '';

export default class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          defaultState,
          isLoggedIn: true
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      validate = () => {
        let emailError= "";
        let passwordError= "";

        // email validation
        if (!this.state.email) {
          emailError = "email required"
        } else if (!this.state.email.includes('@')) {
          emailError = "email is invalid";
        } 

        // password validation
        if (!this.state.password) {
            passwordError = "Password required";
        }  else if (this.state.password.length < 7 && this.state.password.length > 10) {
            passwordError = "password should have a minimum of 6 characters and a maximum of 10 characters"
        }
        
        // errors
        if (emailError || passwordError) {
          this.setState({emailError, passwordError});
          return false;
        }

        return true;
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state)
            // clear form
            this.setState(defaultState);
        }
        
        const { email, password } = this.state;
    
        axios
          .post(
            `https://localhost:3000/api/login`,
            {
              user: {
                email: email,
                password: password
              }
            },
            { withCredentials: true }
          )
          .then(response => {
            if (response.data.logged_in) {
              this.props.handleSuccessfulAuth(response.data);
            }
            // if (!isLoggedIn()) { 
            //   return <Redirect to="/signup" />;
            // }
          })
          .catch(err => {
            console.log(err);
          });
        event.preventDefault();
      }

    render() {
        return (
            <div className="login-container">
              <form className="login-form" onSubmit={this.handleSubmit}>
                  <h1>Login</h1>
                    <div className="login-inputs">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="login-input"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.emailError}</div>
                    </div>
                    <div className="login-inputs">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="login-input"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.passwordError}</div>
                    </div>
                    <div className="form-options">
                        <div className="checkbox-field">
                            <input type="checkbox" id="rememberMe" 
                            className="checkbox" />
                            <label htmlFor="rememberMe"> Remember me</label>
                        <p className="text-right">
                          <Router>
                            <Link to="#">Forgot Password?</Link>
                          </Router>
                        </p>
                        </div>
                    </div>
                    <button className="login-input-button" 
                    type="submit">Login</button>
                    <span className="form-input-signup">
                        Don't have an account? 
                        <Router> 
                          <Link to="/signup">
                            Sign up</Link>
                        </Router>
                    </span>
                </form>
            </div>
        )
    }
}