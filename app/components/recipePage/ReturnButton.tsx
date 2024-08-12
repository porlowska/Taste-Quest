import { HiArrowLeft } from "react-icons/hi";

export default function ReturnButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mb-2 me-2 ml-20 mt-4 inline-flex rounded-full  bg-green px-3 py-1 text-sm text-dark dark:bg-gray-700 dark:text-gray-300"
    >
      <HiArrowLeft className="my-auto mr-1" /> return to search
    </button>
  );
}
