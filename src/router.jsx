import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFoundPage />,
        element: <App />,
    },
    {
        path: "/about",
        element: <>
        <Navbar />
        <main>
            <h1>About</h1>
        </main>
        <Footer />
        </>
    },
    ]);

export default router;