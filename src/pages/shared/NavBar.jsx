import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* {user ? (
        <>
          <li>
            <Link to="/bookings"> My Bookings</Link>
          </li>
          <button onClick={logOut}>Sign Out</button>
        </>
      ) : (
        <li>
          <Link to="/Login">Login</Link>
        </li>
      )} */}
      <li>
        <Link>All Toys</Link>
      </li>
      <li>
        <Link>Blogs</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#4acdd5] text-white rounded-md font-bold">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow  w-52 bg-[#4acdd5] text-white "
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className=" normal-case text-xl flex items-center gap-2">
          <img className="w-24 md:w-14 " src={logo} alt="" />
          <p className="font-bold ">Kids Wonders</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 ">{navItems}</ul>
      </div>
      <div className="navbar-end ">
        <div className="hidden md:block">
          <button className="btn  btn-accent text-white ">Login</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
