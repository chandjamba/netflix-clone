import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const img_base_url = "http://image.tmdb.org/t/p/";
const img_size = "original";

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

  return (
    <div className="main-container-1">
      <div className="heading-navbar">
        <h1 className="title">{movieInfo?.title}</h1>
        <div className="rating-popularity-container"> 
        <p className="movie-runtime"> {movieInfo?.runtime} min</p>
          <p className="rating"> ⭐{Math.floor(movieInfo?.vote_average)} /10</p>
          <p className="popularity"> 👍{Math.floor(movieInfo?.popularity)}</p>
        </div>
      </div>
      <div className="thumbnail-about-wrapper">
        <div className="img-box">
          <img
            className="image"
            src={`${img_base_url}/${img_size}/${movieInfo?.poster_path}`}
            alt=""
          />
        </div>
        <div className="about">
          <div className="release-date">
            Release Date: {movieInfo?.release_date}
          </div>
          <div className="origin-country">
            Origin country:&nbsp;
            {movieInfo?.production_countries.map((country) => {
              return (
                <p
                  className="country-name"
                  key={movieInfo?.production_countries.iso_3166_1}
                >
                  {" "}
                  {country.name}, &nbsp;
                </p>
              ); // (&nbsp;)  used to add space between each word.//
            })}
          </div>
          <div className="production-companies">
            Productions:&nbsp;
            {movieInfo?.production_companies.map((company) => {
              return (
                <p
                  className="company-names"
                  key={movieInfo?.production_companies?.id}
                >
                  {" "}
                  {company.name}, &nbsp;
                </p>
              ); // (&nbsp;)  used to add space between each word.//
            })}
          </div>
          <div className="spoken-languages">
            Languages:&nbsp;
            {movieInfo?.spoken_languages.map((language) => {
              return (
                <p
                  className="languages"
                  key={movieInfo?.spoken_languages?.name}
                >
                  {language.english_name},&nbsp;
                </p>
              );
            })}
          </div>
          <div className="tagline">Banner: {movieInfo?.tagline}</div>
          <div className="movie-link"> Visit:&nbsp;
          <a href="movie-homepage-link"> {movieInfo?.homepage}.</a>
          </div>
        </div>
      </div>
      <div className="genres">
        {movieInfo?.genres.map((genre) => {
          return (
            <p className="genre-types" key={movieInfo?.genres.id}>
              {" "}
              {genre.name}{" "}
            </p>
          );
        })}
      </div>
      <div className="overview">{movieInfo?.overview}</div>
      <div className="main-container-2">Scroll Down</div>
      <div className="main-container-3">
        <div className="reactJs">Its ReactJs ⚛️</div>
        </div>
    </div>
  );
}
