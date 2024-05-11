import logoAndText from "../assets/img/logoAndText.png";
import { Link } from "react-router-dom";
import heart from "../assets/svg/heart.svg";
import x from "../assets/svg/x.svg";
import instagram from "../assets/svg/instagram.svg";

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
            <Link className="link link-hover font-poppins">
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
                <img src={x} alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img src={instagram} alt="Instagram" className="w-6 h-6" />

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
        <div className="footer-bottom flex flex-col lg:flex-row items-center justify-between">
          <p className="font-aileron mr-4 flex-none">
            <img src={heart} alt="Coeur" className="w-5 h-6 inline-block" />
            &nbsp;Fait avec passion &agrave; Nancy
          </p>
          <p className="text-center font-aileron mx-4 flex-1">
            &copy; 2024 Culinaire Explore. Tous droits réservés.
          </p>
          <nav className="flex flex-1 justify-center">
            <Link to="/terms-of-sale" className="link link-hover font-aileron xl:mx-7">
              Conditions de vente
            </Link>
            <Link className="link link-hover font-aileron xl:mx-7">
              Mentions légales
            </Link>
            <Link className="link link-hover font-aileron xl:mx-7">
              Politique de confidentialité &amp; cookies
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
