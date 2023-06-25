const Contact = () => {
  return (
    <div className="">
      <div className="text-center font-bold text-4xl  mt-8">
        <span className="text-[#4acdd5] ">Contact</span>
        <span className="text-pink-500">.</span>
      </div>
      <div className="overflow-x-hidden overflow-y-hidden grid md:grid-cols-2 gap-5 md:p-10">
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="max-w-md mx-auto  rounded px-8 pt-6 pb-8"
        >
          <h4 className="font-bold text-xl text-[#4acdd5]">GET IN TOUCH</h4>
          <p className="font-semibold text-pink-500">
            We&apos;d Love to Hear From You, Lets Get In Touch!
          </p>
          <div>
            <div className="py-6">
              <form className="">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name <span className="text-pink-500">*</span>
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-[#4acdd5] focus:outline-pink-500 focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email <span className="text-pink-500">*</span>
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-[#4acdd5] focus:outline-pink-500 focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="comment"
                  >
                    Comment <span className="text-pink-500">*</span>
                  </label>
                  <textarea
                    className="appearance-none border border-[#4acdd5] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-pink-500 focus:shadow-outline"
                    id="comment"
                    rows="4"
                    required
                    placeholder="Enter your comment"
                  ></textarea>
                </div>

                <div className="flex items-center justify-center">
                  <button className=" text-white bg-[#4acdd5] text-center  rounded-md  hover:bg-pink-500 hover:text-white border  duration-200 py-2 px-4  focus:outline-none focus:shadow-outline ">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="rounded-xl mx-auto "
          src="https://i.ibb.co/VNxsxdm/contact.jpg"
          alt="contact.jpg"
        />
      </div>
    </div>
  );
};

export default Contact;
