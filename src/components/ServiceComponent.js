import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, CardText } from "reactstrap";
import { Card, CardImg, CardTitle } from "reactstrap";

function RenderServicesItem({ service, onClick }) {
    return (
        <Card className="border-0">
            <Link to={`/services/${service.id}`} style={{color: '#282424'}}>
                <CardImg src={service.image} alt={service.name}></CardImg>
                <CardTitle>{service.name}</CardTitle>
                <CardText>{service.description}</CardText>
            </Link>
        </Card>
    );
}

class Services extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const servicesMenu = this.props.services.map((service) => {
            return (
                <div className="col-12 col-md m-1">
                    <div key={service.id}>
                        <RenderServicesItem service={service}></RenderServicesItem>
                    </div>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Services</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Services</h3>
                        <hr></hr>
                    </div>
                </div>
                <div className="row">
                    {servicesMenu}
                </div>
            </div>
        );
    }
}

export default Services;