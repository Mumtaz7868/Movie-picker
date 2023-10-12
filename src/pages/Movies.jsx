import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import Header from "../components/Header";
import { fetchPopularMovies } from "../api/imdb";
import MoviesTable from "../components/movies/MoviesTable";
import { useNavigate } from "react-router-dom";


const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    fetchPopularMovies()
      .then((resp) => {
        setLoading(false);
        setMoviesList(resp.data.items);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleNavigation = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="relative">
      <Header />
      <Circles
        height="15%"
        width="15%"
        color="black"
        ariaLabel="circles-loading"
        wrapperStyle={{ position: "absolute", top: "45%", left: "50%" }}
        visible={isLoading}
      />
      <MoviesTable moviesList={moviesList} handleNavigation={handleNavigation} />
    </div>
  );
};

export default Movies;
