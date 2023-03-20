import React from "react";
import { fetchMenu } from "../utils/api_helpers";


// To preview the meny in the browser, we need to download it first.
function downloadMenu(pdfUrl) {
  fetch(pdfUrl).then(resp => resp.arrayBuffer()).then(resp => {

    // set the blog type to final pdf
    const file = new Blob([resp], { type: 'application/pdf' });

    // process to auto download it
    const fileURL = URL.createObjectURL(file);
    const previewMenu = document.getElementById('previewMenu');
    previewMenu.setAttribute("src", fileURL);

    // Revoke the object URL to free up memory
    URL.revokeObjectURL(fileURL);


  });
}


export function Meny() {

  const [menuUrl, setMenuUrl] = React.useState(null);
  React.useEffect(() => {
    fetchMenu((data) => {
      if (data?.url) {
        const menuFileHref = process.env.REACT_APP_URLBASE + data?.url
        setMenuUrl(menuFileHref);
      }

    });
  }, []);


  React.useEffect(() => {
    // If the menu has changed, download and display it.
    if (menuUrl) {
      downloadMenu(menuUrl);
    }
  }, [menuUrl]);

  return (
    <main className="container">
      <section className="section text-section">
        <h1>Meny</h1>
        <p>Menyn kan laddas ner <a target="_blank" rel="noreferrer" href={menuUrl}>här</a>.</p>
        <iframe
          width="80%"
          height="900px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          id="previewMenu"
          title="menu"
        ></iframe>
      </section>
    </main>
  );
}
