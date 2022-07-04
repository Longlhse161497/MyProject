import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Jumbotron } from "reactstrap";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen })
    }
    render() {
        return (
            <div>
                <Navbar className="navbar-dark" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                        <NavbarBrand className="mr-auto" href="/"><img src="assets/images/logo.jpg" className="rounded-circle" height="30" alt="logo"></img></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/services"><span className="fa fa-wrench fa-lg"></span> Services</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/booking"><span className="fa fa-book fa-lg"></span> Booking</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about"><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-2">
                                <img className="rounded-circle img-fluid" src="assets/images/logo.jpg" height="100" alt="logo"></img>
                            </div>
                            <div className="col-12 col-sm-10">
                                <h3>Surprisingly cheap and freeship</h3>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;