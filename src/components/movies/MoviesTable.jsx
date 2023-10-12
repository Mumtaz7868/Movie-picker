import star from "../../assets/star.svg";

const MoviesTable = ({ moviesList, handleNavigation }) => {
  return (
    <ul className="absolute left-1/2 transform -translate-x-1/2 mt-10">
      {moviesList.map((item, i) => (
        <li
          className="grid grid-cols-[200px,200px,550px,1fr]  w-[1300px]  py-4 border-bottom"
          key={i}
        >
          <img className="w-36 h-32" src={item.image} alt="image" />
          <div>
            <p
              role="button"
              onClick={() => handleNavigation(item.id)}
              className="text-3xl font-medium"
            >
              {item.title}
            </p>
            <p className="text-3xl mt-16">{item.year}</p>
          </div>
          <div className="self-center justify-self-center ml-10">
            <p className="text-2xl font-medium">IMDb RATING</p>
            <div className="flex items-center">
              <img src={star} width={35} className="mt-1.5 mr-5" />
              <span className="text-2xl mt-2 font-bold">{`${item.imDbRating} / 10`}</span>
            </div>
          </div>
          <div className="self-center justify-self-center">
            <p className="text-2xl font-medium">Rank</p>
            <p className="text-2xl mt-2 font-bold">{item.rank}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MoviesTable;
