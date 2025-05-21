import React, { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const MyFilmContainer = (props) => {
  // state = {
  //   movies: [],
  // };

  const [movies, setMovies] = useState([]);

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

  return (
    <>
      <h4 className=" px-4 text-white mt-3">{props.title}</h4>
      <Container fluid className="pt-2">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {movies.slice(0, 6).map((item) => (
            <img
              key={item.imdbID}
              src={item.Poster}
              alt={item.Title}
              style={{
                cursor: "pointer",
                minWidth: "15%",
              }}
              className="my-2"
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default MyFilmContainer;
