import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

function MyFooter(props) {
  return (
    <Container fluid className="px-4">
      <div className="row justify-content-center mt-5">
        <Col xs={6}>
          <Row>
            <Col className="mb-2 text-secondary">
              <Facebook className="me-2" />
              <Instagram className="me-2" />
              <Twitter className="me-2" />
              <Youtube />
            </Col>
          </Row>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
            <Col>
              <Row>
                <Col className={props.footerClass}>
                  <p className="mb-0">
                    <a href="#">Audio and Subtitles</a>
                  </p>
                  <p className="mb-0">
                    <a href="#">Media Center</a>
                  </p>
                  <p className="mb-0">
                    <a href="#">Privacy</a>
                  </p>
                  <p className="mb-0">
                    <a href="#">Contact us</a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className={props.footerClass}>
                  <p className="mb-0">
                    <a href="#">Audio Description</a>
                  </p>
                  <p className="mb-0">
                    <a href="#">Investor Relations</a>
                  </p>
                  <p className="mb-0">
                    <a href="#">Legal Notices</a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className={props.footerClass}>
                  <p className="mb-0">
                    <a href="#">Help Center</a>
                  </p>
                  <p className="mb-0">
                    <a href="#">Jobs</a>
                  </p>
                  <p className="mb-0">
                    <a href="#">Cookie Preferences</a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className={props.footerClass}>
                  <p className="mb-0">
                    <a href="#">Gift Cards</a>
                  </p>
                  <p className="mb-0">
                    <a href="#">Terms of Use</a>
                  </p>
                  <p className="mb-0">
                    <a href="#">Corporate Information</a>
                  </p>
                </Col>
              </Row>
            </Col>
          </div>
          <Row>
            <div className="col -mb-2">
              <Button
                variant="dark"
                className="btn btn-sm footer-button rounded-0 mt-3"
              >
                Service Code
              </Button>
            </div>
          </Row>
          <Row>
            <div className="col mb2 my-3 copyright">
              © 1997-2023 Netflix, Inc.
            </div>
          </Row>
        </Col>
      </div>
    </Container>
  );
}

export default MyFooter;
