export default function SignUpSection() {
  return (
    <div className="bg-base-200 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-between items-start">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">
            Rejoignez la communauté de Culinaire Explore !
          </h2>
          <p className="mt-2 text-xl text-gray-600">
            Créez votre compte pour une expérience personnalisée et accédez à des
            offres exclusives.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition-colors">
            Créez votre compte gratuitement
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
          <ul className="list-disc space-y-2 text-left text-gray-600">
            <li>📨 Offres exclusives de voyages directement dans votre boîte mail.</li>
            <li>📣 Promotions spéciales pendant le mois de votre anniversaire.</li>
            <li>📚 Accès privilégié à nos guides de voyage détaillés.</li>
            <li>📉 Réductions et offres spéciales tout au long de l&apos;année.</li>
            <li>🗓️ La possibilité de planifier et sauvegarder vos itinéraires personnalisés.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
