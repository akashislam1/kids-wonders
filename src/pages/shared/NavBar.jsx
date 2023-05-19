import { useContext, useState } from "react";
import { FaList, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="relative shadow-md rounded-md bg-[#4acdd5] text-white font-bold">
      <div className="w-full  mx-auto hidden md:block">
        <nav className=" z-50 p-4 rounded-md flex justify-between items-center ">
          <h2>
            <Link to="/" className="flex items-center gap-2">
              <img className="w-14" src={logo} alt="" />
              <p className="text-xl">Kids Wonders</p>
            </Link>
          </h2>
          <div className="flex items-center gap-3 font-semibold mr-11">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
            <NavLink
              to="/allToys"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              All Toys
            </NavLink>
            {user ? (
              <div className="flex items-center gap-3">
                <NavLink
                  to="/addtoy"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Add A Toy
                </NavLink>
                <NavLink
                  to="/mytoys"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  My Toys
                </NavLink>
                <Link onClick={handleLogOut}>Sign Out</Link>
                {user.photoURL ? (
                  <div className="group flex relative cursor-pointer">
                    <img
                      className="w-8 h-8 rounded-full "
                      src={user.photoURL}
                      alt=""
                    />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute left-1/2  -translate-x-1/2 translate-y-full opacity-0 mt-5 mx-auto py-1 px-2 w-28 text-center">
                      {user.displayName}
                    </span>
                  </div>
                ) : (
                  <div className="group flex relative cursor-pointer">
                    <FaUserCircle className="w-8 h-8"></FaUserCircle>
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute left-1/2  -translate-x-1/2 translate-y-full opacity-0 mt-5 mx-auto py-1 px-2 w-28 text-center">
                      {user.displayName}
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Login
              </NavLink>
            )}
          </div>
        </nav>
      </div>
      <div className="p-4 md:hidden shadow-md rounded-md flex justify-between items-center">
        <h2 className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img className="w-14" src={logo} alt="" />
            <p>Kids Wonders</p>
          </Link>
        </h2>
        <div onClick={() => setMenu(!menu)}>
          {menu ? (
            <FaTimes className="text-xl text-white"></FaTimes>
          ) : (
            <FaList className="text-xl text-white"></FaList>
          )}
        </div>
      </div>

      {menu && (
        <div className="z-50 absolute inset-y-16 left-0 w-full max-h-min bg-[#4acdd5] p-5 text-white">
          <ul className="text-center font-bold">
            <div className="flex flex-col items-center gap-3 mb-3">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allToys"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  All Toys
                </NavLink>
              </li>
            </div>
            <li>
              {user ? (
                <div className="flex flex-col items-center gap-3">
                  <NavLink
                    to="/addtoy"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Add A Toy
                  </NavLink>
                  <NavLink
                    to="/mytoys"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    My Toys
                  </NavLink>
                  <Link onClick={handleLogOut}>Sign Out</Link>
                  {user.photoURL ? (
                    <div className="group flex relative cursor-pointer">
                      <img
                        className="w-8 h-8 rounded-full "
                        src={user.photoURL}
                        alt=""
                      />
                      <span className="group-hover:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute left-1/2  -translate-x-1/2 translate-y-full opacity-0 mt-5 mx-auto py-1 px-2 w-28 text-center">
                        {user.displayName}
                      </span>
                    </div>
                  ) : (
                    <div className="group flex relative cursor-pointer">
                      <FaUserCircle className="w-8 h-8"></FaUserCircle>
                      <span className="group-hover:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute left-1/2  -translate-x-1/2 translate-y-full opacity-0 mt-5 mx-auto py-1 px-2 w-28 text-center">
                        {user.displayName}
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
