import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Captions.css";

const captions = [
  {
    id: 1,
    category: "Love",
    text: "You're my favorite notification ❤️",
  },
  {
    id: 2,
    category: "Travel",
    text: "Collecting memories, not things 🌍",
  },
  {
    id: 3,
    category: "Attitude",
    text: "I don't compete, I dominate 😎",
  },
  {
    id: 4,
    category: "Nature",
    text: "Sky above, earth below, peace within 🌿",
  },
  {
    id: 5,
    category: "Funny",
    text: "I'm on a seafood diet. I see food and eat it 😂",
  },
  {
    id: 6,
    category: "Motivation",
    text: "Dream big. Work hard. Stay humble 💪",
  },
  {
    id: 7,
    category: "Night",
    text: "Stars can't shine without darkness ✨",
  },
  {
    id: 8,
    category: "Selfie",
    text: "Confidence level: Selfie with no filter 📸",
  },
  {
    id: 9,
    category: "Attitude",
    text: "Gonna hate me, I couldn't care anymore 📸",
  },
   {
    id: 10,
    category: "self-love",
    text: "My heart belongs to ME ❤️",
  },
];

const Captions = () => {
  const [search, setSearch] = useState("");
  const { category } = useParams();

 const filteredCaptions = captions.filter((item) => {
  const matchesCategory = category
    ? item.category.toLowerCase() === category.toLowerCase()
    : true;

  const matchesSearch =
    item.category.toLowerCase().includes(search.toLowerCase()) ||
    item.text.toLowerCase().includes(search.toLowerCase());

  return matchesCategory && matchesSearch;
});

  const copyCaption = (text) => {
    navigator.clipboard.writeText(text);
    alert("Caption Copied!");
  };

  return (
    <div className="captions-page">

      <h1>📷 Instagram Captions</h1>

      <p className="subtitle">
        Find the perfect caption for every mood.
      </p>

      <input
        type="text"
        className="search-input"
        placeholder="Search caption..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="caption-grid">
        {filteredCaptions.map((item) => (
          <div className="caption-card" key={item.id}>

            <h3>{item.category}</h3>

            <p>{item.text}</p>

            <button onClick={() => copyCaption(item.text)}>
              📋 Copy
            </button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Captions;