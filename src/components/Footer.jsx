import logoAndText from "../assets/logoAndText.png";
import { Link } from "react-router-dom";
import heart from "../assets/heart.svg";

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
            <h6 className="footer-title">Demander un partenariat</h6>
            <Link to="/contact" className="link link-hover font-poppins">
              Écrivez-nous !
            </Link>
          </nav>
        </div>
        <div className="divider"></div>
        <div className="footer-bottom flex flex-col lg:flex-row items-center justify-between">
          <p className="font-aileron mr-4 flex-none">
            <img src={heart} alt="Coeur" className="w-5 h-6 inline-block" />
            &nbsp;Fais avec passion &agrave; Nancy
          </p>
          <p className="text-center font-aileron mx-4 flex-1">
            &copy; 2024 Culinaire Explore. Tous droits réservés.
          </p>
          <nav className="flex flex-1 justify-center">
            <Link to="/terms-of-sale" className="link link-hover font-aileron">
              Conditions de vente
            </Link>
            <Link className="link link-hover font-aileron">
              Mentions légales
            </Link>
            <Link className="link link-hover font-aileron">
              Politique de confidentialité &amp; cookies
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
