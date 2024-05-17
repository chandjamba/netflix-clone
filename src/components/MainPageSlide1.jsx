import { useState, useEffect } from "react";

const img_base_url = "http://image.tmdb.org/t/p/";
const img_size = "original";
const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";


export default function MainPageSlide1() {
    
    const [movies, setMovies] = useState();
//using use-state to set the state of the movieThumbnail//

  //using useEffect to fetch the data from the url. //
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODAxMzhhZjVlMzJhZmU5NWI0YWY0ZTExMTJiN2U1YSIsInN1YiI6IjY2NDA0OWY0ZDU4Y2JiNmU5OGMwZDQzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PsVjyB4XZER_xCYrpPl3u5XHkzTUO1h02KVpy8R39v4",
      },
    };
    //fetching the data from the url. //
    async function fetchMovies() {
      const response = await fetch(url, options);
      const data = await response.json();
      setMovies(data?.results);
      console.log(data);
    }
    fetchMovies();
  }, [])
  console.log(movies, "movies");

  return (
    <div className="slider-1-container">
      <h1 className="slider-heading"> Recently Added</h1>
      <div className="movie-slider-1">
        {movies &&
          movies?.length > 0 &&
          movies?.map((movie) => (
            <div className="movie-content-box"
              key={movie?.id}
            >
              <img
              className="movie-thumbnail"
                src={`${img_base_url}/${img_size}/${movie?.poster_path}`}
                alt=""
              />
              <div className="movie-description-box">
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-release-date">Realease date: {movie.release_date}</p>
              </div>
            </div>
             
             ))}
      </div>
    </div>
  );

}