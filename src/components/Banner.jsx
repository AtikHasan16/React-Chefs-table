import React from "react";
import Container from "./Container";
import assets from "../assets/pexels-daniela-elena-tentis-118658-691114.jpg";
const Banner = () => {
  return (
    <Container>
      <div
        className="h-[]  bg-cover bg-center text-center text-white rounded-3xl"
        style={{ backgroundImage: `url(${assets})` }}
      >
        <div className="bg-gradient-to-t from-black to-transparent p-30 rounded-3xl">
          <h1 className="text-5xl font-bold pb-6">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="text-lg">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>
          <div className="flex justify-center items-center gap-5 py-10">
            <button className="button-style text-black hover:text-white bg-green-300   hover:bg-transparent">
              Explore Now{" "}
            </button>
            <button className="hover:text-black hover:bg-green-300 button-style">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
