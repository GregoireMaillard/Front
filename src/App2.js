import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/page">Page</Link>
          </li>
          <li>
            <Link to="/page2">Page2</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/">
            <Page />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Page() {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Page</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>      

      {/* The Page page has its own <Switch> with more routes
          that build on the /Page URL path. You can think of the
          2nd <Route> here as an "index" page for all Page, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic/>
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}


function Page2() {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Page2</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>      

      {/* The Page page has its own <Switch> with more routes
          that build on the /Page URL path. You can think of the
          2nd <Route> here as an "index" page for all Page, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}