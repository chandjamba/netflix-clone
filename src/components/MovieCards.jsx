import { Link } from "react-router-dom";

const img_base_url = "http://image.tmdb.org/t/p/";
const img_size = "original";
export default function MovieCards({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="movie-content-box" key={movie?.id}>
        <img
          className="movie-thumbnail"
          src={`${img_base_url}/${img_size}/${movie?.poster_path}`}
          alt=""
        />
        <div className="movie-description-box">
          <h2 className="movie-title">{movie?.title}</h2>
          <p className="movie-release-date">
            Release date: {movie.release_date}
          </p>
        </div>
      </div>
    </Link>
  );
}
