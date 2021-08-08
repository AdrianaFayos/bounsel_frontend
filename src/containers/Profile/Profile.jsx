import React from 'react';
import Header from '../../components/Header/Header';
import './Profile.css'
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { LOGOUT } from "../../redux/types";


const Profile = (props) => {
  
  let history = useHistory();

  const logOut = () => {
    props.dispatch({ type: LOGOUT });
    
    history.push("/");;
};

    if(props.credentials?.user.id) {
        return(

            <div className="profileContainer">
          
                <Header/>
    
                <div className="userInfo">
                  <p>NAME : {props.credentials?.user.name} </p>
                  <p>LASTNAME : {props.credentials?.user.lastname} </p>
                  <p>EMAIL : {props.credentials?.user.email} </p>
                  <div className="buttonsProfile">
                    <div className="button" onClick={() => logOut()}>
                      RECORDS
                    </div>

                    <div className="button" onClick={() => logOut()}>
                      LOGOUT
                    </div>
                </div>
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
}))(Profile);