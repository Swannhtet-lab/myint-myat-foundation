import React, { useState } from "react";
import galleryData from "../../data/data.json";
import "./AllGalleryPage.css";

function Gallery() {
  const [year, setYear] = useState(2025);
  const [category, setCategory] = useState("donations");

  const categories = [
    {
      id: "donations",
      name: "လှူဒါန်းမှုများ",
    },
    {
      id: "schoolarship",
      name: "ပညာသင်ဆု ချီးမြှင့်ခြင်း",
    },
    {
      id: "library",
      name: "စာကြည့်တိုက်",
    },
    {
      id: "grudates",
      name: "ဘွဲ့ရများ",
    },
  ];

  const filteredGallery = galleryData.filter(
    (item) =>
      item.year === year &&
      item.category === category
  );

  return (
    <div className="gallery-page">
      <div className="gallery-header-row">
        <button className="back-button" type="button">
          <span>←</span>
          <span>Back</span>
        </button>

        <h1>ဓာတ်ပုံမှတ်တမ်းများ</h1>
      </div>

      <div className="category-tabs">
        {categories.map((item) => (
          <button
            key={item.id}
            className={
              category === item.id ? "category-tab active" : "category-tab"
            }
            onClick={() => setCategory(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="filter-area">
        <div className="year-select-wrapper">
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          >
            <option value={2025}>2025</option>
            <option value={2024}>2024</option>
            <option value={2023}>2023</option>
            <option value={2022}>2022</option>
          </select>
        </div>
      </div>

      <section className="gallery-grid">
        {filteredGallery.length > 0 ? (
          filteredGallery.map((item) => (
            <div className="gallery-card" key={item.id}>
              <div className="image-wrapper">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="gallery-card-content">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))
        ) : (
          <p className="no-data">ဓာတ်ပုံများ မရှိသေးပါ။</p>
        )}
      </section>
    </div>
  );
}

export default Gallery;