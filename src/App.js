import Index from "./components/Index";
import NewEmployee from "./components/employees/new";
import NewProject from "./components/projects/new";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/employees/new" component={NewEmployee} />
        <Route exact path="/projects/new" component={NewProject} />
      </Switch>
    </Router>
  );
}

export default App;
