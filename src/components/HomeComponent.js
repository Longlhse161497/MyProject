import React from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, CarouselItem } from "reactstrap";
import Carousel from "better-react-carousel";

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
            <div className="row d-flex justify-content-center">
                <Carousel loop mobileBreakpoint={100} autoplay={2000}>
                    <Carousel.Item>
                        <img width="100%" src={props.promotion.image} alt={props.promotion.name} style={{height:"90%"}}></img>
                        <h4 className="carousel-text">{props.promotion.name}</h4>
                        <p className="carousel-text d-none d-md-block">{props.promotion.description}</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src={props.service.image} alt={props.service.name} style={{height:"90%"}}></img>
                        <h4 className="carousel-text">{props.service.name}</h4>
                        <p className="carousel-text d-none d-md-block">{props.service.description}</p>
                    </Carousel.Item>
                </Carousel>
            </div>
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