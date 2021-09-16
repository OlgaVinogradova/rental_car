import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import LocationPage from './components/LocationPage/LocationPage';

import './App.scss';
import Model from './components/Model/Model';

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/location' exact component={LocationPage} />
          <Route path='/model' component={Model} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
