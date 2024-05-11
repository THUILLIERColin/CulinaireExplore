import { useEffect, useState } from "react";
import Select from "../components/forms/Select";
import NumberPicker from "../components/forms/NumberPicker";
import europeanCountries from "../data/countries.json";
import { useNavigate } from "react-router-dom";
import worldBackground from "../assets/svg/world.svg";

export default function IWantToTravel() {
  let navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [returnDate, setReturnDate] = useState("");
  const [description, setDescription] = useState("");
  const [isMan, setIsMan] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("travelData"));
    if (data) {
      setDestination(data.destination);
      setDepartureDate(data.departureDate);
      setReturnDate(data.returnDate);
      setAdults(data.adults);
      setChildren(data.children);
      setDescription(data.description);
      setIsMan(data.isMan);
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setPhone(data.phone);
      setEmail(data.email);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier que tous les champs requis sont remplis
    if (
      !destination ||
      !departureDate ||
      !returnDate ||
      !firstName ||
      !lastName ||
      !phone ||
      !email ||
      !description
    ) {
      alert("Veuillez remplir tous les champs requis.");
      return;
    }

    // Validation optionnelle de formats spécifiques (exemple pour l'email)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }

    // Validation des dates
    if (new Date(departureDate) > new Date(returnDate)) {
      alert("La date de retour doit être après la date de départ.");
      return;
    }

    // Validation du téléphone
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Veuillez entrer un numéro de téléphone valide.");
      return;
    }

    // Si tout est bon, logique pour enregistrer ou traiter les données
    const data = {
      destination,
      departureDate,
      returnDate,
      adults,
      children,
      description,
      isMan,
      firstName,
      lastName,
      phone,
      email,
    };

    localStorage.setItem("travelData", JSON.stringify(data));

    // Redirection vers la page avec indication de succès
    navigate("/?success=true");
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${worldBackground})` }}
    >
      <section
        id="form"
        className="py-20 text-neutral bg-base-100 bg-opacity-65"
      >
        <h1 className="text-4xl font-bold text-center">
          Créez votre voyage sur mesure
        </h1>
        <p className="text-center font-lovelace text-lg max-w-4xl mx-auto my-10">
          Décrivez votre projet de voyage à l&apos;aide du formulaire
          ci-dessous, un conseiller spécialiste vous contactera dans les
          meilleurs délais pour en discuter.
        </p>
        <form
          className="max-w-4xl mx-auto my-10 bg-base-200 p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6">Faîtes créer votre voyage</h2>
          <div>
            <Select
              label="Destination *"
              options={europeanCountries}
              placeholder="Sélectionnez un pays"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-6 my-4">
              <div>
                <label className="block mb-2 font-poppins">
                  Date de départ *
                </label>
                <input
                  type="date"
                  name="departureDate"
                  className="input input-bordered w-full"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 font-poppins">
                  Date de retour *
                </label>
                <input
                  type="date"
                  name="returnDate"
                  className="input input-bordered w-full"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <NumberPicker
                label="Adulte(s) *"
                value={adults}
                onChange={setAdults}
              />
            </div>
            <div>
              <NumberPicker
                label="Enfant(s)"
                value={children}
                onChange={setChildren}
              />
            </div>
            <div className="col-span-2">
              <div className="block mb-2 font-poppins">
                Description de votre voyage *
              </div>
              <textarea
                placeholder="Decrire votre voyage ici..."
                className="textarea textarea-bordered textarea-md w-full max-w-xl font-poppins"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <h2 className="text-xl font-bold mt-6 mb-4">
            Vos informations personnelles
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 mr-10">
                  Monsieur
                </label>
                <input
                  type="radio"
                  name="Monsieur"
                  className="radio checked:bg-primary"
                  onChange={() => setIsMan(true)}
                  checked={isMan}
                />
                <label className="flex items-center gap-2">Madame</label>
                <input
                  type="radio"
                  name="Madame"
                  className="radio checked:bg-primary"
                  onChange={() => setIsMan(false)}
                  checked={!isMan}
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2">Prénom *</label>
                  <label className="input input-bordered flex items-center gap-2 mb-2">
                    <input
                      type="text"
                      name="firstName"
                      className="grow"
                      placeholder="Pr&eacute;nom"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label className="block mb-2">Nom *</label>
                  <label className="input input-bordered flex items-center gap-2 mb-2">
                    <input
                      type="text"
                      name="lastName"
                      className="grow"
                      placeholder="Nom"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2">Téléphone *</label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 opacity-75"
                    >
                      <path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" />
                    </svg>
                    <input
                      type="tel"
                      className="grow"
                      placeholder="Téléphone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label className="block mb-2">Email *</label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-75"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input
                      type="email"
                      className="grow"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 mr-3 flex justify-end">
            <button type="submit" className="btn btn-primary">
              Voyager maintenant !
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
