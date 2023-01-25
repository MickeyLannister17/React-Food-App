import React from "react";

const Hero = () => {
  return (
    <div
      className=" w-full m-auto p-4 bg-gradient-to-b from-black
    to-gray-800"
    >
      <div className="max-h-[500px] relative">
        {/* {overlay} */}
        <div
          className="absolute w-full h-full text-gray-200 max-h-[500px]
        bg-black/40 flex flex-col justify-center"
        >
          <h1
            className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          font-bold"
          >
            The <span className="text-orange-500">Sweetest</span>
          </h1>
          <h1
            className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          font-bold"
          >
            <span className="text-orange-500">Meals </span>Delivered
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover "
          src="https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
