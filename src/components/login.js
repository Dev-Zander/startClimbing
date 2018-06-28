import React, { Component } from 'react';
import '../styles/styles.css';
import logo from '../styles/images/mstile-70x70.png'






class Login extends Component {
    render() {
        return (

            <div>

                <div className="login-main">
                <div className="login-box">
                    <div className="login-logo">
                    <img className="login-logo" alt="logo" src={logo}/>
                        <div className="login-title">
                            Start Climbing
                            <a href={process.env.REACT_APP_LOGIN} className="login-button"><div className="button-text">Login</div></a>         
                        </div>
                    </div>
                
                </div>
            </div>


            </div>


        )
    }
}

export default Login
