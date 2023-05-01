import React, { useState } from "react";
import bastuDay from "../assets/bastuDay.jpeg";
import ReactMarkdown from 'react-markdown';
import { fetchRichText } from "../utils/api_helpers";

export function Bastu() {

  const [bastuPageText, setBastuPageText] = useState(null);

  React.useEffect(() => {
    fetchRichText((data) => {
      if (data?.text) {
        setBastuPageText(data?.text)
      }
    }, "/api/bastu");
  }, []);

  return (
    <main className="container">
      <section className="section text-section">
        <h1 className="subheader-h1">Getfotens Bastu</h1>
        <div className="text-box-container">
          <div className="text-box-half fetch-text">
              <ReactMarkdown>{bastuPageText}</ReactMarkdown>
          </div>
          <div className="text-box text-box-third">
            <img src={bastuDay} className="page-img" alt="background" />
          </div>
        </div>
      </section>
    </main>
  );
}
