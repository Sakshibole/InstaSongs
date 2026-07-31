import React, { useState, useEffect } from "react";
import "./Songs.css";
import axios from "axios";
import { useParams } from "react-router-dom";

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
  title: "Mere Dholna 3.0",
  artist: "Shreya Ghoshal",
  mood: "Romantic",
  image: "/images/mere-dholna.jpg",
  link: "https://youtu.be/"
},
{
  id: 13,
  title: "Sun Raha Hai (Female)",
  artist: "Shreya Ghoshal",
  mood: "Sad",
  image: "/images/sun-raha-hai-female.jpg",
  link: "https://youtu.be/"
},
{
  id: 14,
  title: "Param Sundari",
  artist: "Shreya Ghoshal",
  mood: "Party",
  image: "/images/param-sundari.jpg",
  link: "https://youtu.be/"
},
{
  id: 15,
  title: "Excuses",
  artist: "AP Dhillon",
  mood: "Chill",
  image: "/images/excuses.jpg",
  link: "https://youtu.be/"
},
{
  id: 16,
  title: "Brown Munde",
  artist: "AP Dhillon",
  mood: "Party",
  image: "/images/brown-munde.jpg",
  link: "https://youtu.be/"
},
{
  id: 17,
  title: "Insane",
  artist: "AP Dhillon",
  mood: "Energetic",
  image: "/images/insane.jpg",
  link: "https://youtu.be/"
},
{
  id: 18,
  title: "Bol Do Na Zara",
  artist: "Armaan Malik",
  mood: "Romantic",
  image: "/images/bol-do-na-zara.jpg",
  link: "https://youtu.be/"
},
{
  id: 19,
  title: "Pehla Pyaar",
  artist: "Armaan Malik",
  mood: "Love",
  image: "/images/pehla-pyaar.jpg",
  link: "https://youtu.be/"
},
{
  id: 20,
  title: "Main Rahoon Ya Na Rahoon",
  artist: "Armaan Malik",
  mood: "Emotional",
  image: "/images/main-rahoon.jpg",
  link: "https://youtu.be/"
},
{
  id: 21,
  title: "Zara Sa",
  artist: "KK",
  mood: "Romantic",
  image: "/images/zara-sa.jpg",
  link: "https://youtu.be/"
},
{
  id: 22,
  title: "Khuda Jaane",
  artist: "KK",
  mood: "Love",
  image: "/images/khuda-jaane.jpg",
  link: "https://youtu.be/"
},
{
  id: 23,
  title: "Tu Hi Meri Shab Hai",
  artist: "KK",
  mood: "Romantic",
  image: "/images/tu-hi-meri-shab-hai.jpg",
  link: "https://youtu.be/"
},
{
  id: 24,
  title: "Kesariya",
  artist: "Pritam",
  mood: "Romantic",
  image: "/images/kesariya.jpg",
  link: "https://youtu.be/"
},
{
  id: 25,
  title: "Tum Se Hi",
  artist: "Pritam",
  mood: "Love",
  image: "/images/tum-se-hi.jpg",
  link: "https://youtu.be/"
},
{
  id: 26,
  title: "Bulleya",
  artist: "Pritam",
  mood: "Emotional",
  image: "/images/bulleya.jpg",
  link: "https://youtu.be/"
},
];

const Songs = () => {
  const [search, setSearch] = useState("");
const [favorites, setFavorites] = useState([]);
 const { artist } = useParams();

 useEffect(() => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  if (!loggedInUser) return;

  axios
    .get(`http://localhost:9091/favorites/${loggedInUser.id}`)
    .then((response) => {
      setFavorites(response.data);
    })
    .catch((error) => console.log(error));
}, []);

const isFavorite = (songTitle) => {
  return favorites.some((fav) => fav.songTitle === songTitle);
};

 const filteredSongs = songs.filter((song) => {
  // Filter by artist if an artist was clicked
  const matchesArtist = artist
    ? song.artist.toLowerCase() === artist.toLowerCase()
    : true;

  // Filter by search
  const matchesSearch =
    song.title.toLowerCase().includes(search.toLowerCase()) ||
    song.artist.toLowerCase().includes(search.toLowerCase()) ||
    song.mood.toLowerCase().includes(search.toLowerCase());

  return matchesArtist && matchesSearch;
});

const addToFavorites = async (song) => {

  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  if (!loggedInUser) {
    alert("Please login first.");
    return;
  }

  try {

    if (isFavorite(song.title)) {

      await axios.delete(
        `http://localhost:9091/favorites/${loggedInUser.id}/${song.title}`
      );

      setFavorites(
        favorites.filter((fav) => fav.songTitle !== song.title)
      );

      alert("Removed from Favorites 💔");

    } else {

      const response = await axios.post(
        "http://localhost:9091/favorites",
        {
          userId: loggedInUser.id,
          songTitle: song.title,
          artist: song.artist,
          mood: song.mood,
          youtubeLink: song.link,
          image: song.image
        }
      );

      setFavorites([...favorites, response.data]);

      alert("Added to Favorites ❤️");
    }

  } catch (error) {
    console.log(error);
  }
};
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
              <button className="play">▶ Play</button>
            </a>
            <button className="favorite" onClick={() => addToFavorites(song)}>
                      {isFavorite(song.title) ? "❤️" : "🤍"}
              </button>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Songs;