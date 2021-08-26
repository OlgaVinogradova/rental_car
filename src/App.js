import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainPages from './components/pages/MainPages/MainPages';
import Parking from './components/pages/Parking';
import Insurance from './components/pages/Insurance';
import Petrol from './components/pages/Petrol';
import Service from './components/pages/Service';
import Slider from './components/Slider/Slider';

import './App.scss';

function App() {
  return (
    <div className='wrapper'>
      <Router>

        <Navbar />
        <div className='wrap__row'>
          <MainPages />
          <Slider />
        </div>
        <Switch>
          <Route path='/parking' component={Parking} />
          <Route path='/insurance' component={Insurance} />
          <Route path='/petrol' component={Petrol} />
          <Route path='/service' component={Service} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
