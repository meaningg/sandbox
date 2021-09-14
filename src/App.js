import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostPage from "./pages/postPage/PostPage";
import DemoPage from "./pages/demoPage/DemoPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/post" component={PostPage} />
        <Route exact path="/demo" component={DemoPage} />
      </Switch>
    </Router>
  );
}

export default App;
