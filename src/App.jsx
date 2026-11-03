import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import FocusAreas from "./components/Focus_Areas";
import Grant from "./components/Grant";
import Events from "./components/Events";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MainContent />
      <FocusAreas />
      <Grant />
      <Events />
      <Footer />
    </>
  );
}
