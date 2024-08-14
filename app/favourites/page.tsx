import NaviBar from "../components/NaviBar";
import Jumbotron from "../components/homePage/Jumbotron";
import SearchBar from "../components/homePage/SearchBar";
import RecipeSection from "../components/homePage/RecipeSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="">
      <NaviBar />
      <SearchBar />
      <Jumbotron />
      <div>
        <h2>Searched recipies</h2>
        {/* iterrated */}
        <RecipeSection />
      </div>
      <Footer />
    </main>
  );
}
