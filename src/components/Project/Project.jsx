import heroImg from "../../assets/img/hero.jpg";
import mangoImg from "../../assets/img/mangotoon.jpg";
import portfolioImg from "../../assets/img/portfolio.jpg";
import footImg from "../../assets/img/foot.jpg";

import { useState } from "react";
import { Page } from "./Page/Page";

export const Project = () => {
  const [name, setName] = useState("");
  const [openPage, setOpenPage] = useState(false);

  function handleOnPage(event) {
    const name = event.currentTarget.children[0].innerText;
    setName(name);
    setOpenPage(true);
  }

  return (
    <section id="project" className="project">
      <h2>My Work</h2>
      <Page name={name} openPage={openPage} />
      <p>*click project!</p>
      <ul className="work">
        <li name="hero" onClick={handleOnPage}>
          <p>HERO</p>
          <img src={heroImg} alt="히어로 프로젝트" />
        </li>
        <li name="mango" onClick={handleOnPage}>
          <p>MANGO TOON</p>
          <img src={mangoImg} alt="망고툰 프로젝트" />
        </li>
        <li name="portfolio" onClick={handleOnPage}>
          <p>PORTFOLIO</p>
          <img src={portfolioImg} alt="포트폴리오" />
        </li>
        <li name="foot" onClick={handleOnPage}>
          <p>FOOT</p>
          <img src={footImg} alt="풋마켓 프로젝트" />
        </li>
      </ul>
    </section>
  );
};
