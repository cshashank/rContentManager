import logo from './logo.svg';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ContentTabs from './components/ContentTabs';
import EnglishPoems from './components/EnglishPoems';
import Navbar from './components/Navbar'
import PoemContext from './store/poemContext';
import { UtilConstants } from './Utils/contentUtil';

function App(props) {
  const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  );

  const [pCtx, setPCtx] = useState(UtilConstants().MARATHI_POEM_DB_URL)
    
  return (
  <PoemContext.Provider value={{pCtx, setPCtx}}>
  <main>
    <Navbar></Navbar>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/marathi" component={ContentTabs} />
      <Route path="/english" component={EnglishPoems} />
    </Switch>
  </main>  
    </PoemContext.Provider >
  );
}

export default App;
