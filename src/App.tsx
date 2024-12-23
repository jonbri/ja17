import { useEffect } from "react";
import classnames from "classnames";
import billsImgUrl from "./img/bills.png";
import jetsImgUrl from "./img/jets.png";
import rageImgUrl from "./img/rage-mad.gif";
import hotelToStadiumImgUrl from "./img/hotel-to-stadium.png";
import kissingBridgeMapImgUrl from "./img/kissing-bridge-map.png";
import "./App.scss";
import "@fontsource/ubuntu";

const App = () => {
  useEffect(() => {
    const [
      billsImg,
      jetsImg,
      rageImg0,
      rageImg1,
      rageImg2,
      rageImg3,
      rageImg4,
      rageImg5,
      hotelToStadiumImg,
      kissingBridgeMapImg,
    ] = [
      document.getElementById("bills-img") as HTMLImageElement | null,
      document.getElementById("jets-img") as HTMLImageElement | null,
      document.getElementById("rage-img0") as HTMLImageElement | null,
      document.getElementById("rage-img1") as HTMLImageElement | null,
      document.getElementById("rage-img2") as HTMLImageElement | null,
      document.getElementById("rage-img3") as HTMLImageElement | null,
      document.getElementById("rage-img4") as HTMLImageElement | null,
      document.getElementById("rage-img5") as HTMLImageElement | null,
      document.getElementById("hotel-to-stadium-img") as HTMLImageElement | null,
      document.getElementById("kissing-bridge-map-img") as HTMLImageElement | null,
    ];
    if (billsImg) billsImg.src = billsImgUrl;
    if (jetsImg) jetsImg.src = jetsImgUrl;
    if (rageImg0) rageImg0.src = rageImgUrl;
    if (rageImg1) rageImg1.src = rageImgUrl;
    if (rageImg2) rageImg2.src = rageImgUrl;
    if (rageImg3) rageImg3.src = rageImgUrl;
    if (rageImg4) rageImg4.src = rageImgUrl;
    if (rageImg5) rageImg5.src = rageImgUrl;
    if (hotelToStadiumImg) hotelToStadiumImg.src = hotelToStadiumImgUrl;
    if (kissingBridgeMapImg) kissingBridgeMapImg.src = kissingBridgeMapImgUrl;
  }, []);

  const getDayClassName = (day: number) => {
    if (day < 10) return "day";
    const today = new Date().getDate();
    if (day === today) return "day today";
    if (day < today) return "day past";
    return "day future";
  };

  return (
    <div id="container">
      <header>
        <h1>
          <div>
            <div id="fire">
              <img id="rage-img0" />
              <img id="rage-img1" />
              <img id="rage-img2" />
              <img id="rage-img3" />
              <img id="rage-img4" />
              <img id="rage-img5" />
            </div>
            <img id="bills-img" className="helmet" />
            <img id="jets-img" className="helmet" />
            <div id="title">BUFFALO 2024</div>
          </div>
        </h1>
      </header>

      <div id="content">
        <div className="section">
          <div id="calendar">
            <div className={classnames(getDayClassName(23))}>
              <header>Mon Dec 23</header>
              <div>home</div>
            </div>
            <div className={classnames(getDayClassName(24))}>
              <header>Tue Dec 24</header>
              <div>home</div>
            </div>
            <div className={classnames(getDayClassName(25))}>
              <header>Wed Dec 25</header>
              <div>Xmas. Leave Cary. Get to PA</div>
            </div>
            <div className={classnames(getDayClassName(26))}>
              <header>Thu Dec 26</header>
              <div>Hotel: 3:00pm. Wegmans, Duffs.</div>
            </div>
            <div className={classnames(getDayClassName(27))}>
              <header>Fri Dec 27</header>
              <div>Kissing Bridge 10am</div>
            </div>
            <div className={classnames(getDayClassName(28))}>
              <header>Sat Dec 28</header>
              <div>
                Old spots, Teds,{" "}
                <a href="https://www.google.com/maps/dir/Nine-Eleven+Tavern,+Bloomfield+Avenue,+Buffalo,+NY/164b+Slade+Ave,+West+Seneca,+NY+14224/@42.8398377,-78.8164061,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89d30e1131d18461:0x68a2cac79beddfa6!2m2!1d-78.8232913!2d42.8451743!1m5!1m1!1s0x89d30ef5b97d497f:0xca83aab437c3c149!2m2!1d-78.7910484!2d42.833521!3e0?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                  911 Tavern
                </a>
              </div>
            </div>
            <div className={classnames(getDayClassName(29))}>
              <header>Sun Dec 29</header>
              <div>Bills vs. Jets</div>
            </div>
            <div className={classnames(getDayClassName(30))}>
              <header>Mon Dec 30</header>
              <div>Hotel checkout: noon</div>
            </div>
            <div className={classnames(getDayClassName(31))}>
              <header>Tues Dec 31</header>
              <div>Driving</div>
            </div>
            <div className={classnames(getDayClassName(1))}>
              <header>Wed Jan 1</header>
              <div>home</div>
            </div>
            <div className={classnames(getDayClassName(2))}>
              <header>Thu Jan 2</header>
              <div>home, back to work</div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Hotel</h2>
          <div>
            <strong>Hotel Country Inn & Suites</strong> by Radisson, Buffalo South I-90
          </div>
          <div>
            <strong>Check-in: Thu, Dec 26 3:00pm</strong>
          </div>
          <div>
            <strong>Check-out: Mon, Dec 30 12:00pm</strong>
          </div>
          <div>
            164b Slade Ave, West Seneca, NY 14224{" "}
            <a href="https://www.google.com/maps/place/164b+Slade+Ave,+West+Seneca,+NY+14224/">
              Map
            </a>
          </div>
          <div>Suite, 1 Bedroom</div>
          <div>Expedia itinerary: 72989913686821</div>
          <div>Travel guard policy confirmation: 981258467</div>
        </div>

        <div className="section">
          <h2>Game Day</h2>
          <div>
            <strong>Section: 216, Row 5, Seats 1-3</strong>
          </div>
          <div>Tickets are in Apple Wallet</div>
          <div>Allianz Ticket Protector II: EUSP2461187567</div>
          <div>
            <a href="https://www.google.com/maps/dir/164b+Slade+Ave,+West+Seneca,+NY+14224/Highmark+Stadium,+Bills+Drive,+Orchard+Park,+NY/@42.8056686,-78.8244353,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89d30ef5b97d497f:0xca83aab437c3c149!2m2!1d-78.7910484!2d42.833521!1m5!1m1!1s0x89d305815466a99f:0xf0b562b249eaa7f5!2m2!1d-78.7869723!2d42.7737546!3e2?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
              Walking directions
            </a>
          </div>
        </div>

        <div className="section">
          <h2>Stadium Parking</h2>
          <div>
            General Admission: <strong>LOT 7</strong>
          </div>
          <div>Ticket is in Apple Wallet</div>
          <div>Confirmation number: 3000-0625-3346-3694-8</div>
        </div>

        <div className="section">
          <h2>Kissing Bridge</h2>
          <div>
            <a href="https://www.kissingbridge.com/">link</a>{" "}
            <a href="https://www.google.com/maps/place/10296+State+Rd,+Glenwood,+NY+14069">map</a>{" "}
            <a href="https://www.google.com/maps/dir/10296+State+Rd,+Glenwood,+NY+14069/164b+Slade+Ave,+West+Seneca,+NY+14224/@42.723179,-78.8874793,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89d3aaabac20d5ff:0xa5b4b26b585dc217!2m2!1d-78.653319!2d42.6125819!1m5!1m1!1s0x89d30ef5b97d497f:0xca83aab437c3c149!2m2!1d-78.7910484!2d42.833521!3e0?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
              directions
            </a>
          </div>
          <div>Hours: Fri 10-10, Sat 9-10</div>
          <div>Tickets can be purchased online or at the resort</div>
          <div>Rentals: skis, boots, helmets</div>
          <div>Can eat there</div>
          <div>
            <em>
              "Kissing Bridge is located at 10296 State Road Glenwood NY 14069.
              <br />
              <strong>Note</strong> that many online maps or GPS resources will try to send you to
              KB via Murray Hill Rd.
              <br />
              This is a seasonal road and is impassable during the winter months."
            </em>
          </div>
        </div>

        <div className="section">
          <h2>Pack</h2>
          <ul>
            <li>
              Clothes
              <ul>
                <li>Snow pants</li>
                <li>Boots</li>
                <li>TODO: thermals</li>
              </ul>
            </li>
            <li>Make a poster</li>
            <li>Music</li>
          </ul>
        </div>
      </div>

      <div id="images">
        <div>
          <a href="https://cdn.prod.website-files.com/6716e32c7e124cd50e0116ad/6751e6fe2663f6f43d743347_KB%20Slope%20Map.png">
            <img id="kissing-bridge-map-img" />
          </a>
        </div>
        <div>
          <a href="https://www.google.com/maps/dir/164b+Slade+Ave,+West+Seneca,+NY+14224/Highmark+Stadium,+Bills+Drive,+Orchard+Park,+NY/@42.8056686,-78.8244353,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89d30ef5b97d497f:0xca83aab437c3c149!2m2!1d-78.7910484!2d42.833521!1m5!1m1!1s0x89d305815466a99f:0xf0b562b249eaa7f5!2m2!1d-78.7869723!2d42.7737546!3e2?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
            <img id="hotel-to-stadium-img" />
          </a>
        </div>
      </div>

      <br />

      <div id="footer">
        <ul>
          <li>
            <a href="https://github.com/jonbri/ja17">GitHub</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Buffalo,_New_York">Wiki</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
