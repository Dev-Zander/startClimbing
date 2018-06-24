import React, { Component } from 'react';
import '../styles/styles.css';






class Login extends Component {
    render() {
        return (

            <div>

                <div>
                    <a href={process.env.REACT_APP_LOGIN}><button className="enter-site-button" >Login</button></a>
                </div>

            </div>


        )
    }
}

export default Login
