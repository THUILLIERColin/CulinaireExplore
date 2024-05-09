import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ToogleTheme from "./ToogleTheme";

export default function Navbar() {
  return (
    <nav className="mb-32">
      <div className="navbar bg-base-200 border-b">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 font-poppins rounded-box w-52"
            >
              <li>
                <a>À propos</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-lg" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-poppins">
            <li>
              <Link to="/about">À propos</Link>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
            <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ToogleTheme />
        </div>
      </div>
    </nav>
  );
}
