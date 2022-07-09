import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

function About() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>About Us</h3>
                        <hr></hr>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 d-flex justify-content-center py-2">
                        <img src="assets/images/logo.jpg" className="rounded-circle bimg" style={{height:'250px'}}></img>
                    </div>
                    <div className="col-12 col-sm-6 pb-2 text-center">
                        <h2>Our Mission</h2>
                        <p>We asked ourselves what we wanted this company to stand for. We didn't want to just clean shoes. I wasn't even into shoes - but I was passionate about customer service.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm d-flex justify-content-center py-3" style={{ background: '#282424', color: 'floralwhite' }}>
                        <h1>Our Shop Location</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 py-2">
                        <h2>Tan Phu branch</h2>
                        <address>
                            <h6>100 Vuon Lai, Tan Phu District, HCM</h6>
                            <h6>Working Hours: 8AM-9PM</h6>
                            <h6><i className="fa fa-phone"></i> Phone: +84 12345678</h6>
                            <h6><i className="fa fa-envelope-o"></i> Email: <a href="mailto:ShooesVN@gmail.com">ShooesVN@gmail</a></h6>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 py-2">
                        <h2>Map to our shop</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.302246138668!2d106.6297747!3d10.788147100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eaa055e9ee5%3A0xb2eb03f7a3fd9ba0!2zxJAuIFbGsOG7nW4gTMOgaSwgVMOibiBQaMO6LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1657341663473!5m2!1svi!2s" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm d-flex justify-content-center py-3" style={{ background: '#282424', color: 'floralwhite' }}>
                        <h1>Meet our team</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;