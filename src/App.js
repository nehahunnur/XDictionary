import React, { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  // Provided dictionary
  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  // Handle search functionality
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setDefinition("Word not found in the dictionary.");
      return;
    }

    const foundWord = dictionary.find(item => item.word.toLowerCase() === searchTerm.toLowerCase());
    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div style={{ marginTop: "20px" }}>
        <strong>Definition:</strong>
        <p>{definition}</p>
      </div>
    </div>
  );
};

export default App;
