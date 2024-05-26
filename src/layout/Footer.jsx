import logoAndText from "../assets/img/shared/logoAndText.png";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <footer className="p-10 bg-base-200 text-neutral">
        <div className="footer">
          <aside>
            <img
              src={logoAndText}
              alt="logo"
              className="rounded-lg w-16 h-14"
            />
            <p className="font-poppins">
              <a
                href="http://maps.google.com/?q=8 Rue des Cinq-Piquets, Nancy, 54000, France"
                className="link link-hover"
                target="_blank"
              >
                8 Rue des Cinq-Piquets, Nancy, 54000, France
              </a>
              <br />
              T&eacute;l&eacute;phone :&nbsp;
              <a href="tel:+33 3 54 33 27 02" className="link link-hover">
                +33 3 54 33 27 02
              </a>
              <br />
              Adresse mail :&nbsp;
              <a href="mailto:contact@culinaire.fr" className="link link-hover">
                contact@culinaire-explore.fr
              </a>
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">À propos de nous</h6>
            <Link to="/concept" className="link link-hover font-poppins">
              Concept
            </Link>
            <Link to="/team" className="link link-hover font-poppins">
              Notre équipe
            </Link>
            <Link to="/commitment" className="link link-hover font-poppins">
              Nos engagements
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Explorez plus</h6>
            <Link to="/how-it-works" className="link link-hover font-poppins">
              Comment ça marche ?
            </Link>
            <Link to="/gourmet-notebook" className="link link-hover font-poppins">
              Carnet gourmand
            </Link>
            <Link className="link link-hover font-poppins">
              Témoignages voyageurs
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Nous retrouver</h6>
            <Link to="/contact" className="link link-hover font-poppins">
              Écrivez-nous !
            </Link>
            <div className="grid grid-flow-col gap-4">
              <a href="https://www.twitter.com" target="_blank">
                <RiTwitterXLine className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <AiFillInstagram className="w-6 h-6" />
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>
        <div className="divider"></div>
        {/* flex-col lg:flex-row items-center justify-between */}
        <div className="footer-bottom grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-between">
          <p className="font-aileron mr-4 text-center lg:text-left">
            <FaRegHeart className="w-5 h-6 inline-block" />
            &nbsp;Fait avec passion &agrave; Nancy
            <br />
            <span className="text-xs">
              Imagin&eacute; et d&eacute;velopp&eacute; par <strong>THUILLIER Colin</strong>
            </span>
          </p>
          <p className="text-center font-aileron">
            &copy; 2024 Culinaire Explore. Tous droits réservés.
          </p>
          <nav className="flex justify-center text-center">
            <Link
              to="/terms-of-sale"
              className="link link-hover font-aileron mx-3 xl:mx-7"
            >
              Conditions de vente
            </Link>
            <Link className="link link-hover font-aileron mx-3 xl:mx-7">
              Mentions légales
            </Link>
            <Link className="link link-hover font-aileron mx-3 xl:mx-7">
              Politique de confidentialité &amp; cookies
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}