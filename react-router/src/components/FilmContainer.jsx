import { Component } from "react";
import MyTrendingFilm from "./MyFilmContainer";
import MyWatchAgain from "./MyWatchAgain";
import MySeries from "./MySeries";

class FilmContainer extends Component {
  render() {
    return (
      <>
        <MyTrendingFilm title="Trending now" />
        <MyWatchAgain title="Watch it Again" />
        <MySeries title="Series" />
      </>
    );
  }
}

export default FilmContainer;
