import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <>
      <div className="bg-base-200 m-10 py-10 px-5 md:px-10 rounded-2xl shadow-inner">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold font-aileron text-neutral text-center">
            Contactez-nous
          </h1>
          <p className="text-md text-center text-neutral font-lovelace mt-2 mb-10">
            Vous avez <strong>une question</strong> ? Une proposition de{" "}
            <strong>partenariat</strong> ?
            <br />
            N&apos;hésitez pas à nous contacter par email, nous vous répondrons
            le plus vite possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {/* Phone Card */}
            <a
              href="tel:+33 3 54 33 27 02"
              className="flex flex-col items-center p-5 shadow-lg rounded-lg bg-base-100 transition transform hover:translate-x-1 hover:translate-y-[-0.25rem] hover:shadow-2xl"
            >
              <FiPhone className="h-10 w-10 text-neutral" />
              <h2 className="font-bold font-aileron text-neutral text-lg mt-2">
                T&eacute;l&eacute;phone
              </h2>
              <p className="text-primary mt-2">(+33) 3 54 33 27 02</p>
            </a>

            {/* Email Card */}
            <a
              href="mailto:contact@culinaire.fr"
              className="flex flex-col items-center p-5 shadow-lg rounded-lg bg-base-100 transition transform hover:translate-x-1 hover:translate-y-[-0.25rem] hover:shadow-2xl"
            >
              <FiMail className="h-10 w-10 text-neutral" />
              <h2 className="font-bold font-aileron text-neutral text-lg mt-2">
                Email
              </h2>
              <p className="text-primary mt-2">contact@culinaire-explore.fr</p>
            </a>

            {/* Address Card */}
            <a
              href="http://maps.google.com/?q=8 Rue des Cinq-Piquets, Nancy, 54000, France"
              target="_blank"
              className="flex flex-col items-center p-5 shadow-lg rounded-lg bg-base-100 transition transform hover:translate-x-1 hover:translate-y-[-0.25rem] hover:shadow-2xl"
            >
              <FiMapPin className="h-10 w-10 text-neutral" />
              <h2 className="font-bold font-aileron text-neutral text-lg mt-2">
                Adresse
              </h2>
              <p className="text-primary mt-1">
                8 Rue des Cinq-Piquets, Nancy, 54000, France
              </p>
            </a>
          </div>

          <div className="text-center text-sm text-neutral font-poppins mt-10">
            <p>
              Vous avez un <strong>projet de voyage particulier</strong> ? Une{" "}
              <strong>demande spécifique</strong> ?
              <br />
              Vous pouvez nous écrire par <strong>
                email, prendre RDV
              </strong>{" "}
              pour que l&apos;on vous appelle (téléphone) ou bien formuler une
              demande de devis ci-dessous :
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
