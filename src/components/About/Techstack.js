import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";
import { SiRedis, SiApachekafka, SiPostgresql } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.java.com/en/"
          style={{ color: "#5382a1" }}
          target="_blank"
        >
          <DiJava />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://cplusplus.com/doc/tutorial/"
          style={{ color: "aqua" }}
          target="_blank"
        >
          <CgCPlusPlus />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.javascript.com/"
          style={{ color: "yellow" }}
          target="_blank"
        >
          <DiJavascript1 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://nodejs.org/"
          style={{ color: "green" }}
          target="_blank"
        >
          <DiNodejs />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://react.dev/"
          style={{ color: "#61dbfb" }}
          target="_blank"
        >
          <DiReact />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.mongodb.com/"
          style={{ color: "green" }}
          target="_blank"
        >
          <DiMongodb />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://git-scm.com/"
          style={{ color: "#F1502F" }}
          target="_blank"
        >
          <DiGit />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://redis.io/"
          style={{ color: "#A41E11" }}
          target="_blank"
        >
          <SiRedis />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://kafka.apache.org/"
          style={{ color: "white" }}
          target="_blank"
        >
          <SiApachekafka />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.postgresql.org/"
          style={{ color: "#008bb9" }}
          target="_blank"
        >
          <SiPostgresql />
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;
