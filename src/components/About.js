import React from 'react';

const About = () => {
  return (
    <div className="about-content">
      <div className="about-container">
        <div className="profile-section">
          <img src="/profile.jpg" alt="Artist profile" className="profile-image" />
        </div>
        <div className="about-text">
          <h2>Welcome to Rabak Atelier!</h2>
          
          <p>Rabak is Singaporean slang for something that is "out of control" - the artist's tongue-in-cheek nod to the dynamicism and unpredictability of art and watercolour.</p>
          
          <p>Chin Wei is a Singaporean artist studying under Singaporean veteran artist Lee Choon Kee.</p>
          
          <p>She primarily practises plein air watercolour, with a keen interest in preserving memories of an ever-changing Singapore.</p>
        </div>
      </div>
    </div>
  );
};

export default About;