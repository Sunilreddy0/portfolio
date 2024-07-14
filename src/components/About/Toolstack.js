import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiEclipseide,
  SiIntellijidea,
  SiVercel,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.microsoft.com/software-download/windows11"
          target="_blank"
        >
          <SiWindows />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://code.visualstudio.com/download" target="_blank">
          <SiVisualstudiocode />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.postman.com/"
          style={{ color: "#ef5b25" }}
          target="_blank"
        >
          <SiPostman />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://vercel.com/"
          style={{ color: "white" }}
          target="_blank"
        >
          <SiVercel />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://eclipseide.org/"
          style={{ color: "white" }}
          target="_blank"
        >
          <SiEclipseide />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.jetbrains.com/idea/"
          style={{ color: "white" }}
          target="_blank"
        >
          <SiIntellijidea />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
