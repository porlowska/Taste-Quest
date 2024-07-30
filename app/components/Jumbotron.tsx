export default function Jumbotron() {
  return (
    <section className="bg-white bg-no-repeat">
      <div className="mx-auto flex max-w-screen-xl justify-center bg-[url('/jumbotron.jpg')] bg-center px-4 py-24 text-center bg-blend-multiply lg:py-56">
        <div className="flex max-w-lg flex-col items-center justify-center rounded-lg bg-white bg-opacity-75 p-4">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl">
            Elevate Your Home Cooking
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-700 sm:px-16 md:w-[200px] lg:px-48 lg:text-xl">
            Delicious recipes at your fingertips.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-gray-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
