import React from "react";

const HeadlineCard = () => {
  return (
    <div className="w-full mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 bg-black">
      {/* {card} */}
      <div className="rounded-xl relative">
        {/* {overlay} */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sharwarma Special</p>
          <p className="px-2">Through 8/26</p>
          <button
            className="border-white bg-white text-black mx-2
          absolute bottom-4"
          >
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      {/* {card} */}
      <div className="rounded-xl relative">
        {/* {overlay} */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Recipe</p>
          <p className="px-2">Added Daily</p>
          <button
            className="border-white bg-white text-black mx-2
          absolute bottom-4"
          >
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/5836771/pexels-photo-5836771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      {/* {card} */}
      <div className="rounded-xl relative">
        {/* {overlay} */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">We Serve Pastas Too</p>
          <p className="px-2">Quiet Yummy</p>
          <button
            className="border-white bg-white text-black mx-2
          absolute bottom-4"
          >
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/8753672/pexels-photo-8753672.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeadlineCard;
