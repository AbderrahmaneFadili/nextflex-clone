import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requests } from "../../api";
import { fetchNetflixOriginalsAction } from "../../store/actions";

function Banner() {
  const data = useSelector((state) => state.fetchNetflixOriginalsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNetflixOriginalsAction(requests.fetchNetflixOriginals));
  }, [dispatch]);

  const truncate = (str, number) => {
    return str?.length > number ? str.substr(0, number - 1) + "..." : str;
  };
  return (
    <div
      className="h-screen flex flex-col justify-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.result?.backdrop_path})`,
      }}
    >
      <div className="container p-9">
        {/* Banner content */}
        <div className="w-2/5 text-white">
          {/* Banner Title */}
          <h1 className="text-7xl mb-3">
            {data.result?.name ||
              data.result?.original_name ||
              data.result?.title}
          </h1>
          {/* Banner Buttons */}
          <div
            style={{ width: "60%" }}
            className="flex justify-between items-center  mb-5"
          >
            <button className="px-9 py-2 text-xl rounded-md bg-black capitalize hover:bg-gray-300 duration-300 hover:text-black">
              play
            </button>
            <button className="px-9 py-2 text-xl rounded-md bg-black capitalize hover:bg-gray-300 duration-300 hover:text-black">
              my list
            </button>
          </div>
          {/* Banner Description */}
          <h1 className="leading-normal text-lg">
            {truncate(data.result?.overview, 150)}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
