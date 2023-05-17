import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../shared/SocialLogin";

const SignUp = () => {
  const [passShow, setPassShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // handle sign up
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const userPhotoUrl = e.target.userphoto.value;
    console.log(username, email, password, userPhotoUrl);
    // create user
    createUser(email, password)
      .then((result) => {
        const signedUser = result.user;
        // update user profile
        updateUserProfile(signedUser, username, userPhotoUrl)
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
        setUser(signedUser);
        navigate("/login");
        e.target.reset();
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });

    // password validation
    if (password.length < 6) {
      return setError("at least 6 characters required");
    }
  };

  return (
    <div className="w-full md:w-5/6 mx-auto">
      <h2 className="text-center text-2xl font-bold my-5">Sign up</h2>

      <div className="w-full max-w-xs mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
              <span className="text-red-600 font-extrabold"> *</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="username"
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              User Email
              <span className="text-red-600 font-extrabold"> *</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="useremail"
              placeholder="Email address"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
              <span className="text-red-600 font-extrabold"> *</span>
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setPassword(e.target.value)}
                type={passShow ? "text" : "password"}
                placeholder="Password"
                name="password"
                required
              />
              <div
                onClick={() => setPassShow(!passShow)}
                className="absolute top-3 right-3"
              >
                {passShow ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </div>
            </div>
            <span className="text-red-600">{error}</span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              User Photo
              <span className="font-extrabold"> *</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="userphoto"
              type="url"
              placeholder="http://example.com"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="font-bold text-white bg-[#4acdd5] text-center  rounded  hover:bg-white hover:text-[#4acdd5] border hover:border-[#4acdd5] duration-200 py-2 px-4  focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="my-4 font-bold">
            <SocialLogin setError={setError}></SocialLogin>
          </div>
          <div className="my-4">
            <p className="inline-block align-baseline font-bold text-sm mr-1 ">
              Already have an account? Please
            </p>
            <Link
              to="/login"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 underline"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
