import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <Container>
      <div className=" flex gap-4 items-center justify-between my-10">
        <div>
          <h1 className="text-4xl font-bold">Recipe Calories</h1>
        </div>
        <div>
          <ul className="flex md:gap-7 flex-col md:flex-row text-xl">
            <li>Home</li>
            <li>Recipe</li>
            <li>About</li>
            <li>Search</li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4">
          <input
            type="search"
            placeholder="🔍 Search"
            className="bg-gray-300 rounded-full p-3 hidden md:block"
          />
          <a href="#" className="rounded-full text-3xl bg-green-300 p-2">
            🤴
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
