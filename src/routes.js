import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Products from "./Components/Product";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/Products" component={Products} />
                </Switch>
            </Router>
        )
    }
}
