import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import MyNavBar from "./components/MyNavBar";
import MyTvShows from "./components/MyTvShows";
import TvShows from "./components/TvShows";
import Movies from "./components/Movies";
import RecentlyAdd from "./components/RecentlyAdd";
import MyList from "./components/MyList";
import NotFound from "./components/NotFound";
import { useState } from "react";
import MyFilmContainer from "./components/MyFilmContainer";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
      <BrowserRouter>
        <MyNavBar img="logo" fontIcon="fs-5" />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MyTvShows
                  title="Tv Shows"
                  titleTrending="Trending Film"
                  iconClass="me-3 fs-5"
                  onMovieSelect={setSelectedMovie}
                />
              </>
            }
          />
          <Route
            path="/Movies/:id"
            element={<Movies selectedMovie={selectedMovie} />}
          />
          <Route path="/Recently-Added" element={<RecentlyAdd />} />
          <Route path="/My-List" element={<MyList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
