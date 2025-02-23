import React from 'react';
// import './Gallery.css';

const More = () => {
  const galleryItems = [
    {
      id: 1,
      src: "/gallery/img1.jpg",
      alt: "Collection of watercolor paintings"
    },
    {
      id: 2,
      src: "/gallery/img2.jpg",
      alt: "Katong Sun watercolor"
    },
    {
      id: 3,
      src: "/gallery/img3.jpg",
      alt: "Spiral staircase watercolor"
    }
  ];

  return (
    <div className="gallery-content">
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default More;