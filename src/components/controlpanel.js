import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../styles/styles.css';
import axios from 'axios';






class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: 'Not Logged in or Authorized to View This Page.',
            guest: ''
        }
    }

    componentWillMount() {
        axios.get('/api/getgueslist').then(
            res => {
                if (res.data === false) {
                    this.setState({
                        error: 'You Are Not Authorized!'
                    })
                } else {
                    this.setState({
                        guest: res.data.map((traveler, index) => {
                            return (
                                <div key={index}>
                                    <div>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            flexWrap: 'nowrap',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            alignContent: 'center'
                                        }}>
                                            <div>{traveler.first_name}</div>
                                            <div>{traveler.last_name}</div>
                                            <div>{traveler.middle_initial}</div>
                                            <div>{traveler.phone_number}</div>
                                            <div>{traveler.email_address}</div>
                                            <div>{traveler.age_check}</div>
                                            <div>{traveler.tos_check}</div>
                                            <div>{traveler.num_guest}</div>
                                            <div>{traveler.session_time}</div>
                                            <div>{traveler.legal_check}</div>
                                            <div>{traveler.confirmation_number}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }),
                        error: ''
                    })
                }
            }
        )
    }
    render() {

        return (

            <div className="admin-main-container">
                <div className="admin-button-container">
                    <a className="admin-logout-button" href={`${process.env.REACT_APP_API_LOGOUT}api/destroy`}><button>Logout</button></a>
                    {/* <a href={'http://localhost:3210/api/destroy'}><button className="admin-logout-button">Logout</button></a> */}
                    <Link to='/login'><button className="admin-login-button">Login</button></Link>
                </div>

                <h3>StartClimbing.org Control Panel</h3>
                <h2 style={{
                    color: 'red',
                    fontSize: '15px'
                }}>{this.state.error}</h2>
                
          <div style={{
              fontSize:'10px'
          }}> {this.state.guest}</div> 
            </div>


        )
    }
}

export default withRouter(HomePage)
