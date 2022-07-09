import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";

function RenderServices({ service }) {
    return (
        <>
            <div className="col-12 col-sm-6 pb-3">
                <img src={service.image} alt={service.name} className="bimg"></img>
            </div>
            <div className="col-12 col-sm-6 pb-3">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
            </div>
        </>
    );
}

class ServiceDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.service !== null) {
            const service = this.props.service;
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/services">Services</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{service.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{service.name}</h3>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="row">
                        <RenderServices service={service}></RenderServices>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default ServiceDetail;