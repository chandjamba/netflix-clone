import MPS1 from "./MPS1";
export default function MainPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <MPS1
        url={
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&without_genres=adventure"
        }
        title={"Adventure"}
      />
      <MPS1
        url={
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&without_genres=music"
        }
        title={"Music"}
      />
      <MPS1
        url={
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&without_genres=TV Movie"
        }
        title={"TV Movie"}
      />
      <MPS1
        url={
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&without_genres=horror"
        }
        title={"Horror"}
      />
      <MPS1
        url={
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&without_genres=documentary"
        }
        title={"Documentary"}
      />
    </div>
  );
}
