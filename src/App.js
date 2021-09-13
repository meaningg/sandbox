import Dashboard from "./pages/dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import PostPage from "./pages/postPage/PostPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/post" component={PostPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
