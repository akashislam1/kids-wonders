import { useLoaderData } from "react-router-dom";
import ToyTable from "./ToyTable";
import { useState } from "react";

const AllToys = () => {
  const allToys = useLoaderData();
  const [seeAll, setSeeAll] = useState(false);

  return (
    <div className="mb-5">
      <h2 className="text-center font-bold text-4xl underline mt-5 mb-8">
        All <span className="text-[#4acdd5] underline">Toys</span>
      </h2>
      <div className="flex items-center justify-center mt-8 mb-5 md:mb-16">
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
      <div className="overflow-x-auto w-full md:w-3/4 mx-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Sl No.
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Seller
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Toy Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Sub-category
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Available Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                View Details
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {allToys
              ?.slice(0, seeAll ? allToys.length : 20)
              .map((toy, index) => (
                <ToyTable key={toy._id} toy={toy} index={index}></ToyTable>
              ))}
          </tbody>
        </table>
      </div>
      {!seeAll && allToys.length == "20" && (
        <div className="text-center mt-5">
          <button
            onClick={() => setSeeAll(true)}
            className="font-bold text-white bg-[#4acdd5] text-center  rounded  hover:bg-white hover:text-[#4acdd5] border hover:border-[#4acdd5] duration-200 py-2 px-4  focus:outline-none focus:shadow-outline "
          >
            See All Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default AllToys;
