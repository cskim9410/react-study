import "./App.css";
import ReactPlayer from "react-player";

function Header(props) {
  return (
    <header>
      <h1>
        <a href="index.html">{props.title}</a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const liTag = props.topics.map((t) => (
    <li key={t.id}>
      <a href={`${t.id}.html`}>{t.title}</a>
    </li>
  ));

  return (
    <nav>
      <ul>{liTag}</ul>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      Hello, WEB
    </article>
  );
}

function App() {
  const topics = [
    {
      id: 1,
      title: "html",
      body: "html is ...",
    },
    {
      id: 2,
      title: "css",
      body: "css is ...",
    },
    {
      id: 3,
      title: "js",
      body: "js is ...",
    },
  ];

  return (
    <div className="App">
      <Header title="웹" />
      <Nav topics={topics} />
      <Article title="안녕" body="리액트" />
      {/* <ReactPlayer url="https://www.youtube.com/watch?v=kuspfABW7SE&ab_channel=Mera" /> */}
    </div>
  );
}

export default App;
