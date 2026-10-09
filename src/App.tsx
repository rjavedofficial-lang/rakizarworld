import { useState, useEffect } from "react";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { DestinationsPage } from "./pages/DestinationsPage";

type Route = "/" | "/services" | "/about" | "/contact" | "/destinations";

function getRouteFromHash(): Route {
  const hash = window.location.hash.replace(/^#/, "") || "/";
  // For "services#consultancy", take the first part
  const path = hash.split("#")[0];
  if (
    path === "/services" ||
    path === "/about" ||
    path === "/contact" ||
    path === "/destinations"
  ) {
    return path;
  }
  return "/";
}

function getSecondaryAnchor(): string | null {
  const hash = window.location.hash.replace(/^#/, "");
  const parts = hash.split("#");
  return parts.length > 1 && parts[1] ? parts[1] : null;
}

export function App() {
  const [route, setRoute] = useState<Route>(getRouteFromHash());

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRouteFromHash());
      window.scrollTo(0, 0);

      // Handle secondary anchor scrolling after page renders
      const anchor = getSecondaryAnchor();
      if (anchor) {
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const renderPage = () => {
    switch (route) {
      case "/services":
        return <ServicesPage />;
      case "/about":
        return <AboutPage />;
      case "/contact":
        return <ContactPage />;
      case "/destinations":
        return <DestinationsPage />;
      default:
        return <HomePage />;
    }
  };

  return <Layout>{renderPage()}</Layout>;
}
