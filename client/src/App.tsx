import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import TemplateProvider from "./templates/TemplateProvider";

function App() {
    return (
        <TemplateProvider>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/cart"} exact component={Cart}/>
            </Switch>
        </BrowserRouter>
        </TemplateProvider>

    );
}

export default App;
