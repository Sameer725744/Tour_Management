import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import CommonSection from "../shared/CommonSection";

const NotFound = () => {
  return (
    <>
      <CommonSection title="Page not found" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <p>That page does not exist.</p>
              <Link to="/home">Go to Home</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
