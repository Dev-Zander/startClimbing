import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/styles.css';
import axios from 'axios';






class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            error:'Not Logged in or Authorized to View This Page.',
            guest:''
        }
    }

    componentWillMount(){
        axios.get('/api/getgueslist').then(
            res =>{
                if(res.data === false){
                    this.setState({
                        error:'You Are Not Authorized!'
                    })
                }else{
                    this.setState({
                        guest:  res.data.map((traveler, index)=>{
                            return(
                                <div key={index}>
                                <div>
                                    <div style={{
                                        display:'flex',
                                        flexDirection:'row',
                                        flexWrap:'nowrap',
                                        justifyContent:'center',
                                        alignItems:'center',
                                        alignContent:'center'
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
                        error:''
                    })
                }
            }
        )
    }
    render() {

        return (

            <div>
                 <a href={`${process.env.REACT_APP_API_LOGOUT}api/destroy`}><button>Logout</button></a>
                {/* <a href={'http://localhost:3210/api/destroy'}><button>Logout</button></a> */}
                <h1>This is the Control Panel</h1>
                <h2>{this.state.error}</h2>
                <h1>{this.state.guest}</h1>

                
                
            </div>

        
        )
    }
}

export default withRouter(HomePage)
