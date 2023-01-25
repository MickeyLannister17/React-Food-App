import React from "react";
import { categories } from "./data/data";

const Category = () => {
  return (
    <div
      className="max-w-full px-4 mx-auto py-12 bg-gradient-to-b from-gray-700 via-black
    to-black"
    >
      <h1 className="text-white font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* {category} */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map(({ id, name, image }) => (
          <div
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
            key={id}
          >
            <h2 className="font-bold sm:text-xl">{name}</h2>
            <img src={image} alt={name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
