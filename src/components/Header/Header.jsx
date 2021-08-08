import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/types';
import { useHistory } from 'react-router-dom';
import logo from './../../img/logo_web_upv-1.png'

const Header = (props) => {
    
    let history = useHistory();

    const logOut = () => {

        props.dispatch({type:LOGOUT});
        history.push("/")
    }

    if (props.credentials?.user.id){
        return(
            <div className="headerContainer">
                <div className="logo" onClick={() => history.push('/')}>
                    <img src={logo} alt="logo" width="80"/>
                </div>

                <div className="headerUser">
                    <div onClick={() => history.push('/profile')} className="link">
                       {props.credentials?.user.name}
                    </div>

                    <p>|</p>
                    <div className="link" onClick={() => logOut()}>LOGOUT</div>
                </div>
            </div>
        )
    } else {
        return (

            <div className="headerContainer">
                <div className="logo" onClick={() => history.push('/')}>
                    <img src={logo} alt="logo" width="80"/>
                </div>

                <div className="loginregister">
                    <div onClick={() => history.push('/login')} className="link">
                        LOGIN
                    </div>
                    <p>|</p>

                    <div onClick={() => history.push('/register')} className="link">
                        REGISTER
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({

    credentials:state.credentials

}))(Header);