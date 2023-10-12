import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { fetchMovieTrailer, fetchMovieDetails } from "../api/imdb.js";
import leftArrow from "../assets/leftArrow.svg";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});
  const [genre, setGenre] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchMovieTrailer(id).then((resp) => setMovieData(resp.data));
    fetchMovieDetails(id).then((resp) => {
      setGenre(resp.data.genreList.map((g) => g.value));
      setLoading(false);
    });
  }, []);

  return (
    <div className="relative">
      <Link className="flex items-center" to="/most-popular">
        <img className="w-7 h-7" src={leftArrow} alt="left arrow" />
        <p className="text-2xl">Back</p>
      </Link>
      <Circles
        height="15%"
        width="15%"
        color="black"
        ariaLabel="circles-loading"
        wrapperStyle={{ position: "absolute", top: "45%", left: "50%" }}
        visible={isLoading}
      />
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-10">
        <span className="text-2xl mr-6 font-semibold">{movieData?.title}</span>
        <span className="text-2xl">{movieData?.year}</span>

        <iframe
          width="853"
          height="480"
          src={movieData?.linkEmbed}
          allow="encrypted-media; picture-in-picture"
          allowFullScreen
        />
        <div className="mt-5 grid grid-cols-[300px,555px]">
          <div>
            {genre.map((g, ind) => (
              <button disabled key={ind} className="border border=grey mr-3 p-1 mb-1">
                {g}
              </button>
            ))}
          </div>

          <p>{movieData?.videoDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
