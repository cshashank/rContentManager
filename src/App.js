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
  const handleMarathi = () => {
    console.log("current tab value " + ctxTabValue);
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

  //const poem = useSelector((state)=>state.PoemState.value);

  //const dispatch = useDispatch()

  return (
  <Provider store={store}>
  <main>
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
        <Link to="/marathi">Marathi</Link>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/content" component={ContentTabs} />
      <Route path="/marathi"> <ContentTabs plang="marathi"/> </Route>
      <Route path="/hindi"> <ContentTabs plang="hindi"/> </Route>
      <Route path="/english"> <ContentTabs plang="english"/> </Route>
      <Route path="/content/:id" element={<ContentTabs plang="english"/>}/>
    </Switch>
  </main>  
    </Provider>
  );
}

export default App;
