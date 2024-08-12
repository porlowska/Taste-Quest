import RecipeSection from "./RecipieSection";
import SearchBar from "./SearchBar";
import { useState } from "react";
import data from "../../api/endpoint-test";
// create .env file for keys!!

const RecipeSearch = () => {
  const [recipes, setRecipes] = useState(data.recipes);

  // handle search async function: takes a url and runs through if statements to select filters
  // const options = headers for key
  // try/catch for data response
  // try -> success -> await axios.get(url, options) setSearchState(true)
  // if data is returned, save data in state array (extract data here) setRecipes(response.recipes)

  // searchbar props: onSearch={handleSearch}, errorMessage={catch message}

  // RecipeSection

  // handle openRecipe
  //use router to open the page and come back to home page
  //if we use router do we need to fetch again the states??

  //handle addToFavourites

  const handleSearch = async (searchParams) => {
    console.log("in handle search");
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} errorMessage={"error"} />
      <RecipeSection recipes={recipes} showResults={false} />
    </div>
  );
};

export default RecipeSearch;
