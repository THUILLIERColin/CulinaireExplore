export default function PartnersSection() {
  const partners = [
    {
      name: "Lufthansa",
      link: "https://www.lufthansa.com/fr/fr/homepage",
      imgSrc:
        "https://companieslogo.com/img/orig/LHA.DE-909aa95f.png?t=1635288732",
    },
    {
      name: "Air France",
      link: "https://wwws.airfrance.fr/",
      imgSrc:
        "https://companieslogo.com/img/orig/AF.PA-b92a6da2.png?t=1671948758",
    },
    {
      name: "Ryanair",
      link: "https://www.ryanair.com/fr/fr",
      imgSrc:
        "https://companieslogo.com/img/orig/RYAAY-66486679.png?t=1634625582",
    },
    {
      name: "TheFork",
      link: "https://www.theforkmanager.com/fr-fr",
      imgSrc:
        "https://images.squarespace-cdn.com/content/v1/659eed6da17a5024e85fcfb5/883dbd9b-05a2-4cd8-b92b-cc095dd4bf78/TheFork-Icon.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1">
        <h2 id="partners" className="text-4xl font-bold text-neutral text-left">
          Nos partenaires
        </h2>
        <p className="mt-4 font-lovelace text-xl text-neutral mx-auto">
          Nous sommes actuellement en cours de négociation avec des partenaires
          de qualité pour vous offrir des expériences culinaires uniques.
        </p>
      </div>
      <div className="order-1 md:order-2 flex flex-wrap justify-center gap-4 md:justify-end">
        {partners.map(({ name, link, imgSrc }, i) => (
          <div key={i} className="p-4 bg-base-100 shadow-inner rounded-xl">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={imgSrc} alt="Partner" className="h-16 w-16 mb-2" />
              <span className="block text-center text-neutral">{name}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
