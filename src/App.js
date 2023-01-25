import './style.css';
import { useState, useEffect } from 'react';

function requestRandomQuotes(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9a07fdb718mshfca4d8048eb8a20p1bc3d3jsn40593d32b9c1',
      'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com'
    }
  };

  // const zen_url = 'https://zenquotes.io/api/quotes/';
  const fit_url = "https://type.fit/api/quotes";

  useEffect(() => { 
    // fetch(fit_url)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setQuotes(json);
    //     setQuote(json[0]);
    //   });
    fetch('https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, []);

  function requestNewQuote() {
    setQuote(requestRandomQuotes(quotes));
  }

  return (
    <main>
      <h1>Random Quotes</h1>
      <section>
        <button onClick={requestNewQuote}>New Quote</button>
        <h3>
          <span>"</span>
          {quote?.text}
          <span>"</span>
        </h3>
        <i>~ {quote?.author}</i>
      </section>
    </main>
  );
}

export default App;
