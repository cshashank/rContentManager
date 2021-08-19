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
    let currentTabValue = pCtx.tabValue;
    console.log("current tab value "+currentTabValue);
    setPCtx({ 
      "query": UtilConstants().MARATHI_POEM_DB_URL,
      "language": "marathi",
      "tabValue":0});
      history.push('/content',{'tabValue':pCtx.tabValue})
  }
  const handleEnglish = () => {
    setPCtx({
      "query": UtilConstants().MARATHI_POEM_DB_URL,
      "language": "english",
      "tabValue": 0
    });
    history.push('/content')
  }
  const handleHindi = () => {
    setPCtx({
      "query": UtilConstants().MARATHI_POEM_DB_URL,
      "language": "hindi",
      "tabValue": 0
    });
    history.push('/content')
  }
  return (
  <PoemContext.Provider value={{pCtx, setPCtx}}>
  <main>
    {/* <Navbar></Navbar> */}
    <button type="button" onClick={handleMarathi}>
      Marathi lit
    </button>
    <button type="button" onClick={handleEnglish}>
      English lit
    </button>
    <button type="button" onClick={handleHindi}>
      Hindi lit
    </button>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/content" component={ContentTabs} />
    </Switch>
  </main>  
    </PoemContext.Provider >
  );
}

export default App;
