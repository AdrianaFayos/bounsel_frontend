import React from 'react';
import Header from '../../components/Header/Header';
import './Records.css'
import { connect } from "react-redux";

const Records = (props) => {


    if(props.credentials?.user.id) {
        return(

            <div className="profileContainer">
          
                <Header/>
    
                <div className="userInfo">
                  <p>NAME : {props.credentials?.user.name} </p>
                  <p>LASTNAME : {props.credentials?.user.lastname} </p>
                  <p>EMAIL : {props.credentials?.user.email} </p>
                </div>
   
            </div>
        )
    } else {
          
        return (
          <div className="errorContainer">
            <div className="errorComponent">
                <div className="error1">Oops ...</div>
                <h1>It seems that you need to log in.</h1>
                <h2>Try to go to <a href="/">HOME PAGE</a>.</h2>

            </div>
          </div>  
        );


    }
}

export default connect((state) => ({
  credentials: state.credentials,
}))(Records);