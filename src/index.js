import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
//components
import Home from './Home';
import Nav from './components/Nav/Nav'
import Pokedex from './components/Pokedex/Pokedex';
import SearchPoke from './components/SearchPoke/SearchPoke';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="apps">
        <Nav />
        <Switch>
          <Route path="/" exact     component={Home} />
          <Route path="/pokedex"    component={Pokedex}/>
          <Route path="/SearchPoke" component={SearchPoke}/>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
