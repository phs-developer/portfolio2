export const About = () => {
  return (
    <section id="about" className="flex about">
      <div className="container">
        <div className="about-left" data-aos="fade-up" data-aos-duration="1000">
          <img src="./img/me.jpg" alt="사진" />
        </div>
        <div
          className="about-right"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h2>About Me</h2>
          <p>
            안녕하세요, 박희순입니다.
            <br />
            직접 구현하고 눈으로 보여지는 작업이 좋아서 개발을 시작하게 되었고
            시간이 지날 수록 느낀 건 <strong>'아는 만큼 쓸 수 있다' </strong>
            였습니다. 프론트엔드 개발자는 시대에 맞춰 늘 새로운 기능을 배워야
            한다는 말에 걱정도 있었지만 직접 구현 가능한 정도의 실력이 되니
            오히려 더 많은 기능들을 알고 싶어졌습니다.
            <br />
            더불어, 프론트엔드를 공부하면서 배우는 즐거움을 알게되었습니다.
            퍼블리싱은 눈을 즐겁게 하고 프로그래밍은 뇌를 즐겁게 합니다. 물론,
            막히고 답답할 때도 있지만 지나고 보면 뿌듯함과 성취감이 가장 많이
            남습니다. 이를 알기에 더욱 배우고 더욱 쓸 수 있는 사람이 되고자
            노력하고있습니다.
          </p>
          <div className="edu">
            <h3>교육</h3>
            <ul>
              <li>zero-base 프론트엔드 스쿨 7기 (수료)</li>
              <li>삼육보건대학교 의료정보과 (졸업)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
