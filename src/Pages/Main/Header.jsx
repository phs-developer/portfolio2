import { useState } from "react";
import github from "../../assets/img/github.png";
import blog from "../../assets/img/blog.png";
import email from "../../assets/img/email.png";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import styles from "./Main.module.css";
import cx from "clsx";

export default function Header() {
  const [viewOn, setViewOn] = useState(false);
  // aos 라이브러리
  AOS.init();
  AOS.refresh();

  // 4.4초 후 노출
  setTimeout(() => {
    setViewOn(true);
  }, 4400);

  return (
    <header id="home">
      <div className={styles.container}>
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
        <h2 className={cx({ [styles.view]: viewOn })}>박희순</h2>
        <ul className={cx({ [styles.view]: viewOn })}>
          <li>
            <a href="https://github.com/phs-developer">
              <img src={github} alt="github" />
            </a>
          </li>
          <li>
            <a href="https://blog.naver.com/gmltnscjswo">
              <img src={blog} alt="blog" />
            </a>
          </li>
          <li>
            <a href="mailto:phs970824@daum.net">
              <img src={email} alt="email" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
