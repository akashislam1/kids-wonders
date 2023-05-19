import React from "react";

const UpdateToyDetails = () => {
  return (
    <div className="w-full md:w-3/4 mx-auto">
      <h2 className="text-center font-bold text-4xl underline mt-5 mb-8">
        <span className="text-[#4acdd5] underline">Update</span> the Toy
        information
      </h2>
      <form className="space-y-4 w-full p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="text"
              name="price"
              defaultValue={50}
              required
              className="mt-1 px-3 py-1 block w-full border border-[#4acdd5] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4acdd5] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Available quantity
            </label>
            <input
              type="text"
              name="quantity"
              required
              defaultValue={20}
              className="mt-1 px-3 py-1 block w-full border border-[#4acdd5] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4acdd5] focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Details Description
          </label>
          <textarea
            name="description"
            rows="3"
            required
            defaultValue={"helo"}
            className="mt-1 block w-full p-4 border border-[#4acdd5] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4acdd5] focus:border-transparent"
          ></textarea>
        </div>

        <div className="modal-action">
          <label
            htmlFor="my-modal"
            className="font-bold text-white bg-[#4acdd5] text-center  rounded  hover:bg-white hover:text-[#4acdd5] border hover:border-[#4acdd5] duration-200 py-2 px-4  focus:outline-none focus:shadow-outline"
          >
            Confirm
          </label>
        </div>
      </form>
    </div>
  );
};

export default UpdateToyDetails;
