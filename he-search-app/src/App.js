import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from './Components/Search/index';



function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search" exact={true}>
          <Search />
        </Route>
        <Route path="/repository/:repositoryId">

        </Route>
        <Route path="*">

        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
