import React from "react";
import "./Favorites.css";

const Favorites = ({ favorites = [] }) => {
  return (
    <div className="favorites-page">
      <h1>❤️ Favorites</h1>

      <p className="subtitle">
        Save your favorite songs and captions here.
      </p>

      {favorites.length === 0 ? (
        <div className="empty-box">
          <div className="heart">💖</div>

          <h2>No Favorites Yet</h2>

          <p>
            You haven't added any songs or captions to your favorites.
          </p>

          <button>Add Your Favorites</button>
        </div>
      ) : (
        <div className="favorites-list">
          {favorites.map((song) => (
            <div className="song-card" key={song.id}>
              <h3>{song.title}</h3>
              <p>{song.artist}</p>

              <a
                href={song.Link}
                target="_blank"
                rel="noreferrer"
              >
                ▶ Play Song
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;