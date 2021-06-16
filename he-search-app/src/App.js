import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Search from './Components/Search/index';




function Example() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    fetch(
      "https://api.github.com/repos/tannerlinsley/react-query"
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

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
