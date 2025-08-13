import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shortener from "./components/Shortener";
import LinksList from "./components/LinksList";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const [links, setLinks] = useState([]);

  function handleAddLink(link) {
    setLinks([{ ...link, copied: false }, ...links]);
  }

  function handleCopy(text, index) {
    navigator.clipboard.writeText(text).then(() => {
      const updated = [...links];
      updated[index].copied = true;
      setLinks(updated);
      setTimeout(() => {
        updated[index].copied = false;
        setLinks([...updated]);
      }, 2000);
    });
  }

  return (
    <>
      <Header />
      <Hero />
      <Shortener onAddLink={handleAddLink} />
      <LinksList links={links} onCopy={handleCopy} />
      <Footer />
    </>
  );
}
