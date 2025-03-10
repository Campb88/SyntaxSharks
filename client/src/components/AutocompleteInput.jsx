import React, { useEffect, useRef } from "react";

const AutocompleteInput = ({ onPlaceSelected, placeholder = "Search for a place" }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (window.google && inputRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        inputRef.current,
        { types: ["(cities)"] } // adjust as needed
      );
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        onPlaceSelected(place);
      });
    }
  }, [onPlaceSelected]);

  return <input ref={inputRef} type="text" placeholder={placeholder} />;
};

export default AutocompleteInput;
