import { useState } from "react";
import RecipeCard from "./RecipeCard";
import RecipeAlert from "../RecipeAlert";

export default function RecipeSection({ recipes, isSearched }) {
  // let allRecipes;

  // if (!isSearched && localStorage.length === 0) {
  //   setShowResults(false);
  //   allRecipes = recipes;
  // }
  // // if (!isSearched && localStorage.length !== 0) {
  // //   setShowResults(true);
  // //   allRecipes; //all data from local sotrage
  // //}
  // if (isSearched) {
  //   setShowResults(true);
  //   allRecipes = recipes;
  //   //set local stroage
  // }

  // if isSearched is true, set local storage set show recipes to true
  // if is searched is false but local sotrage os full set show recieps to true
  // is is search is false and local stroage is empty set sjow recipes to falsce

  return (
    <section>
      {isSearched ? (
        <div className="mt-3 flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center ">
          {recipes.length === 0 ? (
            <RecipeAlert />
          ) : (
            <>
              {recipes.map((recipe, index) => (
                <RecipeCard key={index} recipeDetails={recipe} />
              ))}
            </>
          )}
        </div>
      ) : (
        <div className="mb-16 flex flex-col items-center">
          <h2 className="p-6 font-kulim text-4xl font-semibold  md:p-10 md:text-5xl">
            Recipe of the day!
          </h2>
          <RecipeCard recipeDetails={recipes[0]} />
        </div>
      )}
    </section>
  );
}
