import React from 'react';
import Header from '../../components/Header/Header';
import './Home.css'
import { connect } from "react-redux";

const Home = (props) => {


    if(props.credentials?.user.id){
        return(
            <div>
                <div className="homeContainer">

                </div>
                <div className="homeContainer1">
                    <Header />
                    <div className="homeContent">
                        <p className="text1">Hi {props.credentials?.user.name}!</p>
                    </div>
                </div>
            </div>
            
        )
    } else {

        return(
    
            <div>
                <div className="homeContainer">

                </div>
                <div className="homeContainer1">
                    <Header />
                    <div className="homeContent">
                        <p className="text1">Welcome to Bounsel Record System</p>
                    </div>
                </div>
            </div>
        )
    
    }    

}

export default connect((state) => ({
    credentials: state.credentials,
  }))(Home);