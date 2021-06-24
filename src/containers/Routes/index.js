import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from '../App';
import Storyline from '../LoglineGenerator';
import Dashboard from '../Dashboard';

export default function Routes() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Script-assist/storyline">
            <Storyline />
          </Route>
          <Route path="/Script-assist/script">
            <App />
          </Route>
          <Route path="/Script-assist">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

