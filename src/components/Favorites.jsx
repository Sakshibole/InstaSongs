import React from "react";
import "./Favorites.css";

const Favorites = () => {
  return (
    <div className="favorites-page">

      <h1>❤️ Favorites</h1>

      <p className="subtitle">
        Save your favorite songs and captions here.
      </p>

      <div className="empty-box">

        <div className="heart">💖</div>

        <h2>No Favorites Yet</h2>

        <p>
          You haven't added any songs or captions to your favorites.
        </p>

        <button>Add your Favorites</button>

      </div>

    </div>
  );
};

export default Favorites;