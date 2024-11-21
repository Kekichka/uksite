import React, { useState } from "react";
import "../styles/InterestingFacts.css";

// Sample authors and their facts
const authors = [
  {
    name: "Тарас Шевченко",
    facts: [
      "Taras Shevchenko was born in 1814 in Ukraine.",
      "Shevchenko was not only a poet but also an artist.",
      "His work played a major role in shaping modern Ukrainian literature."
    ]
  },
  {
    name: "Іван Франко",
    facts: [
      "Ivan Franko was a famous Ukrainian poet and writer, born in 1856.",
      "He was also a political activist and public figure.",
      "Franko is regarded as one of the most influential Ukrainian writers of the 19th century."
    ]
  },
  {
    name: "Леся Українка",
    facts: [
      "Lesya Ukrainka was a famous Ukrainian poet and playwright, born in 1871.",
      "She was a key figure in the development of modern Ukrainian literature.",
      "Her works reflect themes of national identity and struggle for freedom."
    ]
  }
];

function App() {
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const handleAuthorClick = (author) => {
    setSelectedAuthor(author);
    setCurrentFactIndex(0); // Reset the fact index when a new author is selected
  };

  const nextFact = () => {
    setCurrentFactIndex((prevIndex) =>
      prevIndex < selectedAuthor.facts.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevFact = () => {
    setCurrentFactIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : selectedAuthor.facts.length - 1
    );
  };

  return (
    <div className="container">
      <div className="authors-list">
        <h2>Автори</h2>
        <ul>
          {authors.map((author) => (
            <li
              key={author.name}
              onClick={() => handleAuthorClick(author)}
              className={selectedAuthor === author ? "active" : ""}
            >
              {author.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="facts">
        {selectedAuthor ? (
          <>
            <h3>{selectedAuthor.name}</h3>
            <div className="fact">
              <p>{selectedAuthor.facts[currentFactIndex]}</p>
            </div>
            <div className="arrows">
              <button onClick={prevFact}>&lt;</button>
              <button onClick={nextFact}>&gt;</button>
            </div>
          </>
        ) : (
          <h1>Оберіть автора щоб побачити факти</h1>
        )}
      </div>
    </div>
  );
}

export default App;
