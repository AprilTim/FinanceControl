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
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

export const App = () => {
    const [state, setState] = React.useState({});

    const getData = (attribute) => {
        const form = document.querySelector(`[data-submit=${attribute}]`);

        const data = {};
        const formArray = [...form];

        formArray.forEach(item => {
            if (item.name) {
                data[item.name] = item.value;
            }
        })
        return data
    }

    return (
        <Router>
            <Switch>
                <Route path={"/sign_in"}>
                    <SignIn getData={getData} state={state} setState={setState}/>
                </Route>
                <Route path={"/sign_up"}>
                    <SignUp getData={getData} state={state} setState={setState}/>
                </Route>
                <Route exact path={"/"}>
                    <Login getData={getData} state={state} setState={setState}/>
                </Route>
            </Switch>
        </Router>
    )
}