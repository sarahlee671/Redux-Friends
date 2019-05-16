import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">My Title</h1>
      </header>
      <Route path="/login" render={props => <LoginForm />} />
    </div>
  );
}

export default App;
