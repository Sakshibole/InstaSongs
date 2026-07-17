import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      <h1>About InstaVibe</h1>

      <p className="about-subtitle">
        Your one-stop destination for discovering the perfect songs and captions
        for every Instagram story and post.
      </p>

      <div className="about-grid">

        <div className="about-card">
          <h2>🎵 Song Suggestions</h2>
          <p>
            Discover trending songs based on your mood like Love, Travel,
            Workout, Party, Chill, Romantic and more.
          </p>
        </div>

        <div className="about-card">
          <h2>📝 Captions</h2>
          <p>
            Browse aesthetic, funny, emotional and motivational captions
            to make every post stand out.
          </p>
        </div>

        <div className="about-card">
          <h2>❤️ Favorites</h2>
          <p>
            Save your favorite songs and captions so you can access
            them anytime.
          </p>
        </div>

        <div className="about-card">
          <h2>💻 Built With</h2>
          <p>
            React JS, JavaScript, CSS3, React Router and modern responsive UI
            design.
          </p>
        </div>

      </div>

    </div>
  );
};

export default About;