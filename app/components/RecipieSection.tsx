import RecipeCard from "./RecipeCard";

export default function RecipeSection({ recipes }) {
  // if !searched then display recipe of the day
  // else iterate through array of data

  return (
    <section>
      <div className="wrap justyfy-evenly mt-3 flex flex-col md:flex-row">
        {/* {data.forums.map((card, index) => (
            <RecipeCard 
              key={index} 
              icon={card.icon} 
              title={card.title} 
            />
        ))} */}
        <RecipeCard />
      </div>
    </section>
  );
}
