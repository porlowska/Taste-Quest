"use client";

import NaviBar from "../components/NaviBar";
import Footer from "../components/Footer";
import { Button } from "flowbite-react";
import { HiHeart } from "react-icons/hi";
import data from "../api/endpoint-test";
// import { getRecipeData } from "../components/SearchBar";

export default function Home() {
  return (
    <section className="">
      <NaviBar />
      {/* <Return/> Return to search button compnent */}
      <button> return to search </button>
      {/* div witn img  */}
      <div>
        <img
          src={data.recipes[0].image}
          width={500}
          height={500}
          alt={data.recipes[0].title}
        />
      </div>
      {/* div with recipe */}
      <div>
        {/* {getRecipeData()} */}
        <h1>{data.recipes[0].title}</h1>
        <div>
          {/* tags */}

          <div className="flex items-center justify-between">
            {/* iterate through its categories if possible  */}
            {data.recipes[0].dishTypes.map((type) => {
              return (
                <span className="me-2 rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                  # {type}
                </span>
              );
            })}
            {/* add to favourites  */}
            <Button outline pill>
              <HiHeart className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <span className="me-2 rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
              # {`Ready in ${data.recipes[0].readyInMinutes} minutes`}
            </span>
            <span className="me-2 rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
              # {`Serves ${data.recipes[0].servings}`}
            </span>
          </div>
          <h2>Ingredients</h2>
          {data.recipes[0].extendedIngredients.map((item) => {
            return (
              <ul>
                <li>{item.name}</li>
              </ul>
            );
          })}
          {/* form data */}
          <h2>How to:</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data.recipes[0].instructions,
            }}
          ></div>
          {/* from data  */}
        </div>
      </div>
      <Footer />
    </section>
  );
}
