import React from "react";
import { fetchMenues } from "../utils/api_helpers";


export function Meny() {

  const [menuUrl, setMenuUrl] = React.useState(null);

  React.useEffect(() => {
    fetchMenues((menuUrl, drinkMenuUrl) => {

      if (menuUrl) {
        const menuFileHref = process.env.REACT_APP_URLBASE + menuUrl
        setMenuUrl(menuFileHref);
      }

    });
  }, []);


  return (
    <main className="container">
      <section className="section text-section">
        <h1>Meny</h1>
        <p>Menyn kan laddas ner <a target="_blank" rel="noreferrer" href={menuUrl}>här</a>.</p>
      </section>
    </main>
  );
}
