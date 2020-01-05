import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import ToDoList from './ToDoList/ToDoList.js'
import Navigation from './navigation'
import './App.css'

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <div style={{ backgroundColor: '#d6e4ff', height: '100vh'  }}>
                    <Navigation />
                    <div
                        style={{ height: '80vh', margin: 12 }}
                    >
                        <Route path="/ToDoList" component={ToDoList} />
                    </div>
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
    )
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
    )
}

function Topic({ match }) {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    )
}
