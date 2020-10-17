import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from "./components/HeaderComponent";
import {Route, Switch} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import ProductsComponent from "./components/ProductsComponent";
import CategoryComponent from "./components/CategoryComponent";

export default function App() {
    return (
        <>
            <HeaderComponent/>
            <Switch>
                <Route exact path="/" component={HomeComponent}/>
                <Route path="/products" component={ProductsComponent}/>
                <Route path="/category" component={CategoryComponent}/>
            </Switch>
        </>
    )
}
