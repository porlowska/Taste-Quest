import RecipeCard from "./RecipeCard";

export default function RecipeSection({ recipes, showResults }) {
  // if !searched then display recipe of the day
  // else iterate through array of data
  console.log(recipes);
  return (
    <section>
      {showResults ? (
        <div className="wrap justyfy-evenly mt-3 flex flex-col md:flex-row">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="mb-16 flex flex-col items-center">
          <h2 className="p-6 font-kulim text-4xl font-semibold md:p-10  md:text-5xl">
            {" "}
            Recipie of the day!
          </h2>
          <RecipeCard recipe={recipes[0]} />
        </div>
      )}
    </section>
  );
}
