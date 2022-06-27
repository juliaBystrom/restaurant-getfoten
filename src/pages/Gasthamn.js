import boats_darker from "../assets/boats_darker.jpg";
export function Gasthamn() {
  return (
    <main className="container">
      <section className="section text-section">
        <h1 className="subheader-h1">Gästhamnen</h1>
        <div className="text-box-container">
          <div className="text-box-half">
            <div className="text-box-container-column">
              <p className="text-left text-box">
                I gästhamnen, som består av fyra bryggor, får både
                restauranggäster samt besökare till ön lägga till. Möjlighet
                till el, duschar samt att hyra öns annex finns tillgängligt mot
                en avgift.
              </p>
              <div className="text-box-container">
                <div className="text-box text-box-half">
                  <h4>Avgift medlem (årets Getfoten-märke på båten)</h4>
                  <p>
                    Hamnavgift/dygn: Gratis <br />
                    Elavgift/dygn: 40 kr. Alternativ 600kr säsongsavgift för el.{" "}
                    <br />
                    Duschavgift (3 minuter) 40 kr <br />
                    Hyra hela annexet: 400 kr/dygn <br />
                  </p>
                </div>
                <div className="text-box text-box-half">
                  <h4>Avgift övriga besökare</h4>
                  <p>
                    Hamnavgift/dygn 200 kr. Dagavgift 100 kr
                    <br />
                    Elavgift/dygn: 80 kr
                    <br />
                    Duschavgift (3 minuter) 40 kr
                    <br />
                    Hyra hela annexet: 800 kr/dygn
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-box text-box-third">
            <img src={boats_darker} className="page-img" alt="background" />
          </div>
        </div>
      </section>
    </main>
  );
}
