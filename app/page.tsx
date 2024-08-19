"use client";
import NaviBar from "./components/NaviBar";
import Jumbotron from "./components/homePage/Jumbotron";
import Footer from "./components/Footer";
import RecipeSearch from "./components/homePage/RecipeSearch";

export default function Home() {
  const handleClick = () => {
    document.getElementById("search").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NaviBar />
      <Jumbotron onClick={handleClick} />
      <RecipeSearch />
      <Footer />
    </>
  );
}
