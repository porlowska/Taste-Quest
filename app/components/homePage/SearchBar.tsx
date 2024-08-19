"use client";

import { TextInput, Select, Button, Label } from "flowbite-react";
import { useState } from "react";
import { HiSearch, HiFilter } from "react-icons/hi";

export default function SearchBar({ onSearch, errorMessage }) {
  const [showFilters, setShowFilters] = useState(false);
  // const [searchBy, setSearchBy] = useState("recipe name");
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");
  const [intolerances, setIntolerances] = useState("");
  // const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    console.log("in handle submit");
    e.preventDefault();
    // setLoading(true);
    await onSearch(/*searchBy,*/ input, category, cuisine, diet, intolerances);
    // setLoading(false);
  };

  // useEffect for errors
  // check if we are fetching by recipe or ingredient (maybe add random later)
  // text input
  // category
  // cuisine
  // diet
  // intolerances

  // useEffect for errors

  return (
    <form
      className="m-4 mt-8 flex flex-col items-center"
      onSubmit={handleSubmit}
      id="search"
    >
      <div className="flex items-center justify-between">
        {/* Search input and buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
          <div className="flex items-center">
            <p>Search by recipe name: </p>
            {/* <Label
              htmlFor="searchBy"
              value="Search by:"
              className="whitespace-nowrap"
            />
            <Select
              id="searchBy"
              className="ml-2 min-w-[135px] flex-grow"
              onChange={(e) => setSearchBy(e.target.value)}
              required
            >
              <option>recipe name</option>
              <option>ingredients</option>
            </Select> */}
          </div>

          <TextInput
            id="search"
            type="text"
            icon={HiSearch}
            placeholder="Search input here"
            className="min-w-[190px]"
            onChange={(e) => setInput(e.target.value)}
            required
          />

          {/* TODO:
          -chenge hover and focus colour effects */}

          <div className="flex flex-row gap-5">
            <Button
              className={"bg-green text-dark hover:bg-green"}
              onClick={() => setShowFilters(!showFilters)}
            >
              Filters <HiFilter className="my-auto ml-2 text-dark" />
            </Button>
            <Button className="bg-dark text-light" type="submit">
              Search <HiSearch className="my-auto ml-2" />
            </Button>
            {/* <Button className="bg-lavender text-dark" type="submit">
              Random search <HiRefresh className="my-auto ml-2" />
            </Button> */}
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className={`mt-4 ${showFilters ? "block" : "hidden"}`}>
        <div className="flex flex-row flex-wrap gap-5 rounded-lg p-1">
          <Select
            className="min-w-[170px]"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">RECIPE CATEGORY</option>
            <option>main course</option>
            <option>side dish</option>
            <option>dessert</option>
            <option>appetizer</option>
            <option>salad</option>
            <option>bread</option>
            <option>breakfast</option>
            <option>soup</option>
            <option>beverage</option>
            <option>sauce</option>
            <option>drink</option>
          </Select>

          <Select
            className="min-w-[170px]"
            onChange={(e) => setCuisine(e.target.value)}
          >
            <option value="">CUISINE</option>
            <option>African</option>
            <option>Chinese</option>
            <option>Japanese</option>
            <option>Korean</option>
            <option>Vietnamese</option>
            <option>Thai</option>
            <option>Indian</option>
            <option>British</option>
            <option>French</option>
            <option>Italian</option>
            <option>Mexican</option>
            <option>Spanish</option>
            <option>Middle Eastern</option>
            <option>Jewish</option>
            <option>American</option>
            <option>Cajun</option>
            <option>Southern</option>
            <option>Greek</option>
            <option>German</option>
            <option>Nordic</option>
            <option>Eastern European</option>
            <option>Caribbean</option>
            <option>Latin American</option>
          </Select>

          <Select
            className="min-w-[170px]"
            onChange={(e) => setDiet(e.target.value)}
          >
            <option value="">DIET TYPE</option>
            <option>Pescetarian</option>
            <option>Lacto Vegetarian</option>
            <option>Ovo Vegetarian</option>
            <option>Vegetarian</option>
            <option>Vegan</option>
            <option>Paleo</option>
            <option>Primal</option>
          </Select>

          <Select
            className="min-w-[170px]"
            onChange={(e) => setIntolerances(e.target.value)}
          >
            <option value="">INTOLERANCES</option>
            <option>Dairy</option>
            <option>Egg</option>
            <option>Gluten</option>
            <option>Peanut</option>
            <option>Sesame</option>
            <option>Seafood</option>
            <option>Shellfish</option>
            <option>Soy</option>
            <option>Sulfite</option>
            <option>Tree Nut</option>
            <option>Wheat</option>
          </Select>
        </div>
      </div>
    </form>
  );
}
