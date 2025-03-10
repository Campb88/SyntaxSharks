import React, { useState } from 'react';
import './Flights.css';

const FlightSearch = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [flights, setFlights] = useState([]);

  const amadeusApiKey = 'GxKY7VwmFUhhPCP7jxTVKf74SUC2kmyC';
  const amadeusApiSecret = 'JpgKhAPnpRPnTOmW';
  const aviationstackApiKey = '031beda5c975f22098f70c80281a244e';

  // Function to fetch IATA code using Amadeus API
  const fetchIataCode = async (query) => {
    try {
      // Get an access token from Amadeus
      const authResponse = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=client_credentials&client_id=${amadeusApiKey}&client_secret=${amadeusApiSecret}`,
      });

      if (!authResponse.ok) {
        throw new Error(`Failed to authenticate with Amadeus API: ${authResponse.status}`);
      }

      const authData = await authResponse.json();
      const accessToken = authData.access_token;

      // Search for airports using the query
      const searchResponse = await fetch(
        `https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=${query}&view=LIGHT`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!searchResponse.ok) {
        throw new Error(`Failed to fetch IATA code: ${searchResponse.status}`);
      }

      const searchData = await searchResponse.json();
      console.log(`Amadeus API search result for "${query}":`, searchData);

      // Extract the first result's IATA code
      if (searchData.data && searchData.data.length > 0) {
        const firstResult = searchData.data[0];
        const iataCode = firstResult.iataCode;

        if (!iataCode) {
          console.warn(`No IATA code found for query: ${query}`);
          return null;
        }

        console.log(`First result for "${query}":`, firstResult.name, iataCode);
        return { name: firstResult.name, code: iataCode };
      } else {
        console.warn(`No results found for query: ${query}`);
        return null;
      }
    } catch (error) {
      console.error(`Error fetching IATA code for "${query}":`, error);
      return null;
    }
  };

  // Function to fetch flight data using Aviationstack API
  const fetchFlights = async (fromIataCode, toIataCode, departDate) => {
    try {
      const endpoint = `https://api.aviationstack.com/v1/flights?access_key=${aviationstackApiKey}&dep_iata=${fromIataCode}&arr_iata=${toIataCode}`;

      console.log('Flight API Request:', endpoint);

      const response = await fetch(endpoint, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Raw API Response:', data);

      if (!data.data || data.data.length === 0) {
        console.warn('No flights found.');
        setFlights([]);
        return;
      }

      const parsedFlights = data.data.map((flight) => {
        return {
          airline: flight.airline.name || 'Unknown Airline',
          departureAirport: flight.departure.airport || 'Unknown Airport',
          arrivalAirport: flight.arrival.airport || 'Unknown Airport',
          departure: flight.departure.scheduled || 'Unknown',
          arrival: flight.arrival.scheduled || 'Unknown',
          status: flight.flight_status || 'Unknown',
          flightNumber: flight.flight.number || 'Unknown',
        };
      });

      setFlights(parsedFlights);
    } catch (error) {
      console.error('Error fetching flights:', error);
      setFlights([]);
    }
  };

  // Search for flights
  const searchFlights = async () => {
    if (!from || !to || !departDate) {
      console.warn('Missing required fields: From, To, or Departure Date');
      return;
    }

    try {
      const fromAirportData = await fetchIataCode(from);
      const toAirportData = await fetchIataCode(to);

      if (!fromAirportData || !toAirportData) {
        console.error('Could not retrieve valid IATA codes.');
        return;
      }

      console.log('From Airport:', fromAirportData.name, fromAirportData.code);
      console.log('To Airport:', toAirportData.name, toAirportData.code);

      const formattedDepartDate = new Date(departDate).toISOString().split('T')[0];
      await fetchFlights(fromAirportData.code, toAirportData.code, formattedDepartDate);
    } catch (error) {
      console.error('Error searching for flights:', error);
      setFlights([]);
    }
  };

  return (
    <div className="flight-selector-container">
      {/* Header */}
      <div className="flight-selector-header">
        <h1>Flights</h1>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <div className="SearchBar-fields">
          <input
            placeholder="From (City Name)"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="search-input"
          />
          <input
            placeholder="To (City Name)"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="SearchBar-submit">
          <button onClick={searchFlights} className="search-button">
            Search Flights
          </button>
        </div>
      </div>

      {/* Display available flights */}
      {flights.length > 0 && (
        <div className="flights-list">
          <h3>Available Flights</h3>
          <div className="flights-grid">
            {flights.map((flight, index) => (
              <div className="flight-card">
              <div className="flight-info">
                <h2>{flight.airline}</h2>
                <div className="flight-information">
                  <div className="flight-details">
                    <p><strong>Departure:</strong> {flight.departureAirport}</p>
                    <p><strong>Departure Time:</strong> {flight.departure}</p>
                    <p><strong>Arrival:</strong> {flight.arrivalAirport}</p>
                    <p><strong>Arrival Time:</strong> {flight.arrival}</p>
                  </div>
                  <div className="flight-status">
                    <p><strong>Status:</strong> {flight.status}</p>
                    <p><strong>Flight Number:</strong> {flight.flightNumber}</p>
                  </div>
                </div>
                <button className="add-to-trip-button">Add to Trip</button>
              </div>
            </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
