import React from 'react';
import { Switch, Route } from 'react-router';
import './index.css';
// Importing Components
import AppHeader from './components/header';

// Routes
import Home from './scenes/Home';

const Routes = () => (
    <div className="wrapper">
        <AppHeader/>
        <Switch>
            <Route exact path='' component={ Home }/>
        </Switch>
    </div>
);

export default Routes;