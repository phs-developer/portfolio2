import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Footer from "./Footer";
import { About } from "../../components/About/About";
import { Stack } from "../../components/Stack/Stack";
import { Project } from "../../components/Project/Project";
import { Contact } from "../../components/Contact/Contact";

export default function Main() {
  AOS.init();
  AOS.refresh();
  useEffect(() => {
    const view = document.querySelectorAll(".view");
    setTimeout(() => {
      view.forEach((e) => {
        e.style.opacity = 1;
      });
    }, 4400);
  }, []);

  return (
    <div>
      <Header />
      <main>
        <About />
        <Stack />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
