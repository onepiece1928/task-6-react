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

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Responsive Paragraph Counter"
              description="React Js Task 1"
              ghLink="https://github.com/KunjMaheshwari/Task-1-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Calculator"
              description="React Js Task 2"
              ghLink="https://github.com/KunjMaheshwari/Task-2-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Color Picker"
              description="React Js Task 3"
              ghLink="https://github.com/KunjMaheshwari/Task-3-React"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Dummy Data"
              description="React Js Task 4"
              ghLink="https://github.com/KunjMaheshwari/Task-4-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Age Calculator"
              description="React Js Task 5"
              ghLink="https://github.com/KunjMaheshwari/Task-5-React"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
