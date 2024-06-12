import movies from "../movie";
import { useParams } from "react-router-dom";

const Trailer = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  console.log(id);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "240px",
      }}
    >
      <iframe
        width="640"
        height="360"
        src={movie.trailerLink}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p style={{ margin: "20px" }}>{movie.desc}</p>
    </div>
  );
};

export default Trailer;
