import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <div>
      <Router>            
        <Navbar />
          <Route path="/sports"><News pageSize= {5} country="in" category="sports"/></Route>
          <Route path="/business"><News pageSize= {5} country="in" category="Business"/></Route>
          <Route path="/environment"><News pageSize= {5} country="in" category="environment"/></Route>
          <Route path="/gernal"><News pageSize= {5} country="in" category="gernal"/></Route>
          <Route path="/health"><News pageSize= {5} country="in" category="health"/></Route>
          <Route path="/science"><News pageSize= {5} country="in" category="science"/></Route>
          <Route path="/technology"><News pageSize= {5} country="in" category="technology"/></Route>
      </Router>
      </div>
    );
  }
}

export default App;