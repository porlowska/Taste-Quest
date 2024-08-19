import NaviBar from "../components/NaviBar";
import RecipeSection from "../components/homePage/RecipeSection";
import Footer from "../components/Footer";

// Get from local sotrage
//populate recpeie cards
//if local sotrage is pupulated show results to true and get recipes

export default function Home() {
  return (
    <main className="">
      <NaviBar />
      {/* <RecipeSection recipes={recipes} showResults={showResults} /> */}
      <Footer />
    </main>
  );
}
