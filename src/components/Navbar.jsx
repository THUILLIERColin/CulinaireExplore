import { Link } from "react-router-dom";
import PropType from "prop-types";
import logo from "../assets/img/logo.png";
import ToogleTheme from "./ToogleTheme";

Navbar.propTypes = {
  margin: PropType.string,
};

export default function Navbar() {
  // Fonction pour fermer <details>
  const closeDetails = (e) => {
    // Trouve le parent <details> le plus proche et le ferme
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
              <details>
                <summary>Qui sommes nous ?</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/concept" onClick={closeDetails}>Notre concept</Link>
                  </li>
                  <li>
                    <Link to="/team" onClick={closeDetails}>Notre &eacute;quipe</Link>
                  </li>
                  <li>
                    <Link to="/commitment" onClick={closeDetails}>Nos engagements</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/how-it-works">Comment &ccedil;a marche ?</Link>
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
