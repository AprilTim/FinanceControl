import React from "react";
import "./style.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from "./Components/Login";

export const App = () => {
    const [state, setState] = React.useState({});

    return (
        <Router>
            <Switch>
                <Route path={"/login"}>
                    <Login/>
                </Route>
            </Switch>
        </Router>
    )
}