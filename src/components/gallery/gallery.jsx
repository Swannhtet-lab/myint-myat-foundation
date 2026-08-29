import React from 'react';
import { Link } from 'react-router-dom';
import './gallery.css';
import gallery1 from '../../assets/1761793954380525.jpg';
import gallery2 from '../../assets/1761793956282752.jpg';
import gallery3 from '../../assets/20251029_093251.jpg';
import gallery4 from '../../assets/20251030_110204_1.jpg';

const previewImages = [gallery1, gallery2, gallery3, gallery4];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <p className="gallery-label">Gallery</p>
        <h2>Our recent moments</h2>
      </div>

      <div className="gallery-grid">
        {previewImages.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img src={image} alt={`Foundation gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="gallery-actions">
        <Link to="/gallery" className="gallery-button">
          View all gallery
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
