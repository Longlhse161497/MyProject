import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Jumbotron, NavbarToggler, Nav, NavItem, Collapse, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input } from "reactstrap";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleModal2 = this.toggleModal2.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }
    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen })
    }
    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.value)
    }
    toggleModal2() {
        this.setState({ isModalOpen2: !this.state.isModalOpen2 })
    }
    handleRegister(event) {
        this.toggleModal2();
        alert("Your info are: Username: " + this.username.value + " Password: " + this.password.value)
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} centered>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="text" id="password" name="password" innerRef={(input) => this.password = input}></Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input}></Input> Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModalOpen2} toggle={this.toggleModal2} centered>
                    <ModalHeader toggle={this.toggleModal2}>Register</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleRegister}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="text" id="password" name="password" innerRef={(input) => this.password = input}></Input>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Register</Button>
                        </Form>
                    </ModalBody>
                </Modal>
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
                            <Nav className="ml-auto" navbar>
                                <Button outline onClick={this.toggleModal} className="btn1"><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                <Button outline onClick={this.toggleModal2} className="btn2"><span className="fa fa-sign-in fa-lg"></span> Register</Button>
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