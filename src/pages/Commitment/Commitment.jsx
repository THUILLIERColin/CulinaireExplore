import { FaLeaf, FaUsers, FaUtensils, FaHotel, FaHandshake, FaBicycle } from 'react-icons/fa';
import { MdOutlineEco } from 'react-icons/md';

const Commitment = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold font-aileron text-center text-neutral">Nos Engagements</h2>
        <p className="mt-4 text-lg text-center text-neutral font-lovelace">
          Chez Culinaire Explore, nous nous engageons à fournir une expérience de voyage inoubliable tout en respectant et en valorisant les cultures et l&apos;environnement des destinations que nous visitons.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 shadow-lg rounded-lg bg-base-200 flex flex-col items-center text-center">
            <FaUtensils className="text-3xl mb-4 text-neutral"/>
            <h3 className="text-xl font-semibold text-neutral font-aileron">Valoriser la gastronomie traditionnelle</h3>
            <p className="mt-2 text-neutral font-lovelace">
              Nous nous efforçons de mettre en lumière et de célébrer la richesse culinaire de chaque pays, en favorisant les expériences authentiques qui honorent les traditions locales.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-base-200 flex flex-col items-center text-center">
            <MdOutlineEco className="text-3xl mb-4 text-neutral"/>
            <h3 className="text-xl font-semibold text-neutral font-aileron">Respect de l&apos;environnement</h3>
            <p className="mt-2 text-neutral font-lovelace">
              Nos voyages sont conçus pour minimiser l&apos;impact environnemental, en intégrant des pratiques durables et en choisissant des partenaires qui partagent notre engagement envers la planète.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-base-200 flex flex-col items-center text-center">
            <FaUsers className="text-3xl mb-4 text-neutral"/>
            <h3 className="text-xl font-semibold text-neutral font-aileron">Rencontres culturelles enrichissantes</h3>
            <p className="mt-2 text-neutral font-lovelace">
              Nous facilitons des interactions significatives avec les habitants, permettant un échange culturel qui enrichit à la fois les voyageurs et les communautés locales.
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg text-neutral font-semibold font-aileron">Engagements additionnels :</p>
          <ul className="list-disc list-inside mt-2 text-center text-neutral">
            <li className="font-lovelace"><FaHandshake className="inline mr-2"/>Partenariat avec des acteurs engagés pour un tourisme responsable.</li>
            <li className="font-lovelace"><FaHotel className="inline mr-2"/>Hébergements écoresponsables privilégiés pour réduire notre empreinte écologique.</li>
            <li className="font-lovelace"><FaLeaf className="inline mr-2"/>Promotion d&apos;un prix juste, valorisant le travail des équipes locales et assurant une rémunération équitable.</li>
            <li className="font-lovelace"><FaBicycle className="inline mr-2"/>Encouragement d&apos;un tourisme lent et vert, favorisant des déplacements moins fréquents et plus conscients.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
