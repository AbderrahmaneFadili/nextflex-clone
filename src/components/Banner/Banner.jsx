import React from "react";

function Banner() {
  return (
    <div
      className="h-screen flex flex-col justify-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d30c8e5eab9270008f9bd2a%2FCasa-de-Papel-3%2F960x0.jpg%3Ffit%3Dscale)`,
      }}
    >
      <div className="container p-9">
        {/* Banner content */}
        <div className="w-2/5 text-white">
          {/* Banner Title */}
          <h1 className="text-7xl mb-3">Movie Title</h1>
          {/* Banner Buttons */}
          <div className="flex justify-center items-center w-80 gap-4 mb-5">
            <button className="px-9 py-2 text-xl rounded-md bg-black capitalize hover:bg-gray-300 duration-300 hover:text-black">
              play
            </button>
            <button className="px-9 py-2 text-xl rounded-md bg-black capitalize hover:bg-gray-300 duration-300 hover:text-black">
              my list
            </button>
          </div>
          {/* Banner Description */}
          <h1 className="leading-normal text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, iste
            repellat eum voluptas sint laborum esse! Eos voluptatem laudantium,
            iste sequi in, distinctio quaerat iusto iure, deserunt eveniet velit
            cum.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
