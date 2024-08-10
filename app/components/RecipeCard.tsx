"use client";

import { Card, Button } from "flowbite-react";
import { HiHeart } from "react-icons/hi";

export default function RecipeCard({recipe}) {

  const fillColor='none'
  // const fillColor = !fav
  //   ? 'none'
  //   : fav= true
  //   ?'currentColour';

  function handleClick(){
    // add to hav change fill of the heart
  }

  let tags = [recipe.dishTypes, recipe.cuisines, recipe.diets, recipe.occasions].flat()

  return (
    <Card
      className="max-w-md "
      imgAlt={recipe.title}
      imgSrc={recipe.image}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {recipe.title}
        </h5>
      </a>
      
      <div className="flex justify-between">
        <div className="block my-auto">
        {tags.map((tag, index)=>(
          <span key={index} className="bg-green text-dark text-sm  me-2 px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300"># {tag}</span>
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

