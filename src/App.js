import React, { useState } from 'react';
import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import './App.css';
import ContentTabs from './components/ContentTabs';
import { UtilConstants } from './Utils/contentUtil';
import { useHistory } from 'react-router-dom';
import { Button,ButtonGroup } from '@material-ui/core';
import { Provider } from "react-redux";
import { store } from './store/store'

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

  //const poem = useSelector((state)=>state.PoemState.value);

  //const dispatch = useDispatch()

  return (
  <Provider store={store}>
  <main>

        <Link to="/content1/marathi/poem">Marathi</Link>
        <Link to="/content1/english/poem">English</Link>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/content" component={ContentTabs} />
      <Route path="/marathi"> <ContentTabs plang="marathi"/> </Route>
      <Route path="/hindi"> <ContentTabs plang="hindi"/> </Route>
      <Route path="/english"> <ContentTabs plang="english"/> </Route>
      <Route path="/content1/:qLang/:cType/"> <ContentTabs /></Route>
    </Switch>
  </main>  
    </Provider>
  );
}

export default App;
