import { Button } from "react-bootstrap";
import React, { useState } from "react";
import HeaderWebsite from "./headerWebsite";
import RoundTrip from "./roundtrip";

const TravelApp = () => {
  const [tripType, setTripType] = useState("Round-trip");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellers, setTravellers] = useState(1);

  const showForm = (type) => {
    setTripType(type);
  };

  const selectOption = (setter, value) => {
    setter(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      departure,
      arrival,
      departureDate,
      returnDate,
      travellers,
    });
  };

  return (
    <>
      <HeaderWebsite />
      <main>
        <div className="title-text"></div>
        <div className="main-container">
          <div className="text">
            Compare and book cheap flights on over 500 airlines!
          </div>

          <div className="bookings">
            <ul className="panels">
              <a href="" className="flight-tab panel">
                <li>Flight</li>
              </a>
            </ul>
          </div>

          <div className="flight-panel" id="Flight-panel">
            <div className="trip-type">
              <form className="trip-type-1">
                <input
                  type="radio"
                  id="option1"
                  name="choice"
                  value="Round-trip"
                  onClick={() => showForm("Round-trip")}
                />
                <label htmlFor="option1">Round Trip</label>
                <br />

                <input
                  type="radio"
                  id="option2"
                  name="choice"
                  value="oneWayForm"
                  onClick={() => showForm("oneWayForm")}
                />
                <label htmlFor="option2">One Way</label>
                <br />

                <input
                  type="radio"
                  id="option3"
                  name="choice"
                  value="MultiWayForm"
                  onClick={() => showForm("MultiWayForm")}
                />
                <label htmlFor="option3">Multi-City</label>
                <br />
              </form>

              {/* <select id="coach">
                <optgroup label="Languages">
                  <option value="en">Coach</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </optgroup>
              </select> */}
            </div>

            {tripType === "Round-trip" && <RoundTrip />}

            {tripType === "oneWayForm" && (
              <form onSubmit={handleFormSubmit} className="form-section">
                <input
                  type="text"
                  id="departure"
                  name="fromOneWay"
                  placeholder="From Where?"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                />

                <input
                  type="text"
                  id="arrival"
                  name="toOneWay"
                  placeholder="To Where?"
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                />

                <input
                  type="date"
                  id="departure-date"
                  name="departOneWay"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />

                <input
                  type="number"
                  id="travellers"
                  name="travellers"
                  min="1"
                  max="10"
                  value={travellers}
                  onChange={(e) => setTravellers(e.target.value)}
                  required
                />

                <input type="submit" value="Search Flight" id="Search-flight" />
              </form>
            )}

            {tripType === "MultiWayForm" && (
              <form className="form-section">
                <input
                  type="text"
                  id="departure"
                  name="fromMulti"
                  placeholder="From Where?"
                />
                <input
                  type="text"
                  id="arrival"
                  name="toMulti"
                  placeholder="To Where?"
                />
                <input type="date" id="departure-date" name="departMulti" />
                <input type="submit" value="Search flight" id="Search-flight" />
                <br />
                <br />
                {/* Add additional fields for multi-city if needed */}
              </form>
            )}
          </div>
          {/* <div className="search">
            <input
              type="text"
              placeholder="Search Preferred Airlines"
              className="search-airline"
            />
          </div> */}
        </div>
        <div className="helpline">
          <div className="helpline-text">
            <span className="call-text">Call us 24/7 at 000-800-050-3540</span>
            <br />
            <br />
            <span className="desp-text">
              Need help booking? Our agents are ready!
              <br />
              Choose from over 500 airlines.
            </span>
          </div>

          <div className="airlines">
            <span>Hawaiian Airlines</span>
            <span>Hawaiian Airlines</span>
            <span>Hawaiian Airlines</span>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="explore">
          Found these <span className="low-color">low</span> fare deals for your
          next trip
        </div>
        <div className="trips">
          <div className="trip1">
            <img
              src="images/trip.jpg"
              alt=""
              height="215px"
              width="100%"
              style={{ borderRadius: "20px 20px 0 0" }}
            />

            <div className="trip-content">
              <div className="trip-date">
                <span className="city">New York</span>
                <br />
                <span className="date">Oct 31 - Dec 03</span>
                <br />
                <span className="route">DEL - NYC</span>
              </div>

              <div className="trip-price">
                <span className="city">$750</span>
                <br />
                <span className="route">Round Trip </span>
              </div>
            </div>
            <div className="trip-text">Similar trip cost to New York City</div>
          </div>

          <div className="trip1">
            <img
              src="images/trip.jpg"
              alt=""
              height="215px"
              width="100%"
              style={{ borderRadius: "20px 20px 0 0" }}
            />

            <div className="trip-content">
              <div className="trip-date">
                <span className="city">New York</span>
                <br />
                <span className="date">Oct 31 - Dec 03</span>
                <br />
                <span className="route">DEL - NYC</span>
              </div>

              <div className="trip-price">
                <span className="city">$750</span>
                <br />
                <span className="route">Round Trip </span>
              </div>
            </div>
            <div className="trip-text">Similar trip cost to New York City</div>
          </div>

          <div className="trip1">
            <img
              src="images/trip.jpg"
              alt=""
              height="215px"
              width="100%"
              style={{ borderRadius: "20px 20px 0 0" }}
            />

            <div className="trip-content">
              <div className="trip-date">
                <span className="city">New York</span>
                <br />
                <span className="date">Oct 31 - Dec 03</span>
                <br />
                <span className="route">DEL - NYC</span>
              </div>

              <div className="trip-price">
                <span className="city">$750</span>
                <br />
                <span className="route">Round Trip </span>
              </div>
            </div>
            <div className="trip-text">Similar trip cost to New York City</div>
          </div>
        </div>

        <div className="explore">Explore More Deals</div>

        <div className="explore-trips">
          <div className="trip1 card">
            <img
              src="images/trip.jpg"
              alt=""
              height="215px"
              width="100%"
              style={{ borderRadius: "20px 20px 0 0" }}
            />

            <div className="trip-content">
              <div className="trip-date">
                <span className="city">New York</span>
                <br />
                <span className="date">Oct 31 - Dec 03</span>
                <br />
                <span className="route">DEL - NYC</span>
              </div>

              <div className="trip-price">
                <span className="city">$750</span>
                <br />
                <span className="route">Round Trip </span>
              </div>
            </div>
            <div className="trip-text">Similar trip cost to New York City</div>
          </div>

          <div className="trip1 card">
            <img
              src="images/trip.jpg"
              alt=""
              height="215px"
              width="100%"
              style={{ borderRadius: "20px 20px 0 0" }}
            />

            <div className="trip-content">
              <div className="trip-date">
                <span className="city">New York</span>
                <br />
                <span className="date">Oct 31 - Dec 03</span>
                <br />
                <span className="route">DEL - NYC</span>
              </div>

              <div className="trip-price">
                <span className="city">$750</span>
                <br />
                <span className="route">Round Trip </span>
              </div>
            </div>
            <div className="trip-text">Similar trip cost to New York City</div>
          </div>

          <div className="trip1 card">
            <img
              src="images/trip.jpg"
              alt=""
              height="215px"
              width="100%"
              style={{ borderRadius: "20px 20px 0 0" }}
            />

            <div className="trip-content">
              <div className="trip-date">
                <span className="city">New York</span>
                <br />
                <span className="date">Oct 31 - Dec 03</span>
                <br />
                <span className="route">DEL - NYC</span>
              </div>

              <div className="trip-price">
                <span className="city">$750</span>
                <br />
                <span className="route">Round Trip </span>
              </div>
            </div>
            <div className="trip-text">Similar trip cost to New York City</div>
          </div>

          <div className="trip1 card">
            <img
              src="images/trip.jpg"
              alt=""
              height="215px"
              width="100%"
              style={{ borderRadius: "20px 20px 0 0" }}
            />

            <div className="trip-content">
              <div className="trip-date">
                <span className="city">New York</span>
                <br />
                <span className="date">Oct 31 - Dec 03</span>
                <br />
                <span className="route">DEL - NYC</span>
              </div>

              <div className="trip-price">
                <span className="city">$750</span>
                <br />
                <span className="route">Round Trip </span>
              </div>
            </div>
            <div className="trip-text">Similar trip cost to New York City</div>
          </div>

          <div className="trip1 card">
            <img
              src="images/trip.jpg"
              alt=""
              height="215px"
              width="100%"
              style={{ borderRadius: "20px 20px 0 0" }}
            />

            <div className="trip-content">
              <div className="trip-date">
                <span className="city">New York</span>
                <br />
                <span className="date">Oct 31 - Dec 03</span>
                <br />
                <span className="route">DEL - NYC</span>
              </div>

              <div className="trip-price">
                <span className="city">$750</span>
                <br />
                <span className="route">Round Trip </span>
              </div>
            </div>
            <div className="trip-text">Similar trip cost to New York City</div>
          </div>

          <div className="trip1 card">
            <img
              src="images/trip.jpg"
              alt=""
              height="215px"
              width="100%"
              style={{ borderRadius: "20px 20px 0 0" }}
            />

            <div className="trip-content">
              <div className="trip-date">
                <span className="city">New York</span>
                <br />
                <span className="date">Oct 31 - Dec 03</span>
                <br />
                <span className="route">DEL - NYC</span>
              </div>

              <div className="trip-price">
                <span className="city">$750</span>
                <br />
                <span className="route">Round Trip </span>
              </div>
            </div>
            <div className="trip-text">Similar trip cost to New York City</div>
          </div>

          <div className="trip1 card">
            <img
              src="images/trip.jpg"
              alt=""
              height="215px"
              width="100%"
              style={{ borderRadius: "20px 20px 0 0" }}
            />

            <div className="trip-content">
              <div className="trip-date">
                <span className="city">New York</span>
                <br />
                <span className="date">Oct 31 - Dec 03</span>
                <br />
                <span className="route">DEL - NYC</span>
              </div>

              <div className="trip-price">
                <span className="city">$750</span>
                <br />
                <span className="route">Round Trip </span>
              </div>
            </div>
            <div className="trip-text">Similar trip cost to New York City</div>
          </div>

          <div className="trip1 card">
            <img
              src="images/trip.jpg"
              alt=""
              height="215px"
              width="100%"
              style={{ borderRadius: "20px 20px 0 0" }}
            />

            <div className="trip-content">
              <div className="trip-date">
                <span className="city">New York</span>
                <br />
                <span className="date">Oct 31 - Dec 03</span>
                <br />
                <span className="route">DEL - NYC</span>
              </div>

              <div className="trip-price">
                <span className="city">$750</span>
                <br />
                <span className="route">Round Trip </span>
              </div>
            </div>
            <div className="trip-text">Similar trip cost to New York City</div>
          </div>
        </div>

        <footer>
          <div className="footer-container">
            <div className="social-media">
              <span>EASY ACCESS</span>
              <div className="icons">
                <span>Connect With Us</span>
                <span>
                  <i className="fa-brands fa-facebook"></i>
                </span>
                <span>
                  <i className="fa-brands fa-instagram"></i>
                </span>
                <span>
                  <i className="fa-brands fa-twitter"></i>
                </span>
                <span>
                  <i className="fa-brands fa-tiktok"></i>
                </span>
              </div>
            </div>

            <div className="links">
              <div className="quick-links">
                <ul className="link-text">
                  <h2>Quick Links</h2>
                  <li>Popular Airlines</li>
                  <li>Popular Flight Routes</li>
                  <li>Top U.S. Destinations</li>
                  <li>Top International Destinations</li>
                  <li>Site Directories</li>
                  <li>Stay Connected</li>
                  <li>International Sites</li>
                </ul>
              </div>

              {/* <div className="quick-links">
                <ul className="link-text">
                  <h2>BOOK</h2>
                  <li>Cheap Flights</li>
                  <li>Cheap Hotels</li>
                  <li>Car Rentals</li>
                  <li>Vacation Packages</li>
                  <li>Group Travel</li>
                  <li>Save & Earn $</li>
                </ul>
              </div>

              <div className="quick-links">
                <ul className="link-text">
                  <h2>TRAVELLER TOOLS</h2>
                  <li>Gift Cards</li>
                  <li>Check My Booking</li>
                  <li>Customer Support</li>
                  <li>Online Check-in</li>
                  <li>Airline Baggage Fees</li>
                  <li>Check Flight Status</li>
                  <li>Travel Blog</li>
                  <li>Local Guides</li>
                </ul>
              </div>

              <div className="quick-links">
                <ul className="link-text">
                  <h2>ABOUT FLYNOWITHUS</h2>
                  <li>About Us</li>
                  <li>Press Room</li>
                  <li>Careers</li>
                  <li>Affiliate Program</li>
                  <li>Client Testimonial</li>
                  <li>Advertise with Us</li>
                  <li>Newsletter</li>
                </ul>
              </div>

              <div className="quick-links">
                <ul className="link-text">
                  <h2>LEGAL</h2>
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                  <li>Price Match Promise</li>
                  <li>Terms & Conditions</li>
                  <li>Taxes & Fees</li>
                  <li>Our Service Fees</li>
                  <li>Post-Ticketing Fees</li>
                  <li>Compassion Exception Policy</li>
                  <li>Connection Protection</li>
                  <li>Consumer Health Data Notice</li>
                </ul>--> 
              </div>*/}
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default TravelApp;
