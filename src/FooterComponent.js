import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-4 align-self-center">
                            <div className="text-center">
                                <h5>Our Mission</h5>
                                <h6>We asked ourselves what we wanted this company to stand for. We didn't want to just clean shoes. I wasn't even into shoes - but I was passionate about customer service.</h6>
                            </div>
                        </div>
                        <div className="col-7 col-sm-5 offset-1">
                            <h5>Our address</h5>
                            <address>
                                100 Vuon Lai, Tan Phu District, HCM<br></br>
                                <i className="fa fa-envelope-o fa-lg"></i> : <a href="mailto:ShooesVN@gmail.com">ShooesVN@gmail.com</a>
                            </address>
                        </div>
                        <div className="col-4 col-sm-2">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="/home">Home</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/booking">Booking</a></li>
                                <li><a href="/about">About Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <div className="text-center">
                                <a className="btn btn-social-icon btn-google" href="https://www.google.com/"><i className="fa fa-google-plus"></i></a>
                                <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                                <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedln.com/"><i className="fa fa-linkedin"></i></a>
                                <a className="btn btn-social-icon btn-twitter" href="https://www.twitter.com/"><i className="fa fa-twitter"></i></a>
                                <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/"><i className="fa fa-youtube"></i></a>
                                <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <p>© Copyright 2021. Shooes.com.vn</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;