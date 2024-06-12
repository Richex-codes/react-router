import Movies from "./Moviecard";

function movieList({movie}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
        padding: "20px",
        flexWrap: "wrap",
      }}
    >
      {movie.map((m) => {
        return (
          <Movies
            key={m.id}
            id={m.id}
            title={m.title}
            posterUrl={m.posterUrl}
            rating={m.rating}
          />
          
        );
      })}
    </div>
  );
  
}

export default movieList;
