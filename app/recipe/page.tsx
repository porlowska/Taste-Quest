"use client";

import NaviBar from "../components/NaviBar";
import Footer from "../components/Footer";
import data from "../api/endpoint-test";
import ReturnButton from "../components/recipePage/ReturnButton";
import RecipeDetails from "../components/recipePage/RecipeDetails";
import RecipeIngredients from "../components/recipePage/RecipeIngredients";
import RecipeInstructions from "../components/recipePage/RecipeInstructons";

// import { getRecipeData } from "../components/SearchBar";

export default function Home() {
  let recipe = data.recipes[0];
  let details = [
    recipe.title,
    recipe.image,
    recipe.readyInMinutes,
    recipe.servings,
  ];
  let ingredients = recipe.extendedIngredients; //array of ingrediednts
  let instructions = recipe.instructions;
  let tags = [
    recipe.dishTypes,
    recipe.cuisines,
    recipe.diets,
    recipe.occasions,
  ].flat();

  const handleClick = (e) => {};

  return (
    <section className="">
      <NaviBar />
      <ReturnButton onClick={handleClick} />
      <RecipeDetails details={details} tags={tags} />
      <div className="mb-5 flex flex-col md:flex-row">
        <RecipeIngredients ingredients={ingredients} />
        <img
          src={data.recipes[0].image}
          alt={data.recipes[0].title}
          className="mx-auto max-w-md flex-auto grow rounded-xl shadow-lg md:mr-10 lg:mr-20 lg:max-w-xl"
        />
      </div>
      <RecipeInstructions instructions={instructions} />
      <Footer />
    </section>
  );
}
