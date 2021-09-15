import React from "react";
import { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { fetchMoviesAction } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, typeOfRequest }) {
  //state for Items Carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const changeActiveItem = (activeItemIndex) => setActiveIndex(activeItemIndex);

  const [movies, setMovies] = useState([]);

  //Redux
  const data = useSelector((state) => state.moviesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAction(fetchUrl, typeOfRequest));
  }, [dispatch]);

  useEffect(() => {
    switch (typeOfRequest) {
      case "fetchNetflixOriginals":
        setMovies(data.NetflixOriginals);
        break;
      case "fetchTrending":
        setMovies(data.Trending);
        break;
      case "fetchTopRated":
        setMovies(data.Trending);
        break;
      case "fetchActionMovies":
        setMovies(data.ActionMovies);
        break;
      case "fetchComedyMovies":
        setMovies(data.ComedyMovies);
        break;
      case "fetchHorrorMovies":
        setMovies(data.HorrorMovies);
        break;
      case "fetchRomanceMovies":
        setMovies(data.RomanceMovies);
        break;
      case "fetchDocumentaries":
        setMovies(data.RomanceMovies);
        break;
    }
  }, [typeOfRequest]);
  console.log(movies);
  return (
    <div className="text-white row">
      <div className="container p-9">
        <h2 className="text-4xl mb-6">{title}</h2>

        <ItemsCarousel
          // Placeholder configurations
          enablePlaceholder
          numberOfPlaceholderItems={5}
          minimumPlaceholderTime={1000}
          // Carousel configurations
          numberOfCards={7}
          gutter={20}
          showSlither={true}
          firstAndLastGutter={true}
          freeScrolling={false}
          // Active item configurations
          requestToChangeActive={changeActiveItem}
          activeItemIndex={activeIndex}
          activePosition={"center"}
          chevronWidth={24}
          rightChevron={">"}
          leftChevron={"<"}
          outsideChevron={false}
        >
          {movies &&
            movies.map((img, i) => (
              <img
                key={i.toString()}
                className="my-2"
                alt={`${i}`}
                src={`${imageBaseUrl}/${img?.poster_path}`}
              />
            ))}
        </ItemsCarousel>
      </div>
    </div>
  );
}

export default Row;
