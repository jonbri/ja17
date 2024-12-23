import { useEffect } from "react";
import classnames from "classnames";
import billsImgUrl from "./img/bills.png";
import jetsImgUrl from "./img/jets.png";
import rageImgUrl from "./img/rage-mad.gif";
import "./App.scss";
import "@fontsource/ubuntu";

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

  const getDayClassName = (day: number) => {
    const today = new Date().getDate();
    if (day === today) return "day today";
    if (day < today) return "day past";
    return "day future";
  };

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
          <div id="calendar">
            <div className={classnames(getDayClassName(22))}>
              <header>Sun Dec 22</header>
              <div></div>
            </div>
            <div className={classnames(getDayClassName(23))}>
              <header>Mon Dec 23</header>
              <div></div>
            </div>
            <div className={classnames(getDayClassName(24))}>
              <header>Tue Dec 24</header>
              <div></div>
            </div>
            <div className={classnames(getDayClassName(25))}>
              <header>Wed Dec 25</header>
              <div>Xmas. Leave Cary</div>
            </div>
            <div className={classnames(getDayClassName(26))}>
              <header>Thu Dec 26</header>
              <div>Hotel Check-in: 3:00</div>
            </div>
            <div className={classnames(getDayClassName(27))}>
              <header>Fri Dec 27</header>
              <div></div>
            </div>
            <div className={classnames(getDayClassName(28))}>
              <header>Sat Dec 28</header>
              <div></div>
            </div>
            <div className={classnames(getDayClassName(29))}>
              <header>Sun Dec 29</header>
              <div>Bills vs. Jets</div>
            </div>
            <div className={classnames(getDayClassName(30))}>
              <header>Mon Dec 30</header>
              <div>Hotel Check-out: noon</div>
            </div>
            <div className={classnames(getDayClassName(31))}>
              <header>Tues Dec 31</header>
              <div></div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Hotel</h2>
          <div>
            164b Slade Ave, West Seneca, NY 14224{" "}
            <a href="https://www.google.com/maps/place/164b+Slade+Ave,+West+Seneca,+NY+14224/">
              Map
            </a>
          </div>
          <div>
            <strong>Check-in:</strong> Thu, Dec 26, 3:00PM
          </div>
          <div>
            <strong>Check-out:</strong> Mon, Dec 30, noon
          </div>
          <div>Suite, 1 Bedroom, Booked through Expedia, Itinerary: 72989913686821</div>
          <div>Travel Guard Policy Confirmation: 981258467</div>
        </div>

        <div className="section">
          <h2>Game Dec 29, 1:00PM</h2>
          <div>
            <strong>Section: 216, Row 5, Seats 1-3</strong>
          </div>
          <div>Insurance? TODO, I have it, look it up</div>
          <div>Ticket Protector II EUSP2461187567 $132.00</div>
          <div>Tickets are in Apple Wallet</div>
          <div>
            <a href="https://www.google.com/maps/dir/164b+Slade+Ave,+West+Seneca,+NY+14224/Highmark+Stadium,+Bills+Drive,+Orchard+Park,+NY/@42.8056686,-78.8244353,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89d30ef5b97d497f:0xca83aab437c3c149!2m2!1d-78.7910484!2d42.833521!1m5!1m1!1s0x89d305815466a99f:0xf0b562b249eaa7f5!2m2!1d-78.7869723!2d42.7737546!3e2?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
              Walking directions
            </a>
          </div>
        </div>

        <div className="section">
          <h2>Stadium Parking</h2>
          <div>Confirmation number 3000-0625-3346-3694-8</div>
          <div>
            General Admission ticket in <strong>Section LOT7</strong>
          </div>
          <div>Ticket is in Apple Wallet</div>
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
          <div>Mon-Wed: 10am-9pm, Thurs-Fri 10am-10pm, Sat 9am-10pm, Sun 9am-8pm</div>
          <div>
            Kissing Bridge is located at 10296 State Road Glenwood NY 14069. <strong>note</strong>{" "}
            that many online maps or GPS resources will try to send you to KB via Murray Hill Rd.
            This is a seasonal road and is impassable during the winter months.
          </div>
          <div>Tickets can be purchased online or at the resort.</div>
          <div>Yes, we offer ski and snowboard rentals, including boots and helmets.</div>
          <div>
            Yes, we have a variety of dining options on-site, ranging from quick snacks to hot
            meals.
          </div>
        </div>

        <div className="section">
          <h2>TODO</h2>
          <ul>
            <li>Snow pants</li>
            <li>Make a poster</li>
            <li>Basho mp3</li>
            <li>Basho mp3</li>
            <li>Basho mp3</li>
            <li>Basho mp3</li>
            <li>Basho mp3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
