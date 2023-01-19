import './style.css';
import { useState, useEffect } from 'react';

function requestRandomQuotes(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  // const zen_url = 'https://zenquotes.io/api/quotes/';
  const fit_url = "https://type.fit/api/quotes";

  useEffect(() => { 
    fetch(fit_url)
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function requestNewQuote() {
    setQuote(requestRandomQuotes(quotes));
  }

  return (
    <main>
      <h1>Sync Random Quotes</h1>
      <section>
        <button onClick={requestNewQuote}>New Quote</button>
        <h3>
          <span>"</span>
          {quote?.text}
        </h3>
        <i>~ {quote?.author}</i>
      </section>
    </main>
  );
}

export default App;
