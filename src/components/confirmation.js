import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../styles/styles.css';
import Map from './gmaps'
import axios from 'axios';
import { connect } from 'react-redux';
import { NewGuestCount, NewTime, NewFirstName, NewLastName, NewMiddleInitial, NewEmail, NewPhone, NewAge, NewLaw, NewTos } from '../redux/reducer';




class Confirmation extends Component {
    constructor(props){
        super(props)
      
    }


handlePrintScreen(){
    window.print()
}

    render() {

        
        return (

            <div className="main">

                <div className="main-container">

                    <div className="left-pane1">
                        <div className="left-pane-topbox"></div>
                        <div className="left-pane-input-box">
                            <div className="event-info-box">
                                <h1>Start Climbing</h1>
                                <h3>July 14th 2018</h3>
                                <h4 className="location-text">Embassy Suites Tampa Downtown Convention Center</h4>
                                <h5>513 S Florida Ave, Tampa FL 33602</h5>
                            </div>


                        </div>
                        <div className="event-info-box">
                            <h3>Public Garage Parking avaliable at <p><h5>301 Channelside Dr, Tampa, FL 33602</h5></p></h3>
                            <div>
                                <a href="https://www.tampagov.net/parking/programs/garages-and-lots/south-regional-garage">Directions to Parking</a></div>
                            
        
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
                    <div className="right-pane1">
                        <div className="right-pane-header1">
                            <div>
                                <p>Registration Confirmation</p>
                                <br/>

                                <div>Confirmation Number:</div>
                                <div className="info">
                                    {this.props.confirmationNum}
                                <br />
                                </div>
                                <div>Attendee Information</div>
                                <div className="conf-text">
                                    Name:<span className="info2">{this.props.firstName} {this.props.lastName}</span>
                                    <br />
                                    <br/>
                                    Date:<span className="info2">July 14th 2018</span>
                                    <br />
                                    <br/>
                                    Time:<span className="info2">
                                    {this.props.time === '0900' ? 
                                   <span>9:00AM - 10:15AM</span>:
                                   <span></span>}
                                   {this.props.time === '1100' ? 
                                   <span>11:00AM - 12:15AM</span>:
                                   <span></span>
                                    }
                                    {this.props.time === '1300' ? 
                                   <span>1:00PM - 2:15PM</span>:
                                   <span></span>
                                    }
                                    
                                    
                                    
                                    
                                    
                                    
                                    </span>
                                </div>
                                <div>
                                    <button onClick={this.handlePrintScreen} className="printButton">Print Confirmation</button>
                                </div>
                            </div>
                        </div>


                    </div>


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
export default connect(mapStateToProps, { NewGuestCount, NewTime, NewFirstName, NewLastName, NewMiddleInitial, NewEmail, NewPhone, NewAge, NewLaw, NewTos })(Confirmation)

