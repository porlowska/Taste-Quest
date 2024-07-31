import NaviBar from "../components/NaviBar";
import Footer from "../components/Footer";
import { Button } from "flowbite-react";
import { HiHeart } from "react-icons/hi";
import Image from 'next/image'

export default function Home() {
  return (
    <section className="">
      <NaviBar />
      {/* <Return/> Return to search button compnent */}
      <button> return to seach </button>
      {/* div witn img  */}
        <div>
                <Image
            src="form data"
            width={500}
            height={500}
            alt="recipe name "
            />
        </div>
      {/* div with recipe */}
      <div >
        <h1>{"recipe name from data"}</h1>
        <div>
        {/* tags */}
        <div className="flex items-center justify-between">
          {/* iterate through its categories if possible  */}
          <span className="me-2 rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
            # {"Catergory"}
          </span>
          {/* add to favourites  */}
          <Button outline pill>
            <HiHeart className="h-6 w-6" />
          </Button>
        </div>
    
        <div className="flex items-center justify-between">
         
          <span className="me-2 rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
            # {"Ready in"}
          </span>
          <span className="me-2 rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
            # {"servings"}
          </span>
        </div>

        <h2>Ingredients</h2>
        {/* form data */}
        <h2>How to:</h2>
        {/* from data  */}
      </div>
      </div>
      <Footer />
    </section>
  );
}
