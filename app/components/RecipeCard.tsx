"use client";

import { Card, Button } from "flowbite-react";
import { HiHeart } from "react-icons/hi";

export default function RecipeCard() {

  const fillColor='none'
  // const fillColor = !fav
  //   ? 'none'
  //   : fav= true
  //   ?'currentColour';

  function handleClick(){
    // add to hav change fill of the heart
  }

  return (
    <Card
      className="max-w-sm"
      imgAlt="recipie.name"
      imgSrc="/demo/demo-food.jpg"
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Demo Recipe
        </h5>
      </a>
      
      <div className="flex items-center justify-between">
        {/* iterate through its categories if possible  */}
        <span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"># {'Catergory'}</span>
        {/* add to favourites  */}

        <Button outline pill>
          <HiHeart className="h-6 w-6" />
        </Button>
      </div>
    </Card>
  );
}

