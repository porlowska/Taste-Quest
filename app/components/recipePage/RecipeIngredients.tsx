export default function RecipeIngredients({ ingredients }) {
  return (
    <div className="md:pl-15 flex-1 pl-10 lg:pl-20">
      <h2 className="font-kulim text-3xl font-semibold">Ingredients:</h2>
      <ul className="list-disc p-2 md:p-3">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="text-md mb-1">
            {ingredient.original}
          </li>
        ))}
      </ul>
    </div>
  );
}
