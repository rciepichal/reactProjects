import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  // console.log(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {data.map((question) => {
            // console.log(question.id);
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
