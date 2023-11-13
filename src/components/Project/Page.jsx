import { useState } from "react";
import styles from "./Project.module.css";
import triangleImg from "../../assets/img/triangle.png";
import mangoImg from "../../assets/img/mangotoon.jpg";
import heroImg from "../../assets/img/hero.jpg";
import footImg from "../../assets/img/foot.jpg";
import portfolioImg from "../../assets/img/portfolio.jpg";
import closeImg from "../../assets/img/close.png";
import musicImg from "../../assets/img/music2.png";
import cx from "clsx";

export const Page = ({ opened, data, closed }) => {
  const imgs = {
    1: mangoImg,
    2: heroImg,
    3: portfolioImg,
    4: footImg,
    5: musicImg,
  };

  return (
    <article className={cx(styles.page, { [styles.active]: opened })}>
      <button onClick={closed}>
        <img src={closeImg} alt="닫기" />
      </button>
      <div className={styles.content}>
        <h3>{data.name} (개인)</h3>
        <img src={imgs[data.id]} alt="프로젝트 이미지" />
        <div>
          <p className={styles.text}>{data.text}</p>
          <Tech tech={data.tech} />
          <Tag tag={data} />
        </div>
      </div>
    </article>
  );
};

// 주요 기능
function Tech({ tech }) {
  //주요 기능 활설화 toggle
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.tech}>
      <h4 onClick={() => setToggle(!toggle)}>
        Detail <img src={triangleImg} alt="열기" />
      </h4>
      {tech.map((e, i) => {
        return (
          <div key={Object.keys(e)} className={cx({ [styles.toggle]: toggle })}>
            <h4>
              {i + 1}. {Object.keys(e)}
            </h4>
            <p>{e[Object.keys(e)]}</p>
          </div>
        );
      })}
    </div>
  );
}

// 관련 태그
function Tag({ tag }) {
  return (
    <div className={styles.tag}>
      <ul>
        {tag.tag.map((e) => {
          return <li key={e}>#{e}</li>;
        })}
      </ul>
      <ul>
        <li>
          <a href={tag.site} target="blank">
            사이트 보기
          </a>
        </li>
        <li>
          <a href={tag.github} target="blank">
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}
