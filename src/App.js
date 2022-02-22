import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {" "}
          <h1> Dictionary </h1>{" "}
        </header>
        <main>
          <Dictionary defaultKeyword="cat"/>
        </main>
        <small>
          <footer className="App-footer mt-5">
            {" "}
            Coded by Roxette Garcia, open source code on{" "}
            <a
              href="https://github.com/heyroxette/dictionary-project-react"
              target="blank"
              rel="noopener noreferrer"
            >
              {" "}
              Github
            </a>
            .
          </footer>
        </small>
      </div>
    </div>
  );
}


