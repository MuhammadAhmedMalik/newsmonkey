import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/home"><News key="general" country="us" category="general"/></Route>
          <Route exact path="/business"><News key="business" country="us" category="business"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" country="us" category="entertainment"/></Route>
          <Route exact path="/health"><News key="health" country="us" category="health"/></Route>
          <Route exact path="/science"><News key="science" country="us" category="science"/></Route>
          <Route exact path="/sports"><News key="sports" country="us" category="sports"/></Route>
          <Route exact path="/technology"><News key="technology" country="us" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App
