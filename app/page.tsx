"use client";
//import { DarkThemeToggle } from "flowbite-react";
//<DarkThemeToggle />
import NaviBar from "./components/NaviBar";
import Jumbotron from "./components/homePage/Jumbotron";
import Footer from "./components/Footer";
import RecipeSearch from "./components/homePage/RecipeSearch";

export default function Home() {
  //   const router = useRouter()

  //   function handleClick(){
  //     router.push('/search')
  //   }

  return (
    <main className="">
      <NaviBar />
      <Jumbotron />
      <RecipeSearch />
      <Footer />
    </main>
  );
}
