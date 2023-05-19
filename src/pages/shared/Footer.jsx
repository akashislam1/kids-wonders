import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer  p-10 bg-base-200 text-base-content">
        <div>
          <h2>
            <Link to="/" className="flex items-center gap-2">
              <img className="w-14" src={logo} alt="" />
              <p className="text-xl">Kids Wonders</p>
            </Link>
          </h2>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Contact Us</span>
          <div className="form-control  md:w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="flex items-center justify-start">
              <input
                type="text"
                placeholder="Enter your email address"
                className="px-2 py-2 border border-[#4acdd5] rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#4acdd5] focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#4acdd5] text-white rounded-r-md  focus:outline-none focus:ring-2 focus:ring-[#4acdd5] focus:ring-opacity-50"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer items-center p-4 bg-[#4acdd5] text-neutral-content">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end cursor-pointer">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7"
              viewBox="126.444 2.281 589 589"
              id="twitter"
            >
              <circle
                cx="420.944"
                cy="296.781"
                r="294.5"
                fill="#2daae1"
              ></circle>
              <path
                fill="#fff"
                d="M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z"
              ></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 128 128"
              id="movie"
              className="w-7"
            >
              <circle cx="64" cy="64" r="64" fill="#e21a20"></circle>
              <path
                fill="#fff"
                d="M98.62 53.92c-.49-6.75-1.72-13.72-10.35-14.23a426.5 426.5 0 0 0-48.55 0c-8.63.5-9.86 7.48-10.35 14.23a135 135 0 0 0 0 20.16c.49 6.75 1.72 13.72 10.35 14.23a426.5 426.5 0 0 0 48.55 0c8.63-.5 9.86-7.48 10.35-14.23a135 135 0 0 0 0-20.16ZM57 73V53l19 10Z"
              ></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Ebene 1"
              viewBox="0 0 1024 1024"
              id="facebook-logo-2019"
              className="w-7"
            >
              <path
                fill="#1877f2"
                d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
              ></path>
              <path
                fill="#fff"
                d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
              ></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
