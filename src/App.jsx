import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NotFoundPage from "./pages/NotFoundPage";
import IWantToTravel from "./pages/IWantToTravel";
import Concept from "./pages/Concept";
import Team from "./pages/Team";
import Commitment from "./pages/Commitment";
import HowItsWorks from "./pages/HowItsWorks";
import Contact from "./pages/Contact";
import TermsOfSale from "./pages/TermsOfSale";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path= "/" element={<Hero />} />
        <Route path= "*" element={<NotFoundPage />} />
        <Route path= "/i-want-to-travel" element={<IWantToTravel />} />
        <Route path= "/concept" element={<Concept />} />
        <Route path= "/team" element={<Team />} />
        <Route path= "/commitment" element={<Commitment />} />
        <Route path= "/how-it-works" element={<HowItsWorks />} />
        <Route path= "/contact" element={<Contact />} />
        <Route path= "/terms-of-sale" element={<TermsOfSale />} />
      </Routes>
      <Footer />
    </>
  );
}
