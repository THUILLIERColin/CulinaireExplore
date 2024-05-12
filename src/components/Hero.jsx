import Carousel from './Carousel';
import airplane from '../assets/svg/airplane.svg';
import { Link, useLocation } from 'react-router-dom';
import SuccessModal from './SuccessModal';
import { useEffect } from 'react';

export default function Hero() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const success = queryParams.get('success');

   useEffect(() => {
    if (success) {
      const modal = document.getElementById('success_order');
      modal.showModal();
      setTimeout(() => {
        modal.close();
        history.pushState(null, null, '/');
      }, 3000);
    }
  }
  , [success]);

  return (
    <>
    {success && (
        <SuccessModal id="success_order" description="Pr&eacute;parez-vous &agrave; voyager votre demande a &eacute;t&eacute; enregistr&eacute;e" />
      )}
      <div className="hero min-w-screen my-10">
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-left">
                <h1 className="text-5xl font-aileron font-bold text-neutral mr-10">It&apos;s time to travel!</h1>
                <p className="py-6 text-neutral font-lovelace font-bold">Direction le <img src={airplane} alt="Avion" className="w-10 h-10 inline-block" /> plaisir</p>
                <button className="btn btn-primary font-poppins">
                  <Link to="/i-want-to-travel">
                    Reservez d&egrave;s maintenant !
                  </Link>
                </button>
            </div>
            <Carousel />
        </div>
    </div>
    </>
  );
}
