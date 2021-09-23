import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import LocationPage from './components/OrderPage/LocationPage';
import Model from './components/OrderPage/Model';
import Options from './components/OrderPage/Options';
import Subtotal from './components/OrderPage/Subtotal';

import './App.scss';
import Confirmation from './components/Content/ContentSubtotal/Confirmation';
import OrderBlank from './components/OrderPage/OrderBlank';



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
          <Route path='/subtotal' component={Subtotal} />
          <Route path='/confirmation' component={Confirmation} />
          <Route path='/orderBlank' component={OrderBlank} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
