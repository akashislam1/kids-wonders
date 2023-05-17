import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import SocialLogin from "../shared/SocialLogin";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passShow, setPassShow] = useState(false);
  const [error, setError] = useState("");
  const { signIn, setUser } = useContext(AuthContext);

  // handle login
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    // login user
    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        e.target.reset();
        setError(" ");
      })
      .catcH((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="w-full md:w-5/6 mx-auto">
      <h2 className="text-center text-2xl font-bold my-5">Login</h2>
      <div className="w-full max-w-xs mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              User Email
              <span className="text-red-600 font-extrabold"> *</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setEmail(e.target.value)}
              id="username"
              type="email"
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
                id="password"
                type={passShow ? "text" : "password"}
                placeholder="Password"
                required
              />
              <div
                onClick={() => setPassShow(!passShow)}
                className="absolute top-3 right-3"
              >
                {passShow ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </div>
              <span className="text-red-600">{error}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="font-bold text-white bg-[#4acdd5] text-center  rounded  hover:bg-white hover:text-[#4acdd5] border hover:border-[#4acdd5] duration-200 py-2 px-4  focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <button>
              <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 underline">
                Forgot Password?
              </Link>
            </button>
          </div>
          <div className=" my-4 font-bold">
            <SocialLogin setError={setError}></SocialLogin>
          </div>
          <div className="my-4">
            <p className="inline-block align-baseline font-bold text-sm mr-1 ">
              Don&apos;t have an account? Please
            </p>
            <Link
              to="/signup"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 underline"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
