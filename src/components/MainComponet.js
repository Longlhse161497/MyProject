import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "../FooterComponent";
import Home from "./HomeComponent";
import Service from "./ServiceComponent";
import Booking from "./BookingComponent";
import About from "./AboutComponent";

class Main extends Component{
    render(){
        return(
            <div>
                <Header></Header>
                <Switch>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/services" component={Service}></Route>
                    <Route exact path="/booking" component={Booking}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
                <Footer></Footer>
            </div>
        );
    }
}

export default Main;