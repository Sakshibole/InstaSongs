import React, { useState } from "react";
import "./Songs.css";

const songs = [
   {
    id: 1,
    title: "Night Changes",
    artist: "One Direction",
    mood: "Love",
    Link: "https://www.youtube.com/watch?v=I3IcQsfC7jA&list=RDI3IcQsfC7jA&start_radio=1"
  },
  {
    id: 2,
    title: "Elevated",
    artist: "Arijit Singh",
    mood: "Attitude",
    Link:"https://www.youtube.com/watch?v=9CvwbW9UhJc&list=RD9CvwbW9UhJc&start_radio=1"
  },
  {
    id: 3,
    title: "Ilahi",
    artist: "Arijit Singh",
    mood: "Travel",
    Link: "https://www.youtube.com/watch?v=6w67NOaRe-w&list=RD6w67NOaRe-w&start_radio=1"
  },
  {
    id: 4,
    title: "Baarish",
    artist: "Glass Animals",
    mood: "Rain",
    Link: "https://www.youtube.com/watch?v=BNfAf4To73c&list=RDBNfAf4To73c&start_radio=1"
  },
  {
    id: 5,
    title: "On My Way",
    artist: "Alan Walker",
    mood: "Motivation",
  },
  {
    id: 6,
    title: "Kesariya",
    artist: "Arijit Singh",
    mood: "Love",
  },
  {
    id: 7,
    title: "Apna Bana Le",
    artist: "Arijit Singh",
    mood: "Romantic",
  },
  {
    id: 8,
    title: "Perfect",
    artist: "Ed Sheeran",
    mood: "Love",
  },
  {
    id: 9,
    title: "Believer",
    artist: "Imagine Dragons",
    mood: "Workout",
  },
  {
    id: 10,
    title: "Thunder",
    artist: "Imagine Dragons",
    mood: "Energy",
  },
  {
    id: 11,
    title: "Shape of You",
    artist: "Ed Sheeran",
    mood: "Party",
  },
  {
    id: 12,
    title: "Lovely",
    artist: "Billie Eilish",
    mood: "Sad",
  },
  {
    id: 13,
    title: "Heat Waves",
    artist: "Glass Animals",
    mood: "Chill",
  },
  {
    id: 14,
    title: "Faded",
    artist: "Alan Walker",
    mood: "Relax",
  },
  {
    id: 15,
    title: "Closer",
    artist: "The Chainsmokers",
    mood: "Memories",
  },
  {
    id: 16,
    title: "Senorita",
    artist: "Shawn Mendes",
    mood: "Romantic",
  },
  {
    id: 17,
    title: "Levitating",
    artist: "Dua Lipa",
    mood: "Dance",
  },
  {
    id: 18,
    title: "Calm Down",
    artist: "Rema",
    mood: "Party",
  },
  {
    id: 19,
    title: "Blinding Lights",
    artist: "The Weeknd",
    mood: "Night Drive",
  },
  {
    id: 20,
    title: "Perfect Strangers",
    artist: "Jonas Blue",
    mood: "Travel",
  },
  {
    id: 21,
    title: "Raataan Lambiyan",
    artist: "Jubin Nautiyal",
    mood: "Love",
  },
  {
    id: 22,
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    mood: "Emotional",
  },
  {
    id: 23,
    title: "Khairiyat",
    artist: "Arijit Singh",
    mood: "Heartbreak",
  },
  {
    id: 24,
    title: "Dil Diyan Gallan",
    artist: "Atif Aslam",
    mood: "Romantic",
  },
  {
    id: 25,
    title: "Tera Hone Laga Hoon",
    artist: "Atif Aslam",
    mood: "Love",
  },
  {
    id: 26,
    title: "Agar Tum Saath Ho",
    artist: "Alka Yagnik",
    mood: "Sad",
  },
  {
    id: 27,
    title: "Hall of Fame",
    artist: "The Script",
    mood: "Inspiration",
  },
  {
    id: 28,
    title: "Unstoppable",
    artist: "Sia",
    mood: "Confidence",
  },
  {
    id: 29,
    title: "Bones",
    artist: "Imagine Dragons",
    mood: "Workout",
  },
  {
    id: 30,
    title: "Starboy",
    artist: "The Weeknd",
    mood: "Night",
  },
];

const Songs = () => {
  const [search, setSearch] = useState("");

  const filteredSongs = songs.filter(
    (song) =>
      song.mood.toLowerCase().includes(search.toLowerCase()) ||
      song.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="songs-page">

      <h1>🎵 Song Recommendations</h1>

      <p className="subtitle">
        Find the perfect song for your Instagram Story.
      </p>

      <input
        type="text"
        className="search-input"
        placeholder="Search by mood or song..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="song-grid">

        {filteredSongs.map((song) => (
          <div className="song-card" key={song.id}>

            <h3>{song.title}</h3>

            <p>{song.artist}</p>

            <span className="mood">{song.mood}</span>

            <a
              href={song.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>▶ Play</button>
            </a>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Songs;