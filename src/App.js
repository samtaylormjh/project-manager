import Index from "./components/Index";
import New from "./components/New";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/" component={New} />
      </Switch>
    </Router>
  );
}

export default App;
