import brygga_sun from "../assets/brygga_sun.jpg";
import boats_darker from "../assets/boats_darker.jpg";
import boats from "../assets/boats.jpg";

export function Home() {
  return (
    <main className="container">
      <section className="section text-section">
        <h2>Välkommen till Getfotens Sjökrog!</h2>
        <p>
        Hemsidan är under uppbyggnad inom kort kommer vi att öppan i ny regi.
        Håll utkik på hemsidan för info.

        </p>
      </section>
      <section className="section">
        <div className="card-container">
          <div className="card">
            <img src={brygga_sun} className="card-img" alt="background" />
            <h2 className="card-title">Bastun</h2>

          </div>
          <div className="card">
            <img src={boats_darker} className="card-img" alt="background" />
            <h2 className="card-title">Gästhamn</h2>

          </div>
          <div className="card">
            <img src={boats} className="card-img" alt="background" />
            <h2 className="card-title">Restaurang</h2>

          </div>
        </div>
      </section>
    </main>
  );
}
