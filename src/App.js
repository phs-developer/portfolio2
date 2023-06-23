import "./App.css";
import { About } from "./section/about.js";
import { Contact } from "./section/contact.js";
import { Project } from "./section/project.js";
import { Stack } from "./section/stack";

function App() {
  const Header = () => {
    return (
      <header className="flex">
        <div className="container">
          <h1>
            안녕하세요,
            <p>저는 박희순/FE 개발자 입니다.</p>
          </h1>
          <h2>박희순</h2>
          <ul className="flex">
            <li>
              <img src="./img/github.png" alt="github" />
            </li>
            <li>
              <img src="./img/blog.png" alt="blog" />
            </li>
            <li>
              <img src="./img/email.png" alt="email" />
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
          <ul>
            <li>
              <a href="!#">About Me</a>
            </li>
            <li>
              <a href="!#">Stack</a>
            </li>
            <li>
              <a href="!#">My Work</a>
            </li>
            <li>
              <a href="!#">Contact With Me</a>
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
