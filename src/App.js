import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React and Morty</h1>
      </header>
      <main>
        <section>
          <article>
            <img
              src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
              alt="Morty Smith"
            />
            <p>Morty Smith</p>
            <button>Show more</button>
          </article>
        </section>
      </main>
      <footer>
        <nav>
          <ul>
            <li>
              <a href="#">Link1</a>
            </li>
            <li>
              <a href="#">Link2</a>
            </li>
            <li>
              <a href="#">Link3</a>
            </li>
            <li>
              <a href="#">Link4</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
