import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import IWantToTravel from "./pages/IWantToTravel";
import Concept from "./pages/Concept";
import Team from "./pages/Team";
import HowItsWorks from "./pages/HowItsWorks";
import Contact from "./pages/Contact";
import Commitment from "./pages/Commitment";
import TermsOfSale from "./pages/TermsOfSale";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFoundPage />,
        element: <App />,
    },
    {
        path: "/i-want-to-travel",
        errorElement: <NotFoundPage />,
        element: <IWantToTravel />,
    },
    {
        path: "/concept",
        errorElement: <NotFoundPage />,
        element: <Concept />,
    },
    {
        path: "/team",
        errorElement: <NotFoundPage />,
        element: <Team />,
    },
    {
        path: "/commitment",
        errorElement: <NotFoundPage />,
        element: <Commitment />,
    },
    {
        path: "/how-it-works",
        errorElement: <NotFoundPage />,
        element: <HowItsWorks />,
    },
    {
        path: "/contact",
        errorElement: <NotFoundPage />,
        element: <Contact />,
    },
    {
        path: "/terms-of-sale",
        errorElement: <NotFoundPage />,
        element: <TermsOfSale />,
    },
    ]);

export default router;