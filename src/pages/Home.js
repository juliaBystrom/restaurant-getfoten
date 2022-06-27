import brygga_sun from "../assets/brygga_sun.jpg";
import boats_darker from "../assets/boats_darker.jpg";
import boats from "../assets/boats.jpg";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className="container">
      <section className="section text-section">
        <h2>Välkommen till Getfoten Sjökrog!</h2>
        <p>
          Under mitten av juni kommer Sjökrogen öppna i ny regi. Vi kommer
          servera traditionell svensk skärgårdsmat. Getfoten erbjuder även
          möjlighet till gästhamn samt att hyra Getfotens berömda bastu. Se mer
          information om avgifter för gästhamnen samt bastun längre ner på
          sidan. Alla bokningar av bastu samt kontakt med restaurangen sker via
          telefon 08-628 20 00. <br />
          Vill ni ha den senaste informationen om vad som sker på ön så
          rekommenderar vi att ni följer oss på sociala medier @getfotensjokrog.
        </p>
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
