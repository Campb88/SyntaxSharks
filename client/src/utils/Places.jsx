const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const baseURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?";

const Places = {
  async search(term, location, type) {
    let endpoint = `${baseURL}&key=${apiKey}`;
    if (term) endpoint += `&query=${encodeURIComponent(term)}`;
    if (location) endpoint += `&location=${encodeURIComponent(location)}`;
    if (type) endpoint += `&type=${encodeURIComponent(type)}`;

    return fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      })
      .then((jsonResponse) => {
        if (jsonResponse.results) {
          return jsonResponse.results.map((place) => ({
            googlePlaceId: place.place_id, // using Google Place ID
            name: place.name,
            address: place.formatted_address,
            priceLevel: place.price_level,
            rating: place.rating,
            icon: place.icon,
          }));
        }
      })
      .catch((error) => {
        console.error(error);
        return [];
      });
  },

  // New autocomplete method using Google Places Autocomplete API
  async autocomplete(input) {
    const endpoint = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;
    return fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Autocomplete request failed!");
      })
      .then((jsonResponse) => {
        if (jsonResponse.predictions) {
          return jsonResponse.predictions.map((prediction) => ({
            placeId: prediction.place_id,
            description: prediction.description,
          }));
        }
        return [];
      })
      .catch((error) => {
        console.error(error);
        return [];
      });
  },

  async createPlace(tripId, place, token) {
    return fetch(`http://localhost:5713/api/trips/${tripId}/places`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(place),
    }).then((response) => response.json());
  },

  async getTrip(tripId, token) {
    return fetch(`http://localhost:5713/api/trips/${tripId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  },

  async getTrips(token) {
    return fetch("http://localhost:5713/api/trips", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  },

  async updatePlace(tripId, placeId, updatedPlace, token) {
    return fetch(`http://localhost:5713/api/trips/${tripId}/places/${placeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedPlace),
    }).then((response) => response.json());
  },

  async deletePlace(tripId, placeId, token) {
    return fetch(`http://localhost:5713/api/trips/${tripId}/places/${placeId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  },
};

export default Places;
