import moment from 'moment';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';
import Records from './containers/Records/Records';
import Register from './containers/Register/Register';

function App (props) {

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {

    if (props.credentials?.user.id){
      const start = moment().format("YYYY-MM-DD HH:mm:ss");
      setStartDate(start);
    }

  }, []);

  useEffect(() => {
  });


  window.onunload = async function () {

    if (props.credentials?.user.id){
      const end = moment().format("YYYY-MM-DD HH:mm:ss");
      setEndDate(end);
  
      let body = {
        userId: props.credentials?.user.id,
        startDate: startDate,
        endDate : endDate,
      };
  
      await axios.post('http://localhost:3006/recordsystem', body);
  }
}

  return (
    <div className="App">
      <BrowserRouter>
      
      {/* <Header /> */}
        
        <Switch>
        
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/profile" exact component={Profile}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/records" exact component={Records}/>

        </Switch>
        
        
      </BrowserRouter>
    </div>
  );
}

export default connect((state) => ({

  credentials:state.credentials

}))(App);
