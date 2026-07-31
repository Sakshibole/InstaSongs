import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
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
          <button className="primary-btn" onClick={() => navigate("/Songs")}>Explore Songs</button>
          <button className="secondary-btn" onClick={() => navigate("/Captions")}>Browse Captions</button>
        </div>

      </div>

      <div className="home-image">
        <img
          src="https://cdn.dribbble.com/userupload/5982423/file/original-07a4a21d41aa635aef9e9efbfd0ca992.png?resize=600x0"
          alt="Music Illustration"
        />
      </div>
      </section>

       <section className="featured-artists">
        <h2>Featured Artists</h2>

        <div className="artist-container">
          <div className="artist-card"  onClick={() => navigate("/Songs/Arijit Singh")}>
            <img src="/images/Arijit-Singh.avif" alt="Arijit Singh" />
            <p>Arijit Singh</p>
          </div>

          <div className="artist-card"  onClick={() => navigate("/Songs/Shreya Ghoshal")}>
            <img src="/images/Shreya_Ghoshal.jpg" alt="Shreya goshal" />
            <p>Shreya Ghoshal</p>
          </div>

          <div className="artist-card"  onClick={() => navigate("/Songs/AP Dhillon")}>
            <img src="/images/ap-dhillon.avif" alt="AP Dhillon" />
            <p>AP Dhillon</p>
          </div>

          <div className="artist-card"  onClick={() => navigate("/Songs/Armaan Malik")}>
            <img src="/images/Armaan_Malik.jpg" alt="Armaan Malik" />
            <p>Armaan Malik</p>
          </div>

           <div className="artist-card"  onClick={() => navigate("/Songs/Pritam")}>
            <img src="/images/pritam.jpg" alt="pritam" />
            <p>Pritam</p>
          </div>

          {/* <div className="artist-card" onClick={() => navigate("/Songs/KK")}>
            <img src="/images/KK.jpg" alt="KK" />
            <p>KK</p>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Home;