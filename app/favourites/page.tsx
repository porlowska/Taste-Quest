import NaviBar from "../components/NaviBar";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import RecipeSection from "../components/RecipieSection";
import Footer from "../components/Footer";

export default function Home() {
    
      return (
        <main className="">
          <NaviBar/>
          <SearchBar/>
          <Jumbotron/>
          <div>
            <h2>Searched recipies</h2>
            {/* iterrated */}
              <RecipeSection/> 
          </div>
          <Footer/>
        </main>
      );
    }
    