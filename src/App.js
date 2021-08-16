import logo from './logo.svg';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ContentTabs from './components/ContentTabs';
import EnglishPoems from './components/EnglishPoems';
import Navbar from './components/Navbar'
import PoemContext from './store/poemContext';
import { UtilConstants } from './Utils/contentUtil';
import { useHistory } from 'react-router-dom';

function App(props) {
  const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  );

  const [pCtx, setPCtx] = useState({})
  const history = useHistory();
  const handleMarathi = () => {
    setPCtx({ 
      "query": UtilConstants().MARATHI_POEM_DB_URL,
      "language": "marathi"});
      history.push('/marathi')
  }
  const handleEnglish = () => {
    setPCtx({
      "query": UtilConstants().MARATHI_POEM_DB_URL,
      "language": "english"
    });
    history.push('/english')
  }
  return (
  <PoemContext.Provider value={{pCtx, setPCtx}}>
  <main>
    <Navbar></Navbar>
    <button type="button" onClick={handleMarathi}>
      Marathi lit
    </button>
    <button type="button" onClick={handleEnglish}>
      English lit
    </button>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/marathi" component={ContentTabs} />
      <Route path="/english" component={ContentTabs} />
    </Switch>
  </main>  
    </PoemContext.Provider >
  );
}

export default App;
