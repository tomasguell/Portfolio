import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="d-flex flex-column">
        
        <Card.Title className="mt-auto">{props.title}</Card.Title>
        <Card.Subtitle className="mb-2  text-muted" >
          {props.startDate} - {props.endDate}
        </Card.Subtitle>

        <Card.Text  className="mt-auto" style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
         
        {"\n"}
        {"\n"}
        <Card.Footer className="mt-auto mb-2 text-muted" >
          {props.empresa}
        </Card.Footer>
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

       
      
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
