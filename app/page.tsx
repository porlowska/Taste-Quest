'use client'
//import { DarkThemeToggle } from "flowbite-react";
//<DarkThemeToggle />
//import { useRouter } from "next/router";
import NaviBar from "./components/NaviBar";
import Jumbotron from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import Footer from "./components/Footer";


export default function Home() {
//   const router = useRouter()

//   function handleClick(){
//     router.push('/search')
//   }

  return (
    <main className="">
      <NaviBar/>
      <Jumbotron/>
      <SearchBar/>
      <div>
        <h2>Recipie of the day</h2>
          <RecipeCard/>
      </div>
      <Footer/>
    </main>
  );
}
