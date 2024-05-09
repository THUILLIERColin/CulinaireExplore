import logoAndText from "../assets/logoAndText.png";

export default function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <img src={logoAndText} alt="logo" className="rounded-lg w-16 h-14" />
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
            <a href="tel:+33 3 57 33 27 02" className="link link-hover">
                +33 3 57 33 27 02
            </a>
            <br />
            Adresse mail :&nbsp;
            <a href="mailto:contact@culinaire.fr" className="link link-hover">
                contact@culinaire.fr
            </a>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">À propos de nous</h6>
          <a className="link link-hover font-poppins">Concept</a>
          <a className="link link-hover font-poppins">Notre équipe</a>
          <a className="link link-hover font-poppins">Nos engagements</a>
        </nav>
        <nav>
          <h6 className="footer-title">Explorez plus</h6>
          <a className="link link-hover font-poppins">Comment ça marche</a>
          <a className="link link-hover font-poppins">Carnet gourmand</a>
          <a className="link link-hover font-poppins">Témoignages voyageurs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support et légal</h6>
          <a className="link link-hover font-poppins">Écrivez-nous !</a>
          <a className="link link-hover font-poppins">Conditions de vente</a>
          <a className="link link-hover font-poppins">Mentions légales</a>
          <a className="link link-hover font-poppins">
            Politique de confidentialité & cookies
          </a>
        </nav>
      </footer>
    </>
  );
}
