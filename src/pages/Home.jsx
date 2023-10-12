import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import Header from "../components/Header";
import { fetchPopularMovies } from "../api/imdb";

const RAND_ID = parseInt(Math.random() * 100);

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetchPopularMovies()
      .then((resp) => {
        const data = resp.data.items;
        setMovies(data);
        setRandomMovie(data[RAND_ID]);
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  }, []);

  const shuffleMovie = () => {
    setRandomMovie(movies[getRandomId()]);
  };

  const getRandomId = () => parseInt(Math.random() * 100);

  const handleNavigation = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <Header isSelected={true}/>
      <Circles
        height="15%"
        width="15%"
        color="black"
        ariaLabel="circles-loading"
        wrapperStyle={{ position: "absolute", top: "5%", left: "50%" }}
        visible={isLoading}
      />
      <div className="relative mt-10">
        <div className="absolute w-[1500px] left-1/2 transform -translate-x-1/2 ">
          {randomMovie && (
            <>
              <button
                className="uppercase px-2 py-1 bg-blue-400 text-white"
                onClick={shuffleMovie}
              >
                PICK A RANDOM MOVIE
              </button>
              <div className="my-5">
                <span className="text-2xl mr-6 font-semibold">
                  {randomMovie?.title}
                </span>
                <span className="text-2xl">{randomMovie?.year}</span>
              </div>
              <img
                className="w-[500px] cursor-pointer"
                src={randomMovie?.image}
                alt="Popular Movie Image"
                onClick={() => handleNavigation(randomMovie.id)}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
