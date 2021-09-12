import './App.css';
import React, {useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar color='#f11946' progress={progress}/>
      <NavBar/>
      <Switch>
        <Route exact path="/"><News setProgress={setProgress} key="general" country="us" category="general"/></Route>
        <Route exact path="/business"><News setProgress={setProgress} key="business" country="us" category="business"/></Route>
        <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" country="us" category="entertainment"/></Route>
        <Route exact path="/health"><News setProgress={setProgress} key="health" country="us" category="health"/></Route>
        <Route exact path="/science"><News setProgress={setProgress} key="science" country="us" category="science"/></Route>
        <Route exact path="/sports"><News setProgress={setProgress} key="sports" country="us" category="sports"/></Route>
        <Route exact path="/technology"><News setProgress={setProgress} key="technology" country="us" category="technology"/></Route>
      </Switch>
      </Router>
    </div>
  )
}

export default App
