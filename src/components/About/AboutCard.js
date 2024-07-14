import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Sutari Sunil Reddy </span>
            from <span className="purple"> Berhampur, Odisha, India.</span>
            <br />I am currently employed as a{" "}
            <span className="purple">Software Developer </span> at National
            Payments Corporation of India (NPCI).
            <br />I have completed Integrated Post Graduation in{" "}
            <span className="purple">Advanced FullStack Development </span> at
            IIIT Hyderabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphics Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(25, 189, 255)" }}>
            "A user interface is like a joke. If you have to explain it, it's
            not that good."{" "}
          </p>
          <footer className="blockquote-footer">Sunil Reddy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
