import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
