import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './Records.css'
import { connect } from "react-redux";
import axios from 'axios';

const Records = (props) => {

    //hooks 
    const [ records, setRecords] = useState({
     startDate : "",
     endDate : ""
    });

    const [ foundRecords, setFoundRecords] = useState([]);

    useEffect(() => {
        
    },[]);

    useEffect(() => {
        searchRecords();
    });

    //Handlers
    const updateDates = (e) => {
      setRecords({ ...records, [e.target.name]: e.target.value });
    };

    const searchRecords = async () => {

      let body = {
        userId: props.credentials?.user.id,
        startDate: records.startDate,
        endDate : records.endDate,
      };
        
      console.log(body);

      let res = await axios.post('http://localhost:3006/recordsystem/bydate', body);
  
      setFoundRecords(res.data.results)
      
  } 

    if(props.credentials?.user.id) {
        return(

            <div className="recordContainer">
          
                <Header/>

                <div className="inputDates">
                  <p>FROM:</p>
                  <input type="date" title="startDate" name="startDate" onChange={updateDates} />
                  <p>TO:</p>
                  <input type="date" title="endDate" name="endDate" onChange={updateDates} />
                </div>
    
                <div className="allRecords">
                   {foundRecords.map((record, index) => (
           
                      <div key={index} className="recordFound">
                        <p>{record.startDate}</p>
                        <p>{record.endDate}</p>
                      </div>
                   ))}
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