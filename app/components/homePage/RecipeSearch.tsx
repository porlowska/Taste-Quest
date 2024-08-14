import RecipeSection from "./RecipieSection";
import SearchBar from "./SearchBar";
import { useState } from "react";
import data from "../../api/endpoint-test";
import axios from "axios";

// create .env file for keys!!

const RecipeSearch = () => {
  const [recipes, setRecipes] = useState(data.recipes);
  const [showResults, setShowResults] = useState(false);

  // handle search async function: takes a url and runs through if statements to select filters

  // if data is returned, save data in state array (extract data here) setRecipes(response.recipes)

  // searchbar props: onSearch={handleSearch}, errorMessage={catch message}

  // RecipeSection

  // handle openRecipe
  //use router to open the page and come back to home page
  //if we use router do we need to fetch again the states??

  //handle addToFavourites

  const handleSearch = async (
    searchBy,
    input,
    category,
    cuisine,
    diet,
    intolerances,
  ) => {
    const headers = {
      "x-rapidapi-key": "06c5b738f4mshc8d3980a4797856p1bc186jsn6b1d2e762eba",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    };

    const url =
      searchBy === "recipe name"
        ? "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch"
        : "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients";

    const options =
      searchBy === "recipe name"
        ? {
            method: "GET",
            url: url,
            params: {
              query: input,
              cuisine: cuisine,
              diet: diet,
              intolerances: intolerances,
              type: category,
              number: "1",
            },
            headers: headers,
          }
        : {
            method: "GET",
            url: url,
            params: {
              ingredients: `${input.replace(" ", ",")}`,
              number: "1",
            },
            headers: headers,
          };
    try {
      const response = await axios.request(options);
      setShowResults(true);
      setRecipes(response.data);
      console.log("data ---> ", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} errorMessage={"error"} />
      <RecipeSection recipes={recipes} showResults={false} />
    </div>
  );
};

export default RecipeSearch;
