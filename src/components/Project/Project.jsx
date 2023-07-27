import heroImg from "../../assets/img/hero.jpg";
import mangoImg from "../../assets/img/mangotoon.jpg";
import portfolioImg from "../../assets/img/portfolio.jpg";
import footImg from "../../assets/img/foot.jpg";
import { useState } from "react";
import { Page } from "./Page.jsx";
import styles from "./Project.module.css";

export const Project = () => {
  const [opened, setOpened] = useState(false);
  const [data, setData] = useState(null);

  function handleOnPage(event) {
    const name = event.currentTarget.children[0].innerText;
    const lowerName = name.toLowerCase().replaceAll(" ", "");
    (async () => {
      //json src 폴더 안에서 작업하고 싶은데 경로가 헷갈린다!!
      fetch("./page.json", {
        headers: {
          Accept: "application / json",
        },
      })
        .then((res) => res.json())
        .then((data) => setData(data[lowerName]));
    })();
    setOpened(true);
  }

  return (
    <section id="project" className={styles.project}>
      <h2>My Work</h2>
      {data && (
        <Page opened={opened} data={data} closed={() => setOpened(false)} />
      )}
      <p>*click project!</p>
      <ul className={styles.work}>
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
