import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane,faLocationDot } from '@fortawesome/free-solid-svg-icons';



const RoundTrip = () => {
  // State variables for user input
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellers, setTravellers] = useState(1);

  // State variables for API data
  const [airports, setAirports] = useState([]);
  const [filteredDepartures, setFilteredDepartures] = useState([]);
  const [filteredArrivals, setFilteredArrivals] = useState([]);

  


  // Fetch data from APIs when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.aviationstack.com/v1/airports?access_key=9e788291ca0afa073d8c41cfde3433b8"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAirports(data.data);
      } catch (error) {
        console.error("Error fetching airports data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter departure airports based on input
  const handleDepartureChange = (e) => {
    const input = e.target.value;
    setDeparture(input);
    if (input.length > 1) {
      const filtered = airports.filter((airport) =>
        airport.iata_code.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredDepartures(filtered);
    } else {
      setFilteredDepartures([]);
    }
  };

  // Filter arrival airports based on input
  const handleArrivalChange = (e) => {
    const input = e.target.value;
    setArrival(input);
    if (input.length > 1) {
      const filtered = airports.filter((airport) =>
        airport.airport_name.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredArrivals(filtered);
    } else {
      setFilteredArrivals([]);
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({
      departure,
      arrival,
      departureDate,
      returnDate,
      travellers,
    });
  };

  return (
    <div className="row" id="round-trip-start">
      <div className="container">
        <form onSubmit={handleFormSubmit} className="passenger-form form-section">
          <div className="row" id="round-trip-form-start">
            {/* Departure Input */}
            <div className="col-md-2">
              <div style={{ position: 'absolute', height:'100px' }}>
                <FontAwesomeIcon 
                  icon={faLocationDot} 
                  style={{ position: 'absolute', marginLeft:'8px', left: '10px', top: '19%', transform: 'translateY(-50%)', color: '#333' }}
                />
                </div>
              <input
                type="text"
                id="departure"
                name="departure"
                placeholder="From Where?"
                value={departure}
                onChange={handleDepartureChange}
                required
              />
              {/* Dropdown for Departure Suggestions */}
              {filteredDepartures.length > 0 && (
                <ul className="suggestions-dropdown">
                  {filteredDepartures.map((airport, index) => (
                      <li
                      key={index}
                      onClick={() => {
                        setDeparture(`${airport.iata_code} - ${airport.airport_name}`)
                        setFilteredDepartures([]);  
                      }}
                    >
                       <FontAwesomeIcon icon={faPlane} style={{ marginRight: '8px' }} /> 
                      {airport.airport_name} ({airport.iata_code}), {airport.city_name}, {airport.country_name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Arrival Input */}
            <div className="col-md-2 ml-5">
              <div style={{ position: 'absolute', height:'100px' }}>
                <FontAwesomeIcon 
                  icon={faLocationDot} 
                  style={{ position: 'absolute', marginLeft:'8px', left: '10px', top: '19%', transform: 'translateY(-50%)', color: '#333' }}
                />
                </div>
              <input
                type="text"
                id="arrival"
                name="arrival"
                placeholder="To Where?"
                value={arrival}
                onChange={handleArrivalChange}
                required
              />
              {/* Dropdown for Arrival Suggestions */}
              {filteredArrivals.length > 0 && (
                <ul className="suggestions-dropdown">
                  {filteredArrivals.map((airport, index) => (
                    <li
                      key={index}
                      onClick={() => {setArrival(`${airport.iata_code} - ${airport.airport_name}`)
                        setFilteredArrivals([]); }} // Close the dropdown
                      
                    >
                      <FontAwesomeIcon icon={faPlane} style={{ marginRight: '8px' }} />
                      {airport.airport_name} ({airport.iata_code}), {airport.city_name}, {airport.country_name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Departure Date */}
            <div className="col-md-2 ml-5">
              <input
                type="date"
                id="departure-date"
                name="departure-date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                required
              />
            </div>

            {/* Return Date */}
            <div className="col-md-2">
              <input
                type="date"
                id="return-date"
                name="return-date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </div>

            {/* Travellers Input */}
            <div className="col-md-2">
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
            </div>

            {/* Search Flights Button */}
            <div className="col-md-2 in-row">
              <Button id="Search-flight" type="submit" name="search">
                <span className="sm-text">Search Flights</span>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoundTrip;

