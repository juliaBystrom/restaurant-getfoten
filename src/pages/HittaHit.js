import { GetfotenMap } from "./../components/GetfotenMap";
export function HittaHit() {
  return (
    <main className="container">
      <section className="section text-section">
        <h1 className="subheader-h1">Hitta hit</h1>
        <p>
          Kordinater till Getfoten: <br />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/Getfoten+Sj%C3%B6krog/@59.3796416,18.3559171,17z/data=!4m13!1m7!3m6!1s0x0:0xe8adfdb7f9405971!2zNTnCsDIyJzQ2LjciTiAxOMKwMjEnMjkuMiJF!3b1!8m2!3d59.3796389!4d18.3581111!3m4!1s0x465f81a67052c577:0x7d2be9b30a0b7c24!8m2!3d59.3797121!4d18.3571832"
          >
            59°22'46.7"N 18°21'29.2"E
          </a>
        </p>
        <GetfotenMap />
      </section>
    </main>
  );
}
