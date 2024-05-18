import { Link, useLocation } from "react-router-dom";
import AlertModal from "../../components/ui/AlertModal";
import { useEffect, useState } from "react";
import { IoAirplaneOutline } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

import HeroGreekBeach from "../../assets/img/pages/home/hero_greek_beach.avif";
import HeroSkewersFriesGreek from "../../assets/img/pages/home/hero_skewers_fries_greek.avif";
import HeroSpanishRestaurant from "../../assets/img/pages/home/hero_spanish_restaurant.avif";
import HeroPaella from "../../assets/img/pages/home/hero_paella.avif";
import HeroMadridStreet from "../../assets/img/pages/home/hero_madrid_street.avif";
import HeroPasties from "../../assets/img/pages/home/hero_pasties.avif";
import HeroPortugueseStreet from "../../assets/img/pages/home/hero_portuguese_street.avif";

export default function Hero() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const success = queryParams.get("success");
  const [imagesLoaded, setImagesLoaded] = useState({
    image1: false,
    image2: false,
    image3: false,
    image4: false,
    image5: false,
    image6: false,
    image7: false
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
    if (success) {
      const modal = document.getElementById("success_order");
      modal.showModal();
      setTimeout(() => {
        modal.close();
        history.pushState(null, null, "/");
      }, 3000);
    }
  }, [success]);

  const handleImageLoaded = (imageKey) => {
    setImagesLoaded(prevState => ({ ...prevState, [imageKey]: true }));
  };

  return (
    <>
      {success && (
        <AlertModal
          id="success_order"
          state="success"
          description="Pr&eacute;parez-vous &agrave; voyager votre demande a &eacute;t&eacute; enregistr&eacute;e"
        />
      )}
      {/* Navigation prioritaire sur la séléction */}
      <div className="relative overflow-hidden">
        <div className="pb-80 pt-16 h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 lg:h-auto">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 data-aos="fade-right" className="text-4xl tracking-tight font-aileron font-bold text-neutral sm:text-6xl">
                It&apos;s time to travel!
              </h1>
              <p data-aos="fade-right" className="mt-4 text-xl text-neutral font-lovelace">
                Direction le{" "}
                <IoAirplaneOutline className="inline-block w-10 h-10" />{" "}
                plaisir
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  data-aos="fade-left"
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-100">
                        {!imagesLoaded.image1 && <div className="skeleton h-64 w-44"></div>}
                          <img
                            src={HeroGreekBeach}
                            alt="Restaurant Grecque"
                            className="h-full w-full object-cover object-center"
                            onLoad={() => handleImageLoaded("image1")}
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                        {!imagesLoaded.image2 && <div className="skeleton h-64 w-44"></div>}
                          <img
                            src={HeroSkewersFriesGreek}
                            alt="Nourriture Grecque"
                            className="h-full w-full object-cover object-center"
                            onLoad={() => handleImageLoaded("image2")}
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden opacity-0 sm:opacity-100 rounded-lg">
                        {!imagesLoaded.image3 && <div className="skeleton h-64 w-44"></div>}
                          <img
                            src={HeroSpanishRestaurant}
                            alt="Restaurant Espagnol"
                            className="h-full w-full object-cover object-center"
                            onLoad={() => handleImageLoaded("image3")}
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                        {!imagesLoaded.image4 && <div className="skeleton h-64 w-44"></div>}
                          <img
                            src={HeroPaella}
                            alt="Paella Espagnole"
                            className="h-full w-full object-cover object-center"
                            onLoad={() => handleImageLoaded("image4")}
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                        {!imagesLoaded.image5 && <div className="skeleton h-64 w-44"></div>}
                          <img
                            src={HeroMadridStreet}
                            alt="Rue de Madrid"
                            className="h-full w-full object-cover object-center"
                            onLoad={() => handleImageLoaded("image5")}
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          {!imagesLoaded.image1 && <div className="skeleton h-64 w-44"></div>}
                          <img
                            src={HeroPasties}
                            alt="Pasties de Nata"
                            className="h-full w-full object-cover object-center"
                            onLoad={() => handleImageLoaded("image6")}
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          {!imagesLoaded.image1 && <div className="skeleton h-64 w-44"></div>}
                          <img
                            src={HeroPortugueseStreet}
                            alt="Rue Portugaise"
                            className="h-full w-full object-cover object-center"
                            onLoad={() => handleImageLoaded("image7")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link data-aos="fade-right"
                  to="/i-want-to-travel"
                  className="inline-block rounded-md border border-transparent bg-primary px-8 py-3 text-center font-medium text-white hover:opacity-80"
                >
                  Reservez d&egrave;s maintenant !
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}