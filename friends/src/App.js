import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import FriendsList from '../src/components/FriendsList';
import PrivateRoute from './PrivateRoute';

function App() {

  return (
    <Router>
      <div className="App">

        <h1 className="title">Friends</h1>
        <div>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/protected">Protected Page</Link>
          </div>
        </div>


        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />

      </div>
    </Router>
  );

}

export default App;
