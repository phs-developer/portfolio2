import { Page } from "./page.js";
import { useState } from "react";

export const Project = () => {
  const [name, setName] = useState("");
  function handleOnPage(event) {
    const name = event.currentTarget.children[0].innerText;
    const page = document.querySelector(".page");
    setName(name);
    page.style.visibility = "visible";
  }

  return (
    <section id="project" className="project">
      <h2>My Work</h2>
      <Page name={name} />
      <p>*click project!</p>
      <ul className="work">
        <li name="hero" onClick={handleOnPage}>
          <p>HERO</p>
          <img src="./img/hero.jpg" alt="" />
        </li>
        <li name="mango" onClick={handleOnPage}>
          <p>MANGO TOON</p>
          <img src="./img/mangotoon.jpg" alt="" />
        </li>
        <li name="portfolio" onClick={handleOnPage}>
          <p>PORTFOLIO</p>
          <img src="./img/portfolio.jpg" alt="" />
        </li>
        <li name="foot" onClick={handleOnPage}>
          <p>FOOT</p>
          <img src="./img/foot.jpg" alt="" />
        </li>
      </ul>
    </section>
  );
};
