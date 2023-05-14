import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

class App extends Component {
  c = "ankit"
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize= {5} />
      </div>
    );
  }
}

export default App;