import DOMPurify from "dompurify";

export default function RecipeInstructions({ instructions }) {
  const safeInstructions = DOMPurify.sanitize(instructions);

  return (
    <div className="md:pl-15 flex-1 py-5 pl-10 lg:pl-20">
      <h2 className="py-3 font-kulim text-3xl font-semibold">How to:</h2>
      <div
        id="instructions"
        className=""
        dangerouslySetInnerHTML={{
          __html: safeInstructions,
        }}
      ></div>
    </div>
  );
}
