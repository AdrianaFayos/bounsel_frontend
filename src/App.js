import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';
import Records from './containers/Records/Records';
import Register from './containers/Register/Register';

function App() {
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

export default App;
