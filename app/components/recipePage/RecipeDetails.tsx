import { HiHeart } from "react-icons/hi";

export default function RecipeDetails({ details, tags }) {
  return (
    <div className="px-10 pb-5">
      <h1 className="font-kulim text-4xl font-bold sm:text-6xl">
        {details[0]}
      </h1>
      {/* tags */}
      <div className="flex-start flex">
        <div className="m-1 my-auto block">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="mr-2 rounded-full bg-green px-3 py-1 text-sm text-dark dark:bg-gray-700 dark:text-gray-300"
            >
              # {tag}
            </span>
          ))}
        </div>
        {/* add to favourites */}
        <button>
          <HiHeart className="h-8 w-8 md:h-10 md:w-10" />
        </button>
      </div>

      <div className="m-1 my-auto mt-3 block">
        <span className="mr-2 rounded-full bg-lavender px-3 py-1 text-sm text-dark dark:bg-gray-700 dark:text-gray-300">
          {`Ready in ${details[2]} minutes`}
        </span>
        <span className="mr-2 rounded-full bg-lavender px-3 py-1 text-sm text-dark dark:bg-gray-700 dark:text-gray-300">
          {`Serves ${details[3]}`}
        </span>
      </div>
    </div>
  );
}
