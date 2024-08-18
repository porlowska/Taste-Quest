import RecipeSection from "./RecipeSection";
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
    const options =
      searchBy === "recipe name"
        ? {
            method: "GET",
            url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
            params: {
              query: input,
              cuisine: cuisine,
              diet: diet,
              intolerances: intolerances,
              type: category,
              instructionsRequired: "true",
              addRecipeInformation: "true",
              number: "2",
            },
            headers: {
              "x-rapidapi-key":
                "06c5b738f4mshc8d3980a4797856p1bc186jsn6b1d2e762eba",
              "x-rapidapi-host":
                "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            },
          }
        : {
            method: "GET",
            url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
            params: {
              ingredients: input,
              number: "2",
            },
            headers: {
              "x-rapidapi-key":
                "06c5b738f4mshc8d3980a4797856p1bc186jsn6b1d2e762eba",
              "x-rapidapi-host":
                "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            },
          };

    try {
      const response = await axios.request(options);
      console.log("data: ", response.data);
      setShowResults(true);
      searchBy === "recipe name"
        ? setRecipes(response.data.results)
        : setRecipes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} errorMessage={"error"} />
      <RecipeSection recipes={recipes} showResults={showResults} />
    </div>
  );
};

export default RecipeSearch;
