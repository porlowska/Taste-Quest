export default function Jumbotron({ onClick }) {
  return (
    <section className="my-1 bg-light bg-cover bg-no-repeat">
      <div className="mx-auto flex max-w-screen-xl justify-center rounded-xl bg-[url('/jumbotron.jpg')] bg-cover bg-center px-4 py-28 text-center lg:py-56">
        <div className="flex max-w-xl flex-col rounded-lg bg-light bg-opacity-80 p-6 md:p-8">
          <h1 className="mb-4 mt-1 font-kulim text-4xl font-bold leading-none text-dark">
            Elevate Your Home Cooking
          </h1>
          <p className="mb-8 block font-kulim text-lg font-normal text-[#757192]">
            Delicious recipes at your fingertips.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <button
              onClick={onClick}
              className="inline-flex items-center justify-center rounded-lg bg-dark px-5 py-3 text-center text-base font-medium text-light hover:bg-lavender focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Search now!
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
