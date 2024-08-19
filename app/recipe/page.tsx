"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";
import NaviBar from "../components/NaviBar";
import Footer from "../components/Footer";
import ReturnButton from "../components/recipePage/ReturnButton";
import RecipeDetails from "../components/recipePage/RecipeDetails";
import RecipeIngredients from "../components/recipePage/RecipeIngredients";
import RecipeInstructions from "../components/recipePage/RecipeInstructons";

// import { getRecipeData } from "../components/SearchBar";

export default function Home() {
  const [recipe, setRecipe] = useState(null);

  let tag = [];

  useEffect(() => {
    const storedRecipe = localStorage.getItem("selectedRecipe");
    const selectedRecipe = JSON.parse(storedRecipe);
    console.log(selectedRecipe);
    setRecipe(selectedRecipe);
  }, []);

  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <section className="recipe">
      <NaviBar />
      <ReturnButton onClick={handleClick} />
      {recipe ? (
        <>
          <RecipeDetails details={recipe} />
          <div className="mb-5 flex flex-col md:flex-row">
            <RecipeIngredients ingredients={recipe.extendedIngredients} />
            <img
              src={recipe.image}
              alt={recipe.title}
              className="mx-auto max-w-md flex-auto grow rounded-xl shadow-lg md:mr-10 lg:mr-20 lg:max-w-xl"
            />
          </div>
          <RecipeInstructions
            instructions={recipe.analyzedInstructions[0].steps}
          />
        </>
      ) : (
        <div className="h-md text-center">
          <p>
            <Spinner size="xl" color="success" aria-label="loading" />
            Loading . . .
          </p>
        </div>
      )}

      <Footer />
    </section>
  );
}
