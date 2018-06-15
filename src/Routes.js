import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from "./components/Home"
import Catalog from "./components/Catalog"
import MyCourses from "./components/MyCourses"
import history from './History'
// import createBrowserHistory from 'history/createBrowserHistory'

// const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/catalog' component={Catalog} />
                    <Route exact path='/mycourses' component={MyCourses} />
                </div>
            </Router>
        )
    }
}

export default Routers;