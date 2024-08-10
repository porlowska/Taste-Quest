import RecipeCard from "./RecipeCard";

export default function RecipeSection({recipes, showResults}) {
  // if !searched then display recipe of the day
  // else iterate through array of data
  console.log(recipes)
  return (
    <section>

    {showResults?
      <div className="wrap justyfy-evenly mt-3 flex flex-col md:flex-row">
       {recipes.map((recipe, index) => (
          <RecipeCard 
            key={index}
            recipe={recipe} 
          />
      ))}
      </div>
    :
      <div className="flex flex-col items-center mb-16"> 
        <h2 className="font-kulim font-semibold text-4xl md:text-5xl p-6  md:p-10"> Recipie of the day!</h2>
            <RecipeCard recipe={recipes[0]} /> 
      </div>
    }

    </section>
  );
}
