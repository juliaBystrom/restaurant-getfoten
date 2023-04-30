import React from "react";
import { fetchTimeText, fetchContactInfo } from "../utils/api_helpers";
import { FaFacebookSquare, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


export function Footer() {
  const [timeText, setTimeText] = React.useState("Laddar...");
  const [email, setEmail] = React.useState("Laddar...");
  const [phone, setPhone] = React.useState("Laddar...");

  React.useEffect(() => {
    fetchTimeText((attributes) => {
      const timeTextRes = attributes?.time_text
        ? attributes?.time_text.replace("\n", "<br/>")
        : "Problem med att hämta aktuella öppetider. <br />Ordinare öppetider Måndag - Söndag: 12 - 22";
      setTimeText(timeTextRes);
    });

    fetchContactInfo((attributes) => {
      const email = attributes?.email || "Error";
      const phone = attributes?.phonenumber || "Error";
      setEmail(email);
      setPhone(phone);
    });
  }, []);

  React.useEffect(() => {
    const timeHTMLtag = document.getElementById("oppetiderText");
    timeHTMLtag.innerHTML = timeText;
  }, [timeText]);

  React.useEffect(() => {
    const emailHTMLtag = document.getElementById("email");
    emailHTMLtag.innerHTML = email;
  }, [email]);

  React.useEffect(() => {
    const phoneHTMLtag = document.getElementById("phone");
    phoneHTMLtag.innerHTML = phone;
  }, [phone]);


  return (
    <footer>
      <div className="footer-column">
        <h3>Besök oss</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/place/Getfoten+Sj%C3%B6krog/@59.3796416,18.3559171,17z/data=!4m13!1m7!3m6!1s0x0:0xe8adfdb7f9405971!2zNTnCsDIyJzQ2LjciTiAxOMKwMjEnMjkuMiJF!3b1!8m2!3d59.3796389!4d18.3581111!3m4!1s0x465f81a67052c577:0x7d2be9b30a0b7c24!8m2!3d59.3797121!4d18.3571832"
        >
          59°22'46.7"N 18°21'29.2"E
        </a>
      </div>
      <div className="footer-column">
        <h3>Öppetider</h3>
        <p id="oppetiderText">{timeText}</p>
      </div>
      <div className="footer-column">
        <h3>Kontakt</h3>
        <div>
          <div className="social-media-link"><FaPhoneAlt className="social-media-icon" /><p id="phone">08-628 20 00</p></div>
          <div className="social-media-link"><FaEnvelope className="social-media-icon" /><p id="email">info@getfotensjokrog.se</p></div>
        </div>
      </div>
      <div className="footer-column">
        <h3>Sociala medier</h3>
        <div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/getfotensjokrog"
            className="social-media-link"
          >
            <FaFacebookSquare className="social-media-icon" />
            Facebook
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/getfotensjokrog/"
            className="social-media-link"
          >
            <RiInstagramFill className="social-media-icon" />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default { Footer };
