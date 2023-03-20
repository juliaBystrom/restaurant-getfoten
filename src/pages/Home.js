import brygga_sun from "../assets/brygga_sun.jpg";
import boats_darker from "../assets/boats_darker.jpg";
import boats from "../assets/boats.jpg";
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { fetchHomePageRichText } from "../utils/api_helpers";
import React, { useState } from "react";

export function Home() {
  const [homePageText, setHomePageText] = useState(null);

  React.useEffect(() => {
    fetchHomePageRichText((data) => {
      console.log('data:' + data);

      if (data?.text) {
        setHomePageText(data?.text)
      }
    });
  }, []);



  return (
    <main className="container">
      <section className="section text-section">
        <h2>Välkommen till Getfoten Sjökrog!</h2>
        <ReactMarkdown>{homePageText}</ReactMarkdown>
      </section>
      <section className="section">
        <div className="card-container">
          <Link className="card" to="bastu">
            <img src={brygga_sun} className="card-img" alt="background" />
            <h2 className="card-title">Bastu</h2>
          </Link>
          <Link className="card" to="gasthamn">
            <img src={boats_darker} className="card-img" alt="background" />
            <h2 className="card-title">Gästhamn</h2>
          </Link>
          <Link className="card" to="meny">
            <img src={boats} className="card-img" alt="background" />
            <h2 className="card-title">Restaurang</h2>
          </Link>
        </div>
      </section>
    </main>
  );
}
