import React from "react";
import "./style.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// @ts-ignore
import Login from "./Components/Login";

export const App = () => {
    const [state, setState] = React.useState({});

    return (
        <Router>
            <Switch>
                <Route path={"/"}>
                    <Login state={state} setState={setState}/>
                </Route>
            </Switch>
        </Router>
    )
}