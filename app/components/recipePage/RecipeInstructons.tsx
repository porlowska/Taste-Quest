import DOMPurify from "dompurify";

export default function RecipeInstructions({ instructions }) {
  console.log(instructions);

  return (
    <div className="md:pl-15 flex-1 py-5 pl-10 lg:pl-20">
      <h2 className="py-3 font-kulim text-3xl font-semibold">How to:</h2>
      <ol id="instructions" className="list-decimal p-5">
        {instructions.map((step, index) => (
          <li key={index} className="pb-1">
            {step.step}
          </li>
        ))}
      </ol>
    </div>
  );
}
