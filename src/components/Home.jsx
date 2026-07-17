import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">

      <div className="home-content">

        <span className="tag">🎧 Trending Music & Captions</span>

        <h1>
          Find the Perfect
          <br />
          Song & Caption
        </h1>

        <p className="quote">
          "Every story deserves the perfect soundtrack."
        </p>

        <p className="description">
          Discover trending songs and aesthetic captions for your Instagram
          stories, reels, and posts. Search by mood and find the perfect vibe
          in seconds.
        </p>

        <div className="buttons">
          <button className="primary-btn">Explore Songs</button>
          <button className="secondary-btn">Browse Captions</button>
        </div>

      </div>

      <div className="home-image">
        <img
          src="https://cdn.dribbble.com/userupload/5982423/file/original-07a4a21d41aa635aef9e9efbfd0ca992.png?resize=600x0"
          alt="Music Illustration"
        />
      </div>

    </section>
  );
};

export default Home;