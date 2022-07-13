import React from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";

function RenderCard({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name}></CardImg>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md m-1">
                    <h2>Featured</h2>
                </div>
            </div>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1 ">
                    <RenderCard item={props.promotion}></RenderCard>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.service}></RenderCard>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.member}></RenderCard>
                </div>
            </div>
        </div>
    );
}

export default Home;