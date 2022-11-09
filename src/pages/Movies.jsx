import { Outlet } from "react-router-dom";
import MovieDetails from "./MovieDetails";

const Movies = () => {
  return (
    <main>
      <MovieDetails />
      <Outlet />
    </main>
  );
};

export default Movies;
