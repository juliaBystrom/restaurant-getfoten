import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { fetchRichText } from "../utils/api_helpers";

export function Annexet() {

  const [annexetPageText, setAnnexetPageText] = useState(null);

  React.useEffect(() => {
    fetchRichText((data) => {
      if (data?.text) {
        setAnnexetPageText(data?.text)
      }
    }, "/api/annexet");
  }, []);

  return (
    <main className="container">
      <section className="section text-section">
        <h1 className="subheader-h1">Annexet</h1>
        <div className="text-box-container">
          <div className="text-box-half fetch-text">
            <ReactMarkdown>{annexetPageText}</ReactMarkdown>
          </div>
        </div>
      </section>
    </main>
  );
}
