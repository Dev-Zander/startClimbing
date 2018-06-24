import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import NG from '../styles/images/army_national_guard.png'
import Reach from '../styles/images/reaching.jpg'







class HomePage extends Component {




    render() {
        return (

            <div className="homePage">

                <div className="HomePage-container">

                    <div className="content-box">

                        <div>
                            <img src={Reach} alt="reaching" className="reachingPhoto" />
                        </div>
                        <div className="text-front-1">
                            Stop Digging
                        <br />
                            &
                        <br />
                            Start Climbing
                    </div>
                        <div className="front-text1">Join us on July 14th <br /> for a FREE and informative presentation by individuals who have successfully faced their fears and climbed out with the tools and skills provided by the Florida National Guard.</div>
                        <div className="front-text">
                            People struggle with fears of all types.
                        <br />
                            <br />Students could struggle with fears of paying for college or paying off large student loans.
                        <br />
                            <br />A family could be in fear over outstanding medical bills due to the ever changing health insurance industry.
                        <br />
                            <br />Loss of a job and list goes on and on but over time we find ourselves digging a hole deeper and deeper because of these fears, the Florida National Guard wants you to stop digging and start climbing out and they will provide you with a way to rewrite your educational and financial story.
                        </div>

                        <div>
                            <Link to="/registration"><button className="sign-up-button">Register</button></Link>
                        </div>

                        <div className="footer">
                            <span className="sponser-text">Sponsored By</span>
                            <br />
                            <img src={NG} alt="National Guard Logo" className="NG-IMG" />
                        </div>





                    </div>

                </div>


            </div>
        )
    }
}

export default HomePage
