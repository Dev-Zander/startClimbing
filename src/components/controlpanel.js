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
                        guest: res.data.map((attendee, index) => {
                            return (
                                <div key={index}>
                                    <div>
                                        <div className="admin-info-container">
                                        

                                            <div className="admin-firstName">{attendee.first_name}</div>
                                            <div className="admin-lastName">{attendee.last_name}</div>
                                            <div className="admin-middleName">{attendee.middle_initial}</div>
                                            <div className="admin-phoneNumber">{attendee.phone_number}</div>
                                            <div className="admin-email">{attendee.email_address}</div>
                                            <div className="admin-ageCheck">{attendee.age_check}</div>
                                            <div className="admin-tosCheck">{attendee.tos_check}</div>
                                            <div className="admin-numGuest">{attendee.num_guest}</div>
                                            <div className="admin-sessionTime">{attendee.session_time}</div>
                                            <div className="admin-legalCheck">{attendee.legal_check}</div>
                                            <div className="admin-confirmationNumber">{attendee.confirmation_number}</div>
                                        
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
                    <a  style={{textDecoration:'none'}} className="admin-logout-button" href={`${process.env.REACT_APP_API_LOGOUT}api/destroy`}><div>Logout</div></a>
                    {/* <a href={'http://localhost:3210/api/destroy'}><button className="admin-logout-button">Logout</button></a> */}
                    <Link style={{textDecoration:'none'}} to='/login'><div  className="admin-login-button">Login</div></Link>
                </div>

                <h3>StartClimbing.org Control Panel</h3>
                <div style={{
                    display:'flex',
                    color: 'red',
                    fontSize: '15px',
                    flexDirection: 'row',


                }}>{this.state.error}</div>
                


          <div> 
            <div className="admin-titles">
          <span>First Name </span>
          <span>Last Name </span>
          <span>Middle Initial </span>
          <span>Phone Number </span>
          <span>E-Mail Address </span>
          <span>Age Check </span>
          <span>TOS Accepted </span>
          <span>Number of Guest </span>
          <span>Session Time </span>
          <span>Legal Check </span>
          <span>Confirmation Number</span>
          </div>
          </div>   
          <div style={{textAlign:'left'}}>{this.state.guest}</div> 
         </div>


        )
    }
}

export default withRouter(HomePage)
