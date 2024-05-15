import { useEffect, useState } from "react";
const img_base_url = "http://image.tmdb.org/t/p/";
const img_size = "original";
const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
export default function MainPage() {
  //using use-state to set the state of the movieThumbnail//
  const [movies, setMovies] = useState();

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
  }, []);
  console.log(movies, "movies");
  return (
    <div>
      <h1>Movie Thumbnail</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "no wrap",
          overflowX: "scroll",
          gap: "8px",
        }}
      >
        {movies &&
          movies?.length > 0 &&
          movies?.map((movie) => (
            <div
              key={movie?.id}
              style={{ width: "400px", height: "400px", flex: 1 }}
            >
              <img
                style={{ width: "100%" }}
                src={`${img_base_url}/${img_size}/${movie?.poster_path}`}
                alt=""
              />
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
