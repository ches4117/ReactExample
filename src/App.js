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
