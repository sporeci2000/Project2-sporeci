import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shortener from "./components/Shortener";
import LinksList from "./components/LinksList";
import Footer from "./components/Footer";
import Statistics from "./components/Statistics";
import BoostLinks from "./components/BoostLinks";
import "./index.css";

export default function App() {
  // State to hold shortened links
  const [links, setLinks] = useState([]);

  // Function to add a new shortened link to the list
  function handleAddLink(newLink) {
    // Create a unique ID using current timestamp + random number
    const uniqueId = Date.now().toString() + Math.floor(Math.random() * 1000);

    // Add the new link with copied state and unique ID
    setLinks([...links, { ...newLink, copied: false, id: uniqueId }]);
  }

  // Function to handle copying a link to clipboard
  function handleCopy(id) {
    // Find the link by its id
    const linkToCopy = links.find((link) => link.id === id);
    
    if (linkToCopy) {
      // Copy the short link to clipboard
      navigator.clipboard.writeText(linkToCopy.short);
    }
    // Update the copied state for that link
    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.id === id
          ? { ...link, copied: true }
          : { ...link, copied: false }
      )
    );
  }

  return (
    <div className="App">
      {/* Header with navigation */}
      <Header />

      {/* Hero section with main illustration and CTA */}
      <Hero />

      {/* Shortener input section */}
      <Shortener onAddLink={handleAddLink} />

      {/* List of shortened links */}
      <LinksList links={links} onCopy={handleCopy} />

      {/* Advanced statistics section */}
      <Statistics />

      {/* Boost your links today CTA */}
      <BoostLinks />

      {/* Footer section */}
      <Footer />
    </div>
  );
}
