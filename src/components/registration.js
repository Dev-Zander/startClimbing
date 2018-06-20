import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import Map from './gmaps'




class Registration extends Component {
    render() {
        return (

            <div className="main">

                <div className="main-container">

                    <div className="left-pane">
                        <div className="left-pane-topbox"></div>
                        <div className="left-pane-input-box">
                            <div className="event-info-box">
                                <h1>Name of Event</h1>
                                <h3>July 14th 2018</h3>
                                <h4 className="location-text">Embassy Suites Tampa Downtown Convention Center</h4>
                                <h5>513 S Florida Ave, Tampa FL 33602</h5>
                            </div>
                            <div>
                                <div className="number-guest-text">
                                    How many additional guests will you be bringing?
                                 </div>
                                <select className="num-guest">
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                            </div>
                            <div>
                                <div className="time-text">
                                    Please select desired time.
                    </div>
                                <select className="time-select">
                                    <option>Choose Time</option>
                                    <option> 9:00AM - 10:15AM</option>
                                    <option>11:00AM - 12:15PM</option>
                                    <option> 1:00PM -   2:15PM</option>
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
                        <div className="right-pane-header">

                            <p>Please complete form to register.</p>

                        </div>
                        <input placeholder="First Name" className="input-firstname" />
                        <input placeholder="Last Name" className="input-lastname" />
                        <input placeholder="M.I." maxlength="1" className="input-middle" />
                        <input placeholder="Email Address" className="input-email" />
                        <input type="number" class="noscroll" placeholder="Phone Number" maxlength="10" className="input-phonenumber" />
                        <div className="age-check-text">
                            Are you between the ages of 17 - 34?
                <select className="select-age">
                                <option>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="violation-check-text">
                            Any Major Law Violations?
                <select className="select-age">
                                <option>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="violation-check-text">
                            <input className="tos-validate" type="checkbox"/>
                        <div className="tos-text">I acknowledge that I have read and agree with terms of service.</div>
                        </div>
                        <div className="right-buttons">
                           <Link to="/homepage"> <button className="dark-button">Back</button></Link>
                            <button className="light-button">Confirm</button>
                        </div>
                    </div>
                    <div className="bottom-pane"></div>

                </div>


            </div>
        )
    }
}

export default Registration

