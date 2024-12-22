import { useEffect } from "react";
import billsImgUrl from "./img/bills.png";
import jetsImgUrl from "./img/jets.png";
import rageImgUrl from "./img/rage-mad.gif";
import "./App.scss";

const App = () => {
  useEffect(() => {
    const [billsImg, jetsImg, rageImg] = [
      document.getElementById("bills-img") as HTMLImageElement | null,
      document.getElementById("jets-img") as HTMLImageElement | null,
      document.getElementById("rage-img") as HTMLImageElement | null,
    ];
    if (billsImg) billsImg.src = billsImgUrl;
    if (jetsImg) jetsImg.src = jetsImgUrl;
    if (rageImg) rageImg.src = rageImgUrl;
  }, []);

  return (
    <div id="container">
      <header>
        <h1>
          <img id="bills-img" />
          <img id="rage-img" />
          <img id="jets-img" />
        </h1>
      </header>

      <div id="content">
        <div className="section">
          <h2>Hotel</h2>
          <div>Suite, 1 Bedroom</div>
          <div>
            <strong>Check-in:</strong> Thu, Dec 26, 3:00PM
          </div>
          <div>
            <strong>Check-out:</strong> Mon, Dec 30, noon
          </div>
          <div>
            <a href="https://www.google.com/maps/place/Country+Inn+%26+Suites+by+Radisson,+Buffalo+South+I-90,+NY/@42.8324863,-78.7933444,17z/data=!4m9!3m8!1s0x89d30ef6c2d864bf:0x96efffd99cd01e27!5m2!4m1!1i2!8m2!3d42.8324824!4d-78.7907695!16s%2Fg%2F11g__2b4v?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
              Country Inn & Suites by Radisson, Buffalo South I-90, NY Expedia
            </a>
          </div>
          <div>164b Slade Ave, Buffalo, NY, 14224 USA</div>
          <div>Itinerary: 72989913686821</div>
          <div>Travel Guard Policy Confirmation: 981258467</div>
        </div>

        <div className="section">
          <h2>Game Dec 29, 1:00PM</h2>
          <div>Insurance? TODO, I have it, look it up</div>
          <div>Ticket Protector II EUSP2461187567 $132.00</div>
        </div>

        <div className="section">
          <h2>Stadium Parking</h2>
          <div>Confirmation number 3000-0625-3346-3694-8</div>
          <div>
            General Admission ticket in <strong>Section LOT7</strong>
          </div>
        </div>

        <div className="section">
          <h2>TODO</h2>
          <ul>
            <li>Snow pants</li>
            <li>Kissing Bridge</li>
            <li>Make a poster</li>
            <li>Toronto?</li>
            <li>Basho mp3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
