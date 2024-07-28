"use client";

import { ToggleSwitch, TextInput, Select, Button } from "flowbite-react";
import { useState } from "react";
import { HiSearch, HiRefresh } from "react-icons/hi";

export default function SearchBar() {
  // this state needs to be lifted tot hte maing page 
  const [switch1, setSwitch1] = useState(false);

  return (
    <div className="flex flex-row gap-4">
      <ToggleSwitch checked={switch1} label="Dish name or ingredient name" onChange={setSwitch1} />
      {/* dish name or ingredients toggle  */}
      <TextInput id="search" type="text" icon={HiSearch} placeholder="search by dish or ingredient" required />
      <Select id="categories" >
        <option>select categories</option>
        <option>brekfast</option>
        <option>Dinner</option>
        <option>Supper</option>
        <option>Side Dish</option>
      </Select>
      <Select id="countries" >
        <option>select country</option>
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </Select>
      <Button type="submit">Search <HiSearch/>
        </Button>
      <Button type="submit"> Random search <HiRefresh/> </Button>
    </div>
  );
  }
