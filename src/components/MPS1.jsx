import { useState, useEffect } from "react";
import MovieCard from "./MovieCards";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODAxMzhhZjVlMzJhZmU5NWI0YWY0ZTExMTJiN2U1YSIsInN1YiI6IjY2NDA0OWY0ZDU4Y2JiNmU5OGMwZDQzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PsVjyB4XZER_xCYrpPl3u5XHkzTUO1h02KVpy8R39v4",
  },
};
export default function MPS1({ url, title }) {
  //using use-state to set the state of the movieThumbnail//

  const [movies, setMovies] = useState();

  //using useEffect to fetch the data from the url. //
  useEffect(() => {
    //fetching the data from the url. //
    async function fetchMovies() {
      const resp = await fetch(url, options);
      const jsonResp = await resp.json();

      setMovies(jsonResp?.results);
    }
    fetchMovies();
  }, [url]);
  console.log(movies, "movies");
  return (
    <div className="slider-1-container">
      <h1 className="slider-heading"> {title} </h1>
      <div className="movie-slider-1">
        {movies &&
          movies?.length > 0 &&
          movies?.map((movie) => (
            <MovieCard movie={movie} key={movie?.id} />
          ))}
      </div>
    </div>
  );
}
