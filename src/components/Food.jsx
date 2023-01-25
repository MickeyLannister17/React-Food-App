import React from "react";
import { useState } from "react";
import { data } from "./data/data";

const Food = () => {
  const [food, setFood] = useState(data);

  // filter type
  const filterType = (category) => {
    setFood(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  // filter price
  const filterPrice = (price) => {
    setFood(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div
      className="max-w-full m-auto px-4 py-12 bg-gradient-to-b from-black
    via-black to-gray-700"
    >
      <h1 className="text-white font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* {filter row} */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* {filter type} */}
        <div>
          <p className="font-bold text-gray-200">Filter Type</p>
          <div className="flex flex-wrap md:gap-2">
            <button
              onClick={() => setFood(data)}
              className="border-gray-100 text-gray-200 hover:bg-orange-600 
              hover:text-white "
            >
              All
            </button>
            <button
              onClick={() => filterType("pasta")}
              className="border-gray-100 text-gray-200 hover:bg-orange-600 
              hover:text-white "
            >
              Pasta
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="border-gray-100 text-gray-200 hover:bg-orange-600 
              hover:text-white "
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="border-gray-100 text-gray-200 hover:bg-orange-600 
              hover:text-white "
            >
              Chicken
            </button>
            <button
              onClick={() => filterType("sandwich")}
              className="border-gray-100 text-gray-100 hover:bg-orange-600 
              hover:text-white "
            >
              Sandiwich
            </button>
          </div>
        </div>
        {/* {filter price} */}
        <div>
          <p className="font-bold text-gray-200">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 border-gray-100 text-gray-100 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 border-gray-100 text-gray-100 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 border-gray-100 text-gray-100 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 border-gray-100 text-gray-100 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* {display grid} */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 ">
        {food.map(({ id, name, image, price }) => (
          <div
            key={id}
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold text-gray-200">{name}</p>
              <p>
                <span
                  className="bg-orange-500 text-white p-1
                rounded-full"
                >
                  {price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
