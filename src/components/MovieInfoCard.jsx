import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieInfoCard() {
  const [movieInfo, setMovieInfo] = useState();

  let { id } = useParams();
  
  
  useEffect(()=> {
    async function fetchedmovieinfo() {
      const resp = await fetch(url, options);
      const data = await resp.json();
      console.log(data);
      setMovieInfo(data.results);
    }
    fetchedmovieinfo();
  }, []);

    return <div>
      {movieInfo}
  </div>;
  }

