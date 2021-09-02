import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import OrderPage from './components/OrderPage/OrderPage';

import './App.scss';

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Navbar />
        <Switch>
          <Route to='/' exact component={HomePage} />
          <Route to='/order_page' component={OrderPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
