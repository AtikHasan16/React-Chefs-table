import React, { Suspense } from "react";
import "./App.css";
import Recipe from "./components/Recipe";
import Navbar from "./components/navbar";
import Banner from "./components/Banner";

export default function App() {
  const foodDataPromise = async () => {
    const foodDataPromise = await fetch("/public/food.json");
    return foodDataPromise.json();
  };
  const foodPromise = foodDataPromise();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h1>Food data is loading...</h1>}>
        <Recipe foodPromise={foodPromise}></Recipe>
      </Suspense>
    </>
  );
}
