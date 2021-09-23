import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import LocationPage from './components/OrderPage/LocationPage';
import Model from './components/OrderPage/Model';
import Options from './components/OrderPage/Options';

import './App.scss';


function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/location' exact component={LocationPage} />
          <Route path='/model' component={Model} />
          <Route path='/option' component={Options} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
