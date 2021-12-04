import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import ContentTabs from './components/ContentTabs';
import { UtilConstants } from './Utils/contentUtil';
import { useHistory } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';
import { Provider } from "react-redux";
import { store } from './store/store'
import { Drawer } from './components/Drawer';

function App(props) {
  const Home = () => (
    <div>
      <h2>Home</h2>
      <img alt="" src="/bgimg.jpg" width="1600px" height="600px" />
    </div>
  );


  return (
    <Provider store={store}>
      <main>
        <Switch>
          <Route path="/" exact >
              <Redirect to="/content/Marathi/Poem" />
          </Route>
          <Route path="/content1" component={ContentTabs} />
          <Route path="/marathi"> <ContentTabs plang="marathi" /> </Route>
          <Route path="/hindi"> <ContentTabs plang="hindi" /> </Route>
          <Route path="/english"> <ContentTabs plang="english" /> </Route>
          <Route path="/content/:qLang/:qFeature/"> <ContentTabs /></Route>
        </Switch>
      </main>
    </Provider>
  );
}

export default App;
