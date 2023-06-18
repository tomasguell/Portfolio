import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">Fabian Guell </span>
            de <span className="purple">Cordoba, Argentina.</span>
            <br /> Soy Sub Gerente General en Electromecánica VIC
            <br />
            Tengo 30 + años de experiencia en la industria automotriz en roles gerenciales.
            <br />
            <br />
            Aparte de trabajar, ¡otras actividades que me encanta hacer son las siguientes!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar al Ping Pong
            </li>
            <li className="about-activity">
              <ImPointRight /> Leer
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Amarse a uno mismo es el comienzo de un idilio que durara toda la vida"
          </p>
          <footer className="blockquote-footer">Oscar Wilde</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
