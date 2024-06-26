import { Link } from "react-router-dom";
import PropType from "prop-types";
import logo from "../assets/img/shared/logo.png"
import ToogleTheme from "./ToogleTheme";

Navbar.propTypes = {
  margin: PropType.string,
};

export default function Navbar() {  
  const aboutDesktopNav = (e) => {
    const details = e.target.closest('details');
    if (details) {
      details.open = false;
    }
  };

  return (
    <nav className="text-neutral relative z-50">
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
              id="aboutMobileNav"
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 font-poppins rounded-box w-52"
            >
              <li>
                <Link to="/i-want-to-travel">Je veux voyager</Link>
              </li>
              <li>
                <a>Qui sommes nous ?</a>
                <ul className="p-2">
                  <li>
                    <Link to="/concept">Notre concept</Link>
                  </li>
                  <li>
                    <Link to="/team">Notre &eacute;quipe</Link>
                  </li>
                  <li>
                    <Link to="/commitment">Nos engagements</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/how-it-works">Comment &ccedil;a marche ?</Link>
              </li>
              <li>
                <Link to="/gourmet-notebook">Le Carnet Gourmand</Link>
              </li>
              <li>
                <Link to="/contact">Nous contacter</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-lg" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-poppins">
            <li>
              <Link to="/i-want-to-travel">Je veux voyager</Link>
            </li>
            <li>
              <details id="aboutDesktopNav">
                <summary>Qui sommes nous ?</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/concept" onClick={aboutDesktopNav}
                    >Notre concept</Link>
                  </li>
                  <li>
                    <Link to="/team" onClick={aboutDesktopNav}
                    >Notre &eacute;quipe</Link>
                  </li>
                  <li>
                    <Link to="/commitment"  onClick={aboutDesktopNav}
                    >Nos engagements</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/how-it-works">Comment &ccedil;a marche ?</Link>
            </li>
            <li>
            <Link to="/gourmet-notebook">Le Carnet Gourmand</Link>
            </li>
            <li>
              <Link to="/contact">Nous contacter</Link>
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