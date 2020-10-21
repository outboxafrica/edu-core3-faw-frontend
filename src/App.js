import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Home from './components/HomePage/Home';
import About from './components/AboutUs/About';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
