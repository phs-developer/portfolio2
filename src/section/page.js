import { useEffect, useState } from "react";

export const Page = ({ name }) => {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      //json src 폴더 안에서 작업하고 싶은데 경로가 헷갈린다!!
      const response = await fetch("page.json");
      const data = await response.json();
      console.log("1");
    })();
  }, []);
  console.log(name.toLowerCase().replaceAll(" ", ""));
  const imgSrc = `./img/${name.toLowerCase().replaceAll(" ", "")}.jpg`;

  return (
    <article className="page">
      <button>
        <img src="./img/close.png" alt="닫기" />
      </button>
      <div className="content flex">
        <h3>{name}</h3>
        <img src={imgSrc} alt="프로젝트 이미지" />
        <div className="text-tag">
          <p className="text">
            Vanilla JS로 구현한 웹소설/웹툰 전자책 사이트의 메인 페이지입니다.
            <br />
            PC 적응형으로 제작된 첫 개인 프로젝트이며 기능보다는 깔끔한 UI에
            초점을 맞춰 구현하였습니다.
            <br />
            json 데이터는 비동기 처리를 통해 받아왔으며 3개 컴포넌트만을
            사용하여 재사용성을 높혔습니다.
          </p>
          <div className="tag">
            <ul>
              <li>#Vanila JS</li>
              <li>#CSS</li>
            </ul>
            <ul>
              <li>사이트 보기</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};
