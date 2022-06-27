import menuPDF from "../assets/meny.pdf";
export function Meny() {
  return (
    <main className="container">
      <section className="section text-section">
        <h1>Meny</h1>
        <p>Menyn kan laddas ner <a target="_blank" rel="noreferrer" href={menuPDF}>här</a>.</p>
        <object title="menu" data={menuPDF} width="90%" height="500" ></object>
      </section>
    </main>
  );
}
