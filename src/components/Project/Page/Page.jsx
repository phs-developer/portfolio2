import { useEffect, useState } from "react";

export const Page = ({ name, openPage }) => {
  const [data, setData] = useState(null);
  const imgSrc = `./img/${name.toLowerCase().replaceAll(" ", "")}.jpg`;
  const reName = name.toLowerCase().replaceAll(" ", "");
  useEffect(() => {
    (async () => {
      //json src 폴더 안에서 작업하고 싶은데 경로가 헷갈린다!!
      const response = await fetch("page.json");
      const data = await response.json();
      setData(data[reName]);
    })();
  }, [name, reName]);

  //컴포넌트 닫기 버튼 핸들러
  function handleCloseBtn() {
    const page = document.querySelector(".page");
    page.style.visibility = "hidden";
  }

  // tech toggle 핸들러
  function handleToggleToTech(e) {
    const techItem = document.querySelector(`.${e.currentTarget.className}>p`);
    techItem.style.display =
      techItem.style.display === "block" ? "none" : "block";
  }

  if (!data) {
    // project.js 에서 const page 오류 방지
    return <article className="page"></article>;
  } else {
    return (
      <article className="page">
        <button onClick={handleCloseBtn}>
          <img src="./img/close.png" alt="닫기" />
        </button>
        <div className="content flex">
          <h3>{name} (개인)</h3>
          <img src={imgSrc} alt="프로젝트 이미지" />
          <div>
            <p className="text">{data.text}</p>
            <div className="tech">
              {data.tech.map((e, i) => {
                return (
                  <div
                    key={Object.keys(e)}
                    className={`${reName}-${i}`}
                    onClick={handleToggleToTech}
                  >
                    <h4>
                      {i + 1}. {Object.keys(e)}
                      <img src="./img/triangle.png" alt="열기" />
                    </h4>
                    <p>{e[Object.keys(e)]}</p>
                  </div>
                );
              })}
            </div>
            <div className="tag">
              <ul>
                {data.tag.map((e) => {
                  return <li key={e}>#{e}</li>;
                })}
              </ul>
              <ul>
                <li>
                  <a href={data.site} target="blank">
                    사이트 보기
                  </a>
                </li>
                <li>
                  <a href={data.github} target="blank">
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    );
  }
};
