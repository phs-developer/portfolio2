import meImg from "../../assets/img/me2.jpg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top flex">
        <h3>Park Hee Soon</h3>
        <div>
          <img src={meImg} alt="나" />
        </div>
      </div>
      <div className="footer-bottom flex">
        <h3>Links</h3>
        <ul className="flex">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#stacks">Stacks</a>
          </li>
          <li>
            <a href="#project">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact With Me</a>
          </li>
        </ul>
      </div>
      <p>Copyright ©2023 HeeSoon. All Rights Reserved.</p>
    </footer>
  );
}
