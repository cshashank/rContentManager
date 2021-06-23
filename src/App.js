import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MarathiPoems from './components/MarathiPoems';
import EnglishPoems from './components/EnglishPoems';
import Navbar from './components/Navbar'

function App() {
  const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  );

  return (
    <main>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/marathi" component={MarathiPoems} />
        <Route path="/english" component={EnglishPoems} />
      </Switch>
    </main>  
  );
}

export default App;
  