import { useState, useEffect } from "react";
export default App;
const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#77B1A9",
  "#73A857",
  "#E83F59",
  "#15139C",
  "#731F3B",
  "#EAD843",
  "#733D1F",
  "#66731F",
  "#9C1318",
  "#571D5C",
  "#000B5C",
  "#0014A8",
  "#015C45",
];

const root = document.querySelector(":root");
console.log(getComputedStyle(root).getPropertyValue("--background"));
function App() {
  const URL =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("Darkness Always Provide new Hope");
  const [author, setAuther] = useState("Mukul Sharma");

  const fetchQuotes = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setQuotes(data?.quotes);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const randomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const getQuote = () => {
    if (quotes) {
      const { quote, author } = randomQuote();
      setQuote(quote);
      setAuther(author);
      root.style.setProperty(
        "--background",
        colors[Math.floor(Math.random() * colors.length)]
      );
    }
  };

  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">
          <i className="fas fa-quote-left"></i>
          {quote}
        </div>
        <div id="author">-{author}</div>

        <div id="share">
          <div id="new-quote">
            <button onClick={getQuote}>New Quote</button>
          </div>
          <div>
            <a
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote}+${author}`}
              rel="noreferrer"
              id="tweet-quote"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
