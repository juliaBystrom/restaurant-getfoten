import React, { useState } from "react";
import boats_darker from "../assets/boats_darker.jpg";
import ReactMarkdown from 'react-markdown';
import { fetchRichText } from "../utils/api_helpers";

export function Gasthamn() {
  const [gasthamnPageText, setGasthamnPageText] = useState(null);

  React.useEffect(() => {
    fetchRichText((data) => {
      if (data?.text) {
        setGasthamnPageText(data?.text)
      }
    }, "/api/gasthamn");
  }, []);

  return (
    <main className="container">
      <section className="section text-section">
        <h1 className="subheader-h1">Gästhamnen</h1>
        <div className="text-box-container">
            <div className="text-box-half fetch-text">
              <ReactMarkdown>{gasthamnPageText}</ReactMarkdown>
          </div>
          <div className="text-box text-box-third">
            <img src={boats_darker} className="page-img" alt="background" />
          </div>
        </div>
      </section>
    </main>
  );
}
