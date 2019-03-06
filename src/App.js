import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'
import SearchPage from './components/SearchPage/SearchPage';
import Error from './components/Error/Error';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div>
      <header>
        <nav>
          <Link to={`/`} >Home</Link> |
          <Link to={`/search`} >Search</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/search' component={SearchPage} />
        <Route component={Error}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;
