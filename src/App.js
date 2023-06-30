import "./App.css";
import { About } from "./section/about.js";
import { Contact } from "./section/contact.js";
import { Project } from "./section/project.js";
import { Stack } from "./section/stack";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
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

  const Header = () => {
    return (
      <header id="home" className="flex">
        <div className="container">
          <h1>
            안녕하세요,
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("박희순 입ㄴ")
                  .deleteAll()
                  .pauseFor(600)
                  .typeString("FE 개발자 입니다 :)")
                  .start();
              }}
            />
          </h1>
          <h2 className="view">박희순</h2>
          <ul className="flex view">
            <li>
              <a href="https://github.com/phs-developer">
                <img src="./img/github.png" alt="github" />
              </a>
            </li>
            <li>
              <a href="https://github.com/phs-developer">
                <img src="./img/blog.png" alt="blog" />
              </a>
            </li>
            <li>
              <a href="mailto:phs970824@daum.net">
                <img src="./img/email.png" alt="email" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  };

  const Footer = () => {
    return (
      <footer>
        <div className="footer-top flex">
          <h3>Park Hee Soon</h3>
          <div>
            <img src="./img/me2.jpg" alt="나" />
          </div>
        </div>
        <div className="footer-bottom flex">
          <h3>Links</h3>
          <ul className="flex">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#stacks">Stacks</a>
            </li>
            <li>
              <a href="#project">My Work</a>
            </li>
            <li>
              <a href="#contact">Contact With Me</a>
            </li>
          </ul>
        </div>
        <p>Copyright ©2023 HeeSoon. All Rights Reserved.</p>
      </footer>
    );
  };
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

export default App;
