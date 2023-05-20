import { Link, Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/shared/NavBar";
import Footer from "../pages/shared/Footer";
import { useEffect, useState } from "react";
import Aos from "aos";
import { useScrollTop } from "../Hooks/useScrollTop";

const Main = () => {
  const { pathname } = useLocation();
  useScrollTop(pathname);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="relative w-full">
      <NavBar></NavBar>
      <div className=" md:min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
