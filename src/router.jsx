import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import IWantToTravel from "./pages/IWantToTravel";
import Concept from "./pages/Concept";
import Team from "./pages/Team";
import HowItsWorks from "./pages/HowItsWorks";
import Contact from "./pages/Contact";

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
        path: "/i-want-to-travel",
        element: <IWantToTravel />,
    },
    {
        path: "/team",
        errorElement: <NotFoundPage />,
        element: <Team />,
    },
    {
        path: "/i-want-to-travel",
        element: <IWantToTravel />,
    },
    {
        path: "/how-it-works",
        errorElement: <NotFoundPage />,
        element: <HowItsWorks />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    ]);

export default router;