const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
const baseURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?";


const Places = {
    async search (term, location, type) {
        let endpoint = `${baseURL}&key=${apiKey}&location=${encodeURIComponent(location)}&type=${encodeURIComponent(type)}&query=${encodeURIComponent(term)}`;
        
        if (term) endpoint += `&query=${encodeURIComponent(term)}`;
        if (location) endpoint += `&location=${encodeURIComponent(location)}`;
        if (type) endpoint += `&type=${encodeURIComponent(type)}`;

        return fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Request failed!");
        })
         .then(jsonResponse => {
             if (jsonResponse.results) {
                 return jsonResponse.results.map(place => ({
                     id: place.id,
                     name: place.name,
                     address: place.formatted_address,
                     priceLevel: place.price_level,
                     rating: place.rating,
                     icon: place.icon,
                 }));
             }
         }
        )
        .catch(error => {
            console.error(error);
            return [];
        });
    }
};

export default Places;