export default function SignUpSection() {
  return (
    <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-between items-start">
      <div className="md:w-1/2" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-neutral font-aileron">
          Rejoignez la communauté de Culinaire Explore !
        </h2>
        <p className="mt-2 text-xl text-neutral font-lovelace">
          Créez votre compte pour une expérience personnalisée et accédez à des
          offres exclusives.
        </p>
        <button className="inline-block rounded-md border border-transparent bg-primary px-8 py-3 text-center font-medium text-white hover:opacity-80 m-5">
          Créez votre compte gratuitement
        </button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <ul className="list-none space-y-2 text-left text-neutral font-lovelace" data-aos="fade-left">
          <li className="pb-2">
            📨 Offres exclusives de voyages directement dans votre boîte mail.
          </li>
          <li className="pb-2">
            📣 Promotions spéciales pendant le mois de votre anniversaire.
          </li>
          <li>📚 Accès privilégié à nos guides de voyage détaillés.</li>
          <li className="pb-2">
            📉 Réductions et offres spéciales tout au long de l&apos;année.
          </li>
          <li className="pb-2">
            🗓️ La possibilité de planifier et sauvegarder vos itinéraires
            personnalisés.
          </li>
        </ul>
      </div>
    </div>
  );
}
