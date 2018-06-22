import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import Map from './gmaps';
import { NewGuestCount, NewTime, NewFirstName, NewLastName, NewMiddleInitial, NewEmail, NewPhone, NewAge, NewLaw, NewTos } from '../redux/reducer';
import axios from 'axios';



class Registration extends Component {
    constructor(props){
        super(props)
     this.state={
         error:''
     }

    this.handleSubmitReg = this.handleSubmitReg.bind(this)
    this.handleError = this.handleError.bind(this)
    }
    handleError(){
        this.setState({
            error: "Please complete all fields."
        })
    }
 
    handleSubmitReg(){
        axios.post('/api/register', {
            guestCount: this.props.guestCount,
            time: this.props.time,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            middleInt: this.props.middleInt,
            emailAddress: this.props.emailAddress,
            phoneNumber: this.props.phoneNumber,
            ageCheck: this.props.ageCheck,
            lawViolation: this.props.lawViolation,
            tosAcknoledgeMent: this.props.tosAcknoledgeMent,
            confirmationNum : this.props.confirmationNum
        })

    }

    render() {

        return (

            <div className="main">

                <div className="main-container">

                    <div className="left-pane">
                        <div className="left-pane-topbox"></div>
                        <div className="left-pane-input-box">
                            <div className="event-info-box">
                                <div><h1>Start Climbing</h1></div>
                                <div> <h3>July 14th 2018</h3></div>
                                <div><h4 className="location-text">Embassy Suites Tampa Downtown Convention Center</h4></div>
                                <div><h5>513 S Florida Ave, Tampa FL 33602</h5></div>
                            </div>
                            <div>
                                <div className="number-guest-text">
                                    How many additional guests will you be bringing?
                                 </div>
                                <select selected={this.props.guestCount} className="num-guest" onChange={(e) => { this.props.NewGuestCount(e.target.value) }}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                            <div>
                                <div className="time-text">
                                    Please select desired time.
                    </div>
                                <select onChange={(e) => { this.props.NewTime(e.target.value) }} className="time-select">
                                    <option value="No Time Selected">Choose Time</option>
                                    <option value="0900"> 9:00AM - 10:15AM</option>
                                    <option value="1100">11:00AM - 12:15PM</option>
                                    <option value="1300"> 1:00PM -   2:15PM</option>
                                </select>
                            </div>
                        </div>
                        <div className="left-pane-map">
                            <Map
                                isMarkerShown
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD5mI-U8ARF7vaS15VdVHnKG76UAdV1oX0&callback=initMap"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `100%` }} />}
                                mapElement={<div style={{ height: `100%` }} />} />
                        </div>
                    </div>
                    <div className="right-pane">
                        <div style={{
                            display:'flex',
                            flexDirection:'column'
                        }} className="right-pane-header">

                            <h3>Please complete form to register.</h3>
                            <div style={{
                                color:'red'
                            }}><h4>{this.state.error}</h4></div>

                        </div>
                        <input onChange={(e) => { this.props.NewFirstName(e.target.value) }} placeholder="First Name" className="input-firstname" />
                        <input onChange={(e) => { this.props.NewLastName(e.target.value) }} placeholder="Last Name" className="input-lastname" />
                        <input onChange={(e) => { this.props.NewMiddleInitial(e.target.value) }} placeholder="M.I." maxlength="1" className="input-middle" />
                        <input onChange={(e) => { this.props.NewEmail(e.target.value) }} placeholder="Email Address" className="input-email" />
                        <input onChange={(e) => { this.props.NewPhone(e.target.value) }} type="number" class="noscroll" placeholder="Phone Number" maxlength="10" className="input-phonenumber" />
                        <div className="age-check-text">
                            Are you between the ages of 17 - 34?
                <select onChange={(e) => { this.props.NewAge(e.target.value) }} className="select-age">
                                <option >Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="violation-check-text">
                            Any Major Law Violations?
                <select onChange={(e) => { this.props.NewLaw(e.target.value) }} className="select-age">
                                <option>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="violation-check-text">
                            <input value="TosAccepted" onChange={(e) => { this.props.NewTos(e.target.value) }} className="tos-validate" type="checkbox" />
                            <div className="tos-text">I acknowledge that I have read and agree with  <Link to="/privacy" target="_blank">terms of service.</Link></div>
                        </div>
                        <div className="right-buttons">
                            <Link to="/homepage"> <button className="dark-button">Back</button></Link>

                            {this.props.time !== '0' && this.props.firstName.length >= 3 && this.props.lastName.length >= 3 && this.props.emailAddress.length >=5 && this.props.phoneNumber.length === 10 &&  this.props.ageCheck !== '' && this.props.lawViolation !== '' && this.props.tosAcknoledgeMent !== "" ?
                            <Link to="/confirmation"><button style={{backgroundColor:'green',
                                                                    color:'white'}} onClick={()=>{this.handleSubmitReg()}} className="light-button">Confirm</button></Link>:
                            <button style={{backgroundColor:'red'}} onClick={()=>{this.handleError()}} className="light-button">Confirm</button>
                            }
                        </div>
                    </div>
                    <div className="bottom-pane"></div>

                </div>


            </div>
        )
    }
}

function mapStateToProps(state) {


    return {

        guestCount: state.guestCount,
        time: state.time,
        firstName: state.firstName,
        lastName: state.lastName,
        middleInt: state.middleInt,
        emailAddress: state.emailAddress,
        phoneNumber: state.phoneNumber,
        ageCheck: state.ageCheck,
        lawViolation: state.lawViolation,
        tosAcknoledgeMent: state.tosAcknoledgeMent,
        confirmationNum:state.confirmationNum
    }
}
export default connect(mapStateToProps, { NewGuestCount, NewTime, NewFirstName, NewLastName, NewMiddleInitial, NewEmail, NewPhone, NewAge, NewLaw, NewTos })(Registration)

