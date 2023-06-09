import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import News from './components/News';
import Home from './components/Home';

class App extends Component {
  pageSize= 15
  render() {
    return (
      <div>
      <Router>            
        <Navbar />
        <Routes>
          <Route exact  path="/" element={< Home />} />
          <Route exact  path="/sports" element={<News key="sports" pageSize= {this.pageSize} country="in" category="sports"/>} />
          <Route exact  path="/business" element={<News key="business" pageSize= {this.pageSize} country="in" category="Business"/>} />
          <Route exact  path="/entertainment" element={<News key="entertainment" pageSize= {this.pageSize} country="in" category="entertainment"/>} />
          <Route exact  path="/general" element={<News key="general" pageSize= {this.pageSize} country="in" category="general"/>} />
          <Route exact  path="/health" element={<News key="health" pageSize= {this.pageSize} country="in" category="health"/>} />
          <Route exact  path="/science" element={<News key="science" pageSize= {this.pageSize} country="in" category="science"/>} />
          <Route exact  path="/technology" element={<News key="technology" pageSize= {this.pageSize} country="in" category="technology"/>} />
        </Routes>
      </Router>
      </div>
    );
  }
}

export default App;