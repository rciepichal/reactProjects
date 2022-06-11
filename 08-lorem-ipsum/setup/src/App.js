import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = Number(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h3>Tired of lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)}></input>
        <button className="btn" type="submit">
          Generate!
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, id) => {
          return <p key={id}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
