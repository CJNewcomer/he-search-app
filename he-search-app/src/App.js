import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from './Components/Search/index';
import Repo from './Components/Repo/index';


function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Search />
        </Route>
        <Route path="/repository/:repositoryId">
          <Repo />
        </Route>
        <Route path="*">

        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
