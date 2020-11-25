import React from 'react';
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import {HomePage} from './containers/HomePage';
import {Houses} from './containers/Houses';
import {CreatePage} from './containers/CreatePage';
import {AboutHouse} from './containers/AboutHouse';


function App() {
    return (<div className='App'>
            <Router>
                <Link to="/">Home</Link>
                <Link to="/houses">Houses Page</Link>
                <Link to="/create">Create Page</Link>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route exact path="/houses">
                        <Houses/>
                    </Route>
                    <Route path="/create">
                        <CreatePage/>
                    </Route>
                    <Route path="/houses/:houseId?">
                        <AboutHouse/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
