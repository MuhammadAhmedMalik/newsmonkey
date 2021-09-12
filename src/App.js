import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {

  state = {
    progress: 0
  }

  setProgress= (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
          <LoadingBar color='#f11946' progress={this.state.progress}/>
        <NavBar/>
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} key="general" country="us" category="general"/></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} key="business" country="us" category="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" country="us" category="entertainment"/></Route>
          <Route exact path="/health"><News setProgress={this.setProgress} key="health" country="us" category="health"/></Route>
          <Route exact path="/science"><News setProgress={this.setProgress} key="science" country="us" category="science"/></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" country="us" category="sports"/></Route>
          <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" country="us" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App
