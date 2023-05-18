import React from "react";

const AddToy = () => {
  return (
    <div className="w-full md:w-3/4 mx-auto my-7 shadow-2xl rounded-md">
      <h2 className="text-center font-bold text-4xl underline mt-5 mb-8">
        Add <span className="text-[#4acdd5] underline">Toys</span>
      </h2>
      <div className="w-full md:w-3/4 mx-auto">
        <form className="space-y-4 w-full p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Toy Name
              </label>
              <input
                type="text"
                name="toyName"
                placeholder="Toy Name"
                required
                className="mt-1 px-3 py-1 block w-full border border-[#4acdd5] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4acdd5] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Seller Name
              </label>
              <input
                type="text"
                name="sellerName"
                placeholder="Seller Name"
                readOnly
                className="mt-1 px-3 py-1 block w-full border border-[#4acdd5] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4acdd5] focus:border-transparent"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Seller Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Seller Email"
                readOnly
                className="mt-1 px-3 py-1 block w-full border border-[#4acdd5] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4acdd5] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sub Category
              </label>
              <input
                type="text"
                name="subCategory"
                required
                className="mt-1 px-3 py-1 block w-full border border-[#4acdd5] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4acdd5] focus:border-transparent"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="$200"
                required
                className="mt-1 px-3 py-1 block w-full border border-[#4acdd5] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4acdd5] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <input
                type="text"
                name="rating"
                placeholder="5.0"
                required
                className="mt-1 px-3 py-1 block w-full border border-[#4acdd5] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4acdd5] focus:border-transparent"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Available quantity
              </label>
              <input
                type="text"
                name="quantity"
                required
                placeholder="0"
                className="mt-1 px-3 py-1 block w-full border border-[#4acdd5] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4acdd5] focus:border-transparent"
              />
            </div>
            {/* <div>
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <input
                type="text"
                name="rating"
                className="mt-1 block w-full border border-[#4acdd5] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4acdd5] focus:border-transparent"
              />
            </div> */}
          </div>
          <div>
            <textarea
              name="description"
              rows="3"
              required
              placeholder="Description"
              className="mt-1 block w-full p-4 border border-[#4acdd5] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4acdd5] focus:border-transparent"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="font-bold text-white bg-[#4acdd5] text-center  rounded  hover:bg-white hover:text-[#4acdd5] border hover:border-[#4acdd5] duration-200 py-2 px-4  focus:outline-none focus:shadow-outline "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
