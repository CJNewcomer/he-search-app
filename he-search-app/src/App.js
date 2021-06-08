// import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

import Search from './Components/Search/index';



function App() {

  // if enough time - add auth for users
  // const [loaded, setLoaded] = useState(false);
  // const dispatch = useDispatch();
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search" exact={true}>
          <Search />
        </Route>
        <Route path="/repo/:repoId">

        </Route>
        <Route path="*">

        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
