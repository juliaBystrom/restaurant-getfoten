import bastuDay from "../assets/bastuDay.jpeg";

export function Bastu() {
  return (
    <main className="container">
      <section className="section text-section">
        <h1 className="subheader-h1">Getfotens Bastu</h1>
        <div className="text-box-container">
          <div className="text-box-half">
            <div className="text-box-container-column">
              <p className="text-left text-box">
                Getfotens berömda bastu är en unik upplevelse i sig. Med sitt
                panoramafönster kan man njuta av en fantastisk utsikt över
                Stockholms skärgård. Bastun är väldigt populär därför
                rekommenderar vi att vara ute i god tid med din bokning. För att
                boka bord, hör av er till oss via telefon 08-628 20 00.
              </p>
              <div className="text-box-container">
                <div className="text-box text-box-half">
                  <h4>Information</h4>
                  <p>
                    Öppna mellan 1 maj – 31 okt.
                    <br />
                    Boka bastu mellan kl. 8:00 – 24:00. Plats upp till 10
                    personer.
                    <br />
                    Uppvärmning av bastun tar 1 timme (säg till i god tid)
                    <br />
                    Häll endast sötvatten på aggregaten.
                    <br />
                    Städa innan du lämnar.
                    <br />
                  </p>
                </div>
                <div className="text-box text-box-half">
                  <h4>Priser</h4>
                  <p>
                    Bastu/timme: 100 kr (medlem i SSB)
                    <br />
                    Bastu/timme: 250 kr (för sällskap upp till 4 personer)
                    <br />
                    Bastu/timme: 500 kr (för sällskap med fler än 4 personer)
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-box text-box-third">
            <img src={bastuDay} className="page-img" alt="background" />
          </div>
        </div>
      </section>
    </main>
  );
}
