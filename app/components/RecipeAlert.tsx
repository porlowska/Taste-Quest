"use client";

import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export default function RecipeAlert() {
  return (
    <Alert color="failure" icon={HiInformationCircle}>
      <span className="font-medium">No Recipes found</span> We couldn't find any
      recipes that matches your search.
    </Alert>
  );
}
