import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const allToys = useLoaderData();
  console.log(allToys);

  return (
    <div className="">
      <h2 className="text-center font-bold text-4xl underline mt-5 mb-8">
        All <span className="text-[#4acdd5] underline">Toys</span>
      </h2>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border border-[#4acdd5] rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#4acdd5] focus:border-transparent"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#4acdd5] text-white rounded-r-md  focus:outline-none focus:ring-2 focus:ring-[#4acdd5] focus:ring-opacity-50"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default AllToys;
