import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './App.css';
import {HomePage} from './containers/HomePage';
import {Houses} from './containers/Houses';


function App() {
    return (<div className='App'>
        <Link to="/">Home</Link>
        <Link to="/houses">Houses</Link>
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route path="/houses">
                <Houses/>
            </Route>
        </Switch>
    </div>
)}


export default App;
