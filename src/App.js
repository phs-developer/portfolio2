import "./App.css";

function App() {
  const Header = () => {
    return (
      <header className="flex">
        <div className="container">
          <h1>
            반갑습니다,
            <p>FE 개발자 입니다.</p>
          </h1>
          <h2>박희순</h2>
          <ul className="flex">
            <li>
              <img src="./img/github.png" alt="github" />
            </li>
            <li>
              <img src="./img/blog.png" alt="blog" />
            </li>
            <li>
              <img src="./img/email.png" alt="email" />
            </li>
          </ul>
        </div>
      </header>
    );
  };

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
