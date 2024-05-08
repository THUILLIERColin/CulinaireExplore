import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        element: <App />,
    },
    {
        path: "/about",
        errorElement: <Error />,
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