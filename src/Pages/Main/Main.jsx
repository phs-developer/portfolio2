import "aos/dist/aos.css";
import Header from "./Header";
import Footer from "./Footer";
import { About } from "../../components/About/About";
import { Stack } from "../../components/Stack/Stack";
import { Project } from "../../components/Project/Project";
import { Contact } from "../../components/Contact/Contact";

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Stack />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
