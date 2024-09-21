import React from "react";
import HeaderWebsite from "./headerWebsite";
import RoundTrip from "./roundtrip";

const FlightSearch = () => {
  return (
    <>
      <HeaderWebsite />

      <main>
        <div className="main-container-flight parent">
          <div className="filter-container">
            <div className="stops">
              <h2>Stops</h2>
              <form>
                <div className="stop-element">
                  <label htmlFor="stop1">
                    <input type="checkbox" id="stop1" />
                    <span className="stop">1 Stop</span>
                  </label>
                  <span className="amount">USD 2039</span>
                </div>
                {/* <div>
                  <input type="checkbox" id="stop2" />
                  <label htmlFor="stop2">
                    <span className="stop">2 Stops</span>
                  </label>
                  <span className="amount">USD 1039</span>
                </div> */}
              </form>
            </div>

            <div className="flight-times">
              <h2>Flight Times</h2>
              <h3 className="going">Going to Hawai (OGG)</h3>
              <span className="depart-time">Depart 12:30am - 11:45pm</span>
              <h3 className="going">Returning to New Delhi (DEL)</h3>
              <span className="depart-time">Depart 12:30am - 11:45pm</span>
            </div>

            <div className="flight-times">
              <h2>Duration</h2>
              <h3 className="going">Going to Hawai (OGG)</h3>
              <span className="depart-time">Depart 12:30am - 11:45pm</span>
              <h3 className="going">Returning to New Delhi (DEL)</h3>
              <span className="depart-time">Depart 12:30am - 11:45pm</span>
            </div>

            <h3>Departing From</h3>
            <div>
              <input type="checkbox" id="depart1" />
              <label htmlFor="depart1">
                <span className="departing-from">DEL-New Delhi</span>
              </label>
            </div>

            <h3>Departing From</h3>
            <div>
              <input type="checkbox" id="depart2" />
              <label htmlFor="depart2">
                <span className="departing-from">DEL-New Delhi</span>
              </label>
              <span className="amount">USD 1653</span>
            </div>
            <div>
              <input type="checkbox" id="depart3" />
              <label htmlFor="depart3">
                <span className="departing-from">DEL-New Delhi</span>
              </label>
              <span className="amount">USD 1450</span>
            </div>
            <div>
              <input type="checkbox" id="depart4" />
              <label htmlFor="depart4">
                <span className="departing-from">DEL-New Delhi</span>
              </label>
            </div>
          </div>

          <div className="flight-table-container">
            <table className="flight-table">
              <tbody>
                <tr style={{ height: "70px" }}>
                  <td style={{ width: "200px" }}>Show All Fares</td>
                  <td>United Airlines</td>
                  <td>Air Canada</td>
                  <td>United Airlines</td>
                  <td>Swiss</td>
                  <td>Air India</td>
                </tr>
                <tr style={{ height: "50px" }}>
                  <td>1 stop</td>
                  <td>---</td>
                  <td>USD 1700</td>
                  <td>---</td>
                  <td>---</td>
                  <td>USD 2500</td>
                </tr>
                <tr style={{ height: "50px" }}>
                  <td>1 Stops+</td>
                  <td>USD 1745</td>
                  <td>USD 2655</td>
                  <td>---</td>
                  <td>USD 1200</td>
                  <td>USD 2000</td>
                </tr>
              </tbody>
            </table>

            {[1, 2, 3].map((_, index) => (
              <div className="airline-panel" key={index}>
                <div className="airline">
                  {[1, 2].map((_, subIndex) => (
                    <div className="airline-container" key={subIndex}>
                      <div className="info">
                        <span className="name">United Airlines</span>
                        <span className="stops">2 Stops</span>
                        <span className="timings">30h 22m</span>
                      </div>
                      <div className="trip-time">
                        <div>
                          <span className="time">11:35pm</span>
                          <br />
                          <span>DEL </span>
                          <br />
                        </div>
                        <span>-----</span>
                        <br />
                        <div>
                          <span className="time">11:35pm</span>
                          <br />
                          <span>DEL </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="price-container">
                  <span className="price">USD 1663</span>
                  <span className="min">As low as 149$</span>
                  <span>Price per person</span>
                  <span>(incl taxes & fees)</span>
                  <button className="price-btn">SELECT &gt;</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default FlightSearch;
