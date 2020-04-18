import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar'
import Home from "./Home/Home"
import Footer from './Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
