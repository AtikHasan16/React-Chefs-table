import React, { use } from "react";
import RecipeCard from "./RecipeCard";

const Recipe = ({ foodPromise }) => {
  const foodData = use(foodPromise);

  console.log(foodData);

  return (
    <div>
      <h1>Recipe Section</h1>
      {foodData.map((data) => {
        return <RecipeCard data={data}></RecipeCard>;
      })}
    </div>
  );
};

export default Recipe;
