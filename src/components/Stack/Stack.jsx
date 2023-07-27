import styles from "./Stack.module.css";
import cx from "clsx";

export const Stack = () => {
  return (
    <section id="stacks" className={styles.stack}>
      <h2>Stacks</h2>
      <div className={styles.container} data-aos="zoom-out">
        <div className={cx(styles.skill, styles.skillTop)}>
          <h3>SKILL</h3>
          <ul>
            <li>
              <h4>HTML</h4>
              <p>
                시멘틱 태그 사용과 웹접근성을 고려하여 웹표준을 준수하는
                마크업이 가능합니다.
              </p>
            </li>
            <li>
              <h4>CSS</h4>
              <p>
                유연한 선택자 활용과 Styled Component, emotion을 통한 디자인이
                가능합니다.
              </p>
            </li>
            <li>
              <h4>JAVASCRIPT</h4>
              <p>
                순수 자바스크립트로 사이트 제작이 가능하며, 가독성 좋은 코드
                구현을 지향합니다.
              </p>
            </li>
            <li>
              <h4>REACT</h4>
              <p>
                기본적인 hook사용과 life cycle을 이해하며 재사용성이 높은
                컴포넌트를 제작하는 것이 목표입니다.
              </p>
            </li>
            <li>
              <h4>TYPESCRIPT</h4>
              <p>JS의 타입 이슈 방지를 위한 정적 언어를 사용합니다.</p>
            </li>
          </ul>
        </div>
        <div className={cx(styles.skill)}>
          <h3>TOOL</h3>
          <ul>
            <li>
              <h4>VS CODE</h4>
              <p>코드에 편리한 확장 프로그램을 사용하여 개발하고 있습니다.</p>
            </li>
            <li>
              <h4>GIT</h4>
              <p>
                git 명령어를 통한 레파지토리 접근과 파일 관리를 하고있습니다.
              </p>
            </li>
            <li>
              <h4>FIGMA</h4>
              <p>figma 파일을 기반으로 개발한 경험이 있습니다.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
