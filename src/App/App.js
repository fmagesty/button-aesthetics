import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/About/About";

const App = () => {
  return (
    <Router>
      <div>
        <button className="pages-btn">
          <Link to="/button-aesthetics">Home</Link>
        </button>
        <button className="pages-btn">
          <Link to="/about">What is this page about?</Link>
        </button>
      </div>
      <div>
        <Switch>
          <Route exact path="/button-aesthetics">
            <Homepage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
