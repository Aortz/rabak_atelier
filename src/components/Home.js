import React, { useState, useEffect } from 'react';
import { GalleryItems } from '../data/GalleryItems';

const Home = () => {
  const [randomArtwork, setRandomArtwork] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * GalleryItems.length);
    setRandomArtwork(GalleryItems[randomIndex]);
  }, []);

  if (!randomArtwork) return null;

  return (
    <div className="content">
      <div className="sidebar">
        <img src="/sidebar.jpg" alt="Decorative sidebar" />
      </div>
      <div className="artwork-display">
        <img 
          src={randomArtwork.src} 
          alt={randomArtwork.alt} 
          className="artwork-image" 
        />
        <div className="artwork-details">
          <h2>{randomArtwork.title}</h2>
          <p>{randomArtwork.medium}</p>
          <p>{randomArtwork.dimensions}</p>
          <p className="price">{randomArtwork.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;