import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODAxMzhhZjVlMzJhZmU5NWI0YWY0ZTExMTJiN2U1YSIsInN1YiI6IjY2NDA0OWY0ZDU4Y2JiNmU5OGMwZDQzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PsVjyB4XZER_xCYrpPl3u5XHkzTUO1h02KVpy8R39v4",
  },
};

export default function MovieInfoCard() {
  const [movieInfo, setMovieInfo] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchedMovieInfo() {
      const resp = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        options
      );
      const data = await resp.json();
      console.log(data);
      setMovieInfo(data);
    }
    fetchedMovieInfo();
  }, [movieId]);

  return <div>{movieInfo?.title}</div>;
}
