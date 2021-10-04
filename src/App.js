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
import { Button,ButtonGroup } from '@material-ui/core';
import ExptComp from './components/ExptComp';


function App(props) {
  const Home = () => (
    <div>
      <h2>Home</h2>
      <img alt="" src="/bgimg.jpg" width="1600px" height="600px" />
    </div>
  );

  const [pCtx, setPCtx] = useState({})
  const history = useHistory();
  let ctxTabValue=0;
  const handleMarathi = () => {
    console.log("current tab value " + ctxTabValue);
    setPCtx({ 
      "query": UtilConstants().MARATHI_POEM_DB_URL,
      "language": "marathi",
      "tabValue": ctxTabValue});
      history.push('/marathi')
  }
  const handleEnglish = () => {
    setPCtx({
      "query": UtilConstants().MARATHI_POEM_DB_URL,
      "language": "english",
      "tabValue": ctxTabValue
    });
    history.push('/english')
  }
  const handleHindi = () => {
    setPCtx({
      "query": UtilConstants().MARATHI_POEM_DB_URL,
      "language": "hindi",
      "tabValue": ctxTabValue
    });
    history.push('/hindi')
  }
  const updateTabVal= val =>{
    ctxTabValue=val;
    console.log("tab value updated "+val)
  }
  return (
  <PoemContext.Provider value={{pCtx, setPCtx,updateTabVal}}>
  <main>
    {/* <Navbar></Navbar> */}
      <Button
        style={{
          borderRadius: 20,
            backgroundColor: "#CB0909",
          padding: "4px 20px",
          fontSize: "18px"
        }}
        variant="contained"
        onClick={handleMarathi}
      >
        Marathi
      </Button>
        <Button
          style={{
            borderRadius: 20,
            backgroundColor: "#21c6ae",
            padding: "4px 20px",
            fontSize: "18px"
          }}
          variant="contained"
          onClick={handleEnglish}
        >
          English
        </Button>
        <Button
          style={{
            borderRadius: 20,
            backgroundColor: "#4998DF",
            padding: "4px 20px",
            fontSize: "18px"
          }}
          variant="contained"
          onClick={handleHindi}
        >
          Hindi
        </Button>
        <ExptComp name="MySkcTest" />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/content" component={ContentTabs} />
      <Route path="/marathi" component={ContentTabs} />
      <Route path="/marathi1"> <ContentTabs plang="marathi"/> </Route>
      <Route path="/english" component={ContentTabs} />
      <Route path="/hindi" component={ContentTabs} />
    </Switch>
  </main>  
    </PoemContext.Provider >
  );
}

export default App;
