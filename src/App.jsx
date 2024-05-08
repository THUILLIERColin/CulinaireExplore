import "./App.css";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <main className="bg-neutral">
        <Navbar />
        <div className="container mx-auto p-4">
          <h1 className="text-3xl text-center text-corvette">
            Hello, World!
          </h1>
          <p className="text-center text-corvette">
            This is a simple page with a Tailwind CSS Navbar.
          </p>
        </div>
      </main>
    </>
  );
}
