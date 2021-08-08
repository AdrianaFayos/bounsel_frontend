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
                        <p className="text1">SOY HOME CON USUARIO LOGIN</p>
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
                        <p className="text1">All the movies you want, and much more.</p>
                    </div>
                </div>
            </div>
        )
    
    }    

}

export default connect((state) => ({
    credentials: state.credentials,
  }))(Home);