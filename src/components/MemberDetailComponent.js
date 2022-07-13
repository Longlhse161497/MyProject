import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

function RenderMembers({ member }) {
    return (
        <>
            <div className="col-12 col-sm-6 pb-3 d-flex justify-content-center">
                <img src={member.image} alt={member.name} className="bimg"></img>
            </div>
            <div className="col-12 col-sm-6 pb-3">
                <h3>{member.name}</h3>
                <h5>{member.abbr}</h5>
                <p>{member.description}</p>
            </div>
        </>
    );
}

class MemberDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.member !== null) {
            const member = this.props.member;
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/about">About Us</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{member.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{member.name}</h3>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="row">
                        <RenderMembers member={member}></RenderMembers>
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

export default MemberDetail;