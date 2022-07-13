import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux/es/exports";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Service from "./ServiceComponent";
import Booking from "./BookingComponent";
import About from "./AboutComponent";
import ServiceDetail from "./ServicesDetailComponent";
import MemberDetail from "./MemberDetailComponent";
import {MEMBERS} from '../data/member';
import {PROMOTIONS} from '../data/promotion';
import {SERVICES} from '../data/services';

const mapStateToProps = state => {
    return{
        members: state.members,
        promotions: state.promotions,
        services: state.services
    }
}

class Main extends Component{
    constructor(props) {
        super(props);
        // this.state = { 
        //     member: MEMBERS,
        //     promotion: PROMOTIONS,
        //     services: SERVICES
        // };
    }
    render(){
        const ServicesWithId = ({match}) => {
            return(
                <ServiceDetail service={this.props.services.filter((service) => service.id === parseInt(match.params.serviceId,10))[0]}></ServiceDetail>
            );
        };
        const MemberWithId = ({match}) => {
            return(
                <MemberDetail member={this.props.members.filter((member) => member.id === parseInt(match.params.memberId,10))[0]}></MemberDetail>
            );
        };
        const HomePage = () => {
            return (
                <Home service={this.props.services.filter((service) => service.featured)[0]} 
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]} 
                    member={this.props.members.filter((member) => member.featured)[0]}></Home>
            );
        }
        return(
            <div>
                <Header></Header>
                <Switch>
                    <Route exact path="/home" component={HomePage}></Route>
                    <Route exact path="/services" component={() => <Service services={this.props.services}></Service>}></Route>
                    <Route exact path="/booking" component={Booking}></Route>
                    <Route exact path="/about" component={()=><About members={this.props.members}></About>}></Route>
                    <Route exact path="/services/:serviceId" component={ServicesWithId}></Route>
                    <Route exact path="/about/:memberId" component={MemberWithId}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
                <Footer></Footer> 
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));  