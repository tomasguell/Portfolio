import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import valeo from "../../Assets/valeo.png"
import vic from "../../Assets/LogoSiteVic.png"
import logos from "../../Assets/reduced-manual-error-768x437.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mi Historia <strong className="purple">Laboral </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aca tienes un paso por mi experiencia laboral.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vic}
              isBlog={false}
              title="Sub Gerente General"
              startDate = "03/2018"
              endDate = 'Actualidad'
              empresa = 'Vic'
              description="Dirección de Planta Industrialy servicios (compras, Finanzas,
                Calidad, Ingeniería) , Generación nuevos negocios, Terminales Automtorices
                (OES) y mercados de reposición local o de exportación (IAM).Implementación
                Nuevos proyectos,"
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logos}
              isBlog={false}
              title="Socio Gerente"
              startDate = "03/2018"
              endDate = 'Actualidad'
              empresa = 'Logos'
              description="Estudios Logísticos, Talleres Kaizen, Proyectos de
              Certificación de Productos y sistema de Calidad, Talleres SMED, Estudios VSM"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={valeo}
              isBlog={false}
              title="Gerente Comercial"
              startDate = "11/2007"
              endDate = '02/2018'
              empresa = 'Valeo Iluminación'
              description="Portfolio de negocios Terminales Automtorices (OEM/OES) y
              mercados de reposición local o de exportación (IAM).Nuevos proyectos,
              adjudicación yl desarrollo de nuevos productos, business case, seguimiento de
              indicadores. Actualización niveles económicos y negociación con cada cliente."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={valeo}
              isBlog={false}
              title="Director de Proyectos/Jefe de Proyecto"
              startDate = "06/1999"
              endDate = '11/2007'
              empresa = 'Valeo Iluminación'
              description="Desarrollo del ciclo de vida del producto.:Viabilidad del
              negocio, fijación de precios objetivos, compras herramentales y componentes,
              desarrollo de la Ingeniería del producto
              -Responsable de la cartera de proyectos desde la formación de equipos, recursos
              presupuestarios, interfaz con clientes, proveedores Casa Matriz y las otras áreas
              de la empresa."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={valeo}
              isBlog={false}
              title="Jefe de Calidad de Planta"
              startDate = "06/1999"
              endDate = '11/2007'
              empresa = 'Valeo Iluminación'
              description="Gestión de auditoría de producto/proceso, implementación del
              control estadístico de proceso, gestión de Autocalidad de operadores y
              seguimiento del plan de control de los productos en la producción. A cargo del
              Laboratorio físico, Lab. metrología, Lab óptico y planta de auditores de línea e
              Ingeniero de calidad residente en el cliente."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
