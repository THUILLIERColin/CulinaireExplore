import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Footer from "./layout/Footer";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage";
import IWantToTravel from "./pages/IWantToTravel";
import Concept from "./pages/Concept";
import Team from "./pages/Team/Team";
import Commitment from "./pages/Commitment";
import HowItsWorks from "./pages/HowItsWorks";
import Contact from "./pages/Contact";
import TermsOfSale from "./pages/TermsOfSale";
import GourmetNotebook from "./pages/GourmetNotebook";
import Navbar from "./layout/Navbar";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "*" element={<NotFoundPage />} />
        <Route path= "/i-want-to-travel" element={<IWantToTravel />} />
        <Route path= "/concept" element={<Concept />} />
        <Route path= "/team" element={<Team />} />
        <Route path= "/commitment" element={<Commitment />} />
        <Route path= "/how-it-works" element={<HowItsWorks />} />
        <Route path= "/contact" element={<Contact />} />
        <Route path= "/terms-of-sale" element={<TermsOfSale />} />
        <Route path= "/gourmet-notebook" element={<GourmetNotebook />} />
      </Routes>
      <Footer />
    </>
  );
}
