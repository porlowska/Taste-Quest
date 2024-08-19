"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import NaviBar from "../components/NaviBar";
import Footer from "../components/Footer";
import data from "../api/endpoint-test";
import ReturnButton from "../components/recipePage/ReturnButton";
import RecipeDetails from "../components/recipePage/RecipeDetails";
import RecipeIngredients from "../components/recipePage/RecipeIngredients";
import RecipeInstructions from "../components/recipePage/RecipeInstructons";

// import { getRecipeData } from "../components/SearchBar";

export default function Home() {
  const [recipe, setRecipe] = useState({});

  let tag = [];

  useEffect(() => {
    const storedRecipe = localStorage.getItem("selectedRecipe");
    console.log(JSON.parse(storedRecipe));
    if (storedRecipe) {
      setRecipe(JSON.parse(storedRecipe));
      // tag = [
      //   recipe.dishTypes,
      //   recipe.cuisines,
      //   recipe.diets,
      //   recipe.occasions,
      // ].flat();
      console.log(recipe);
    }
  }, []);

  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <section className="">
      {/* <NaviBar />
      <ReturnButton onClick={handleClick} />
      <RecipeDetails details={recipe.details} tags={tags} />
      <div className="mb-5 flex flex-col md:flex-row">
        <RecipeIngredients ingredients={recipe.ingredients} />
        <img
          src={data.recipes[0].image}
          alt={data.recipes[0].title}
          className="mx-auto max-w-md flex-auto grow rounded-xl shadow-lg md:mr-10 lg:mr-20 lg:max-w-xl"
        />
      </div>
      <RecipeInstructions instructions={recipe.instructions} />
      <Footer /> */}
    </section>
  );
}
