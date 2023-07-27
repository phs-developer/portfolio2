import Typewriter from "typewriter-effect";
import github from "../../assets/img/github.png";
import blog from "../../assets/img/blog.png";
import email from "../../assets/img/email.png";

export default function Header() {
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
              {/* <img src="../../assets/img/github.png" alt="github" /> */}
              <img src={github} alt="github" />
            </a>
          </li>
          <li>
            <a href="https://github.com/phs-developer">
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
