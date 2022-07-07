import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Service from "./ServiceComponent";
import Booking from "./BookingComponent";
import About from "./AboutComponent";
import ServiceDetail from "./ServicesDetailComponent";
import {MEMBERS} from '../data/member';
import {PROMOTIONS} from '../data/promotion';
import {SERVICES} from '../data/services';

// const mapStateToProps = state => {
//     return{
//         members: state.members,
//         promotions: state.promotions,
//         services: state.services
//     }
// }

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            member: MEMBERS,
            promotion: PROMOTIONS,
            services: SERVICES
        };
    }
    render(){
        const ServicesWithId = ({match}) => {
            return(
                <ServiceDetail service={this.state.services.filter((service) => service.id === parseInt(match.params.serviceId,10))[0]}></ServiceDetail>
            );
        };
        return(
            <div>
                <Header></Header>
                <Switch>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/services" component={() => <Service services={this.state.services}></Service>}></Route>
                    <Route exact path="/booking" component={Booking}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/services/:serviceId" component={ServicesWithId}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
                <Footer></Footer> 
            </div>
        );
    }
}

export default Main; 