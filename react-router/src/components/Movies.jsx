import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Movies({ selectedMovie }) {
  const params = useParams();
  console.log("params:", params);

  return (
    <Container fluid>
      <Row>
        <Col className=" d-flex flex-column align-items-center justify-content-center">
          <h3 className="text-white">{selectedMovie.Title}</h3>
          <img
            src={selectedMovie.Poster}
            width={300}            
            alt={selectedMovie.Title}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Movies;
