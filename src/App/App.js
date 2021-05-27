import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/About/About";

const App = () => {
  return (
    <Router>
      <div>
        <button className="pages-btn">
          <Link to="/">Home</Link>
        </button>
        <button className="pages-btn">
          <Link to="/about">What is this page about?</Link>
        </button>
      </div>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
