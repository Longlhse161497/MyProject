import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from "reactstrap";

class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            phonenum: '',
            email: '',
            service: 'Shoes washing',
            contactType: 'Phone',
            touched: {
                fullname: false,
                phonenum: false,
                email: false
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        console.log('String is: ' + JSON.stringify(this.state));
        if (this.state.contactType === 'Phone') {
            alert('Thank you for booking a service, a message will be send to your phone.');
        }
        else if (this.state.contactType === 'Email') {
            alert('Thank you for booking a service, an email will be send to you soon.');
        }
        event.preventDefault();
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    validate(fullname, phonenum, email) {
        const errors = {
            fullname: '',
            phonenum: '',
            email: ''
        };
        if (this.state.touched.fullname && fullname.length < 3) {
            errors.fullname = 'Name too short';
        }
        else if (this.state.touched.fullname && fullname.length > 10) {
            errors.fullname = 'Name too long';
        }
        const reg = /^\d+$/;
        if (this.state.touched.phonenum && !reg.test(phonenum)) {
            errors.phonenum = 'Phone number should only contains numbers';
        }
        if (this.state.touched.phonenum && phonenum.length < 10) {
            errors.phonenum = 'Invalid phone number';
        }
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (this.state.touched.email && !re.test(email)) {
            errors.email = 'Invalid email';
        }
        return errors;
    }
    render() {
        const errors = this.validate(this.state.fullname, this.state.phonenum, this.state.email);
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Booking</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row row-content bookrow">
                    <div className="col-12">
                        <h3>Book a service</h3>
                    </div>
                    <div className="col-12 col-sm-6">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="fullname" md={3}>Fullname</Label>
                                <Col md={9}>
                                    <Input type="text" id="fullname" name="fullname"
                                        placeholder="Fullname"
                                        value={this.state.fullname}
                                        valid={errors.fullname === ''}
                                        invalid={errors.fullname !== ''}
                                        onBlur={this.handleBlur('fullname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.fullname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="phonenum" md={3}>Phone number</Label>
                                <Col md={9}>
                                    <Input type="tel" id="phonenum" name="phonenum"
                                        placeholder="Phone number"
                                        value={this.state.phonenum}
                                        valid={errors.phonenum === ''}
                                        invalid={errors.phonenum !== ''}
                                        onBlur={this.handleBlur('phonenum')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.phonenum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={3}>Email</Label>
                                <Col md={9}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="service" md={3}>Service</Label>
                                <Col md={9}>
                                    <Input type="select" name="service"
                                        value={this.state.service}
                                        onChange={this.handleInputChange}>
                                        <option>Shoes washing</option>
                                        <option>Repairs</option>
                                        <option>Replacement & Enhenacements</option>
                                        <option>Refurbish</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 3 }}>
                                    <strong>How may we contact you ?</strong> {' '}
                                    <Input type="select" name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}>
                                        <option>Phone</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 4, offset: 3 }}>
                                    <Button type="submit" color="dark">
                                        Book the service
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                    <div className="col-12 col-sm-6">
                        <img src="assets/images/booking.jpg" alt="shop" className="bimg"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Booking;