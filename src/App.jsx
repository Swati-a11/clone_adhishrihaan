import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import MainContent from "./components/main_content/main_content";
import FocusAreas from "./components/focus_areas/focus_areas";
import Grant from "./components/grant/grant";
import Events from "./components/event/event";
import Footer from "./components/footer/footer";

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
