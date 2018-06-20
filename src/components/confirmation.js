import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../styles/styles.css';
import Map from './gmaps'




class Confirmation extends Component {
    render() {
        return (

            <div className="main">

                <div className="main-container">

                    <div className="left-pane1">
                        <div className="left-pane-topbox"></div>
                        <div className="left-pane-input-box">
                            <div className="event-info-box">
                                <h1>Name of Event</h1>
                                <h3>July 14th 2018</h3>
                                <h4 className="location-text">Embassy Suites Tampa Downtown Convention Center</h4>
                                <h5>513 S Florida Ave, Tampa FL 33602</h5>
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
                    <div className="right-pane1">
                        <div className="right-pane-header1">
                            <div>
                                <p>Registration Confirmation</p>
                                <br/>

                                <div>Confirmation Number:</div>
                                <div className="info">
                                    4343059
                                <br />
                                </div>
                                <div>Attendee Information</div>
                                <div className="conf-text">
                                    Name:<span className="info2">  John Smith </span>
                                    <br />
                                    <br/>
                                    Date:<span className="info2">July 14th 2018</span>
                                    <br />
                                    <br/>
                                    Time:<span className="info2">9:00AM - 10:15AM</span>
                                </div>
                                <div>
                                    <button className="printButton">Print Confirmation</button>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>


            </div>
        )
    }
}

export default Confirmation

