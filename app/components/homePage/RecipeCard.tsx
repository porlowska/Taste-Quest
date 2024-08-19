"use client";

import { Card, Button } from "flowbite-react";
import { HiHeart } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RecipeCard({ recipeDetails }) {
  const fillColor = "none";
  // const fillColor = !fav
  //   ? 'none'
  //   : fav= true
  //   ?'currentColour';

  function handleFavClick() {
    // add to hav change fill of the heart
  }

  const router = useRouter();

  const handleRecipeClick = () => {
    localStorage.setItem("selectedRecipe", JSON.stringify(recipeDetails));
    router.push("/recipe");
  };

  let tags = [
    recipeDetails.dishTypes,
    recipeDetails.cuisines,
    recipeDetails.diets,
    recipeDetails.occasions,
  ].flat();

  return (
    <Card
      className="max-w-md "
      imgAlt={recipeDetails.title}
      imgSrc={recipeDetails.image}
      onClick={handleRecipeClick}
    >
      <div>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {recipeDetails.title}
        </h5>
      </div>

      <div className="flex justify-between">
        <div className="my-auto block">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="me-2 rounded-full bg-green  px-3 py-1 text-sm text-dark dark:bg-gray-700 dark:text-gray-300"
            >
              # {tag}
            </span>
          ))}
        </div>

        {/* add to favourites  */}

        <Button outline pill>
          <HiHeart className="h-6 w-6" />
        </Button>
      </div>
    </Card>
  );
}
