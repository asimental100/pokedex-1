
import React, { Component } from 'react'
// import PokemonList from './PokemonList.js'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import DetailPage from './Detail/DetailPage.js';
import SearchPage from './SearchPage/SearchPage.js'

export default class App extends Component {
  render() {
    return (
      <>
      <header className="header">
          <h1> 
            <img className="pokemon-title" src="https://fontmeme.com/permalink/200806/d85c9c51a4999a6b7f006f8bf39965aa.png" alt="pokemon-font" border="0" /> 
          </h1>
        </header>
        <Router>
          <nav className="nav">
            <li>
              <Link to="/detail">Detail</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </nav>
          <Switch>
            <Route
              path="/detail/:myPokemonId"
              exact
              render={(routerProps) => <DetailPage {...routerProps} />}
            />
            <Route
              path="/"
              exact
              render={(routerProps) => <SearchPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </>
    );
  }
}