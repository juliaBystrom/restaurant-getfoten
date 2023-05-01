import bastu_edited from "../assets/bastu_edited.png";
import food from "../assets/food.jpg";
import house from "../assets/house.jpg";
import inside from "../assets/inside.jpg";
import ReactMarkdown from 'react-markdown';
import { fetchRichText } from "../utils/api_helpers";
import React, { useState } from "react";

export function Home() {
  const [homePageText, setHomePageText] = useState(null);

  React.useEffect(() => {
    fetchRichText((data) => {
      if (data?.text) {
        setHomePageText(data?.text)
      }
    }, "/api/homepage");
  }, []);

  return (
    <main className="container">
      <section className="section text-section">
        <h2>Välkommen till Getfoten Sjökrog!</h2>
        <ReactMarkdown>{homePageText}</ReactMarkdown>
      </section>
      <section className="section">
        <div className="photo-grid">
          <div className="photo-container">
            <img src={bastu_edited} className="photo" alt="bastu" />
          </div>
          <div className="photo-container">
            <img src={food} className="photo" alt="food" />
          </div>
          <div className="photo-container">
            <img src={house} className="photo" alt="house" />
          </div>
          <div className="photo-container">
            <img src={inside} className="photo" alt="inside of resturant" />
          </div>
        </div>
      </section>
    </main>
  );
}