//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import Newscomponent from './Component/Newscomponent';
//import Newsitems from './Component/Newsitems';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Newscomponent key="general" categories="general" />} />
          <Route path="/Sports" element={<Newscomponent key="sports" categories="sport" />} />
          <Route path="/Technology" element={<Newscomponent key="technology" categories="technology" />} />
          <Route path="/Science" element={<Newscomponent key="science" categories="science" />} />
          <Route path="/Entertainment" element={<Newscomponent key="entertainment" categories="entertainment" />} />

        </Routes>
      </Router>


    )
  }
}

 //export default App;



