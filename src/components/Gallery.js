import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Gallery.css';
import { GalleryItems } from '../data/GalleryItems';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showInquireModal, setShowInquireModal] = useState(false);


  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  const handleInquireClick = (e) => {
    e.stopPropagation();
    setShowInquireModal(true);
  };

  const handleCloseInquireModal = () => {
    setShowInquireModal(false);
  };

  return (
    <div className="gallery-content">
      <div className="gallery-grid">
        {GalleryItems.map((item) => (
          <div key={item.id} className="gallery-item" onClick={() => handleImageClick(item)}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    

      {/* Render popup in a portal */}
      {selectedImage && ReactDOM.createPortal(
        <div className="popup-overlay" onClick={handleClosePopup}>
          <button className="close-btn" onClick={handleClosePopup}>↙↘</button>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <h1 className="main-title">Rabak Atelier</h1>
            <div className="popup-main">
              <div className="image-container">
                <img src={selectedImage.src} alt={selectedImage.alt} />
              </div>
              <div className="details-container">
                <div className="artwork-info">
                  <h2>{selectedImage.title}</h2>
                  <div className="specs">
                    <p>{selectedImage.dimensions}</p>
                    <p>{selectedImage.medium}</p>
                    <p>{selectedImage.year}</p>
                  </div>
                </div>
                <div className="popup-info">
                  <span className="price">{selectedImage.price}</span>
                  <button className="inquire-btn" onClick={handleInquireClick}>Inquire</button>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.getElementById('root')
      )}

      {/* Add the inquire modal */}
      {showInquireModal && ReactDOM.createPortal(
        <div className="inquire-modal-overlay" onClick={handleCloseInquireModal}>
          <div className="inquire-modal" onClick={e => e.stopPropagation()}>
            <h2>Let's Connect</h2>
            <p>Reach out via the following avenues.</p>
            <div className="contact-options">
              <div className="contact-option">
                <h3>Email</h3>
                <a href="mailto:rabak.atelier@gmail.com">rabak.atelier@gmail.com</a>
              </div>
              <div className="contact-option">
                <h3>Instagram</h3>
                <a href="https://instagram.com/rabak.atelier" target="_blank" rel="noopener noreferrer">@rabak.atelier</a>
              </div>
            </div>
            <button className="close-modal-btn" onClick={handleCloseInquireModal}>Close</button>
          </div>
        </div>,
        document.getElementById('root')
      )}
    </div>
  );
};

export default Gallery;