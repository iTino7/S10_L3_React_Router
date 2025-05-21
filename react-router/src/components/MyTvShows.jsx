import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";
import FilmContainer from "./FilmContainer";
import MyFooter from "./MyFooter";
import { useNavigate } from "react-router-dom";
import MySeries from "./MySeries";
import MyWatchAgain from "./MyWatchAgain";

function MyTvShows({ onMovieSelect, title, iconClass, titleTrending }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const resp = await fetch(
          "https://www.omdbapi.com/?s=berserk&full&apikey=a2ca179f"
        );

        if (resp.ok) {
          const movies = await resp.json();
          setMovies(movies.Search);
        } else {
          throw new Error("errore nella fetch");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  const handleClick = (movie) => {
    onMovieSelect(movie);
    navigate(`/Movies/${movie.imdbID}`);
  };

  return (
    <>
      <Container fluid className="px-4 d-flex align-items-center">
        <Row>
          <Col xs={12} className="d-flex ">
            <h2 className="text-white">{title}</h2>
            <Dropdown className="ms-3">
              <Dropdown.Toggle
                variant="dark"
                className="border-white"
                id="dropdown-basic"
              >
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <div className="ms-auto d-flex justify-content-md-end justify-content-start text-white">
          <Grid className={iconClass} />
          <Grid3x3 className={iconClass} />
        </div>
      </Container>
      <h4 className=" px-4 text-white mt-3">{titleTrending}</h4>
      <Container fluid className="pt-2">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {movies.slice(0, 6).map((item) => (
            <img
              key={item.imdbID}
              src={item.Poster}
              alt={item.Title}
              onClick={() => {
                handleClick(item);
              }}
              style={{
                cursor: "pointer",
                minWidth: "15%",
              }}
              className="my-2"
            />
          ))}
        </div>
      </Container>
      <MyWatchAgain />
      <MySeries />
      <MyFooter footerClass="footer-links" />
    </>
  );
}

export default MyTvShows;
