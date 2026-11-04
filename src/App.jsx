import { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import MainContent from "./components/main_content/main_content";
import FocusAreas from "./components/focus_areas/focus_areas";
import Grant from "./components/grant/grant";
import Events from "./components/event/event";
import Footer from "./components/footer/footer";
import NotFound from "./components/not_found/not_found";

function isHomeRoute(pathname) {
  const normalized = (pathname || "/").replace(/\/+$/, "") || "/";
  return normalized === "/" || normalized === "/index.html";
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    () => window.location.pathname || "/"
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname || "/");
    };

    window.addEventListener("popstate", handleLocationChange);

    const handleDocumentClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        anchor.target === "_blank" ||
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      if (href.startsWith("/")) {
        e.preventDefault();
        window.history.pushState({}, "", href);
        setCurrentPath(window.location.pathname || "/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const navigateToHome = () => {
    window.history.pushState({}, "", "/");
    setCurrentPath("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isHomeRoute(currentPath)) {
    return <NotFound onNavigateHome={navigateToHome} />;
  }

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
