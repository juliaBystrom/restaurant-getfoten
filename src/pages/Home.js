import house from "../assets/house.jpg";
import ReactMarkdown from 'react-markdown';
import { fetchRichText } from "../utils/api_helpers";
import React, { useState } from "react";
import ute from "../assets/v2/ute.jpg";
import bastu from "../assets/v2/bastu.jpg";
import mork_brygga from "../assets/v2/mork_brygga.jpg";


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
            <img src={bastu} className="photo" alt="bastu" />
          </div>
          <div className="photo-container">
            <img src={ute} className="photo" alt="food" />
          </div>
          <div className="photo-container">
            <img src={house} className="photo" alt="house" />
          </div>
          <div className="photo-container">
            <img src={mork_brygga} className="photo" alt="inside of resturant" />
          </div>
        </div>
      </section>
    </main>
  );
}