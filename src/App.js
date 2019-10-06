import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ToDoList from './ToDoList/ToDoList.js'
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ToDoList">ToDoList</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </div>

        <div>
          <Route exact path="/" component={Home} />
          <Route path="/topics" component={Topics} />
          <Route path="/ToDoList" component={ToDoList} />
        </div>
      </Router>
    )
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}
