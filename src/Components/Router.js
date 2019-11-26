import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginPage from "./home/LoginContainer";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {LoginPage}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;