import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import Places from "../utils/Places";
import defaultUserImage from "../icons/DefaultUserImage.png";
import { toast } from "react-hot-toast";

// Icon imports
import { Icon1 } from "../icons/Icon1/Icon1";
import { Icon4 } from "../icons/Icon4/Icon4";
import { TypeFiGridSize24ColorBlack } from "../icons/TypeFiGridSize24ColorBlack/TypeFiGridSize24ColorBlack";
import { TypeFiUsersSize24ColorBlack } from "../icons/TypeFiUsersSize24ColorBlack/TypeFiUsersSize24ColorBlack";
import { IconOutlineSearch1 } from "../icons/IconOutlineSearch1/IconOutlineSearch1";
import { IconOutlineMail1 } from "../icons/IconOutlineMail1/IconOutlineMail1";
import { IconOutlineBell1 } from "../icons/IconOutlineBell1/IconOutlineBell1";
import { LeftIcon } from "../icons/LeftIcon/LeftIcon";
import AutocompleteInput from "../components/AutocompleteInput";
import "./dashboardpreview.css";

export const YourTrips = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  // Trip creation form
  const [tripForm, setTripForm] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  // All trips array
  const [trips, setTrips] = useState([]);

  // For each trip, store a new place object from the autocomplete
  // newPlaceForTrip[tripId] = { name, googlePlaceId, etc. }
  const [newPlaceForTrip, setNewPlaceForTrip] = useState({});

  // For itinerary: newItineraryItems[`${tripId}-${placeId}`] = "text"
  const [newItineraryItems, setNewItineraryItems] = useState({});

  // Which trips are expanded to show places
  const [expandedTrips, setExpandedTrips] = useState({});

  // Load all trips on mount
  const loadTrips = async () => {
    if (!token) return;
    const data = await Places.getTrips(token);
    if (data.trips) {
      setTrips(data.trips);
    }
  };

  useEffect(() => {
    loadTrips();
  }, [token]);

  // Toggle expand/collapse for a specific trip
  const toggleExpandTrip = (tripId) => {
    setExpandedTrips((prev) => ({
      ...prev,
      [tripId]: !prev[tripId],
    }));
  };

  // -------------------
  // Trip CRUD
  // -------------------
  const handleCreateTrip = async (e) => {
    e.preventDefault();
    if (!token || !tripForm.title) {
      toast.error("Trip title is required");
      return;
    }
    try {
      const response = await fetch("https://syntaxsharks-backend.onrender.com/api/trips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(tripForm),
      });
      const result = await response.json();
      if (result.trip) {
        setTrips([...trips, result.trip]);
        toast.success(result.message);
        setTripForm({
          title: "",
          startDate: "",
          endDate: "",
          description: "",
        });
      } else {
        toast.error(result.error || "Failed to create trip");
      }
    } catch (error) {
      toast.error("Error creating trip");
    }
  };

  const handleUpdateTrip = async (tripId) => {
    const updatedTitle = prompt("Enter new trip title:");
    if (!updatedTitle) return;
    try {
      const response = await fetch(`https://syntaxsharks-backend.onrender.com/api/trips/${tripId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title: updatedTitle }),
      });
      const result = await response.json();
      if (result.trip) {
        setTrips(trips.map((t) => (t._id === tripId ? result.trip : t)));
        toast.success(result.message);
      } else {
        toast.error(result.error || "Failed to update trip");
      }
    } catch (error) {
      toast.error("Error updating trip");
    }
  };

  const handleDeleteTrip = async (tripId) => {
    if (!window.confirm("Are you sure you want to delete this trip?")) return;
    try {
      const response = await fetch(`https://syntaxsharks-backend.onrender.com/api/trips/${tripId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (result.trips) {
        setTrips(result.trips);
        toast.success(result.message);
      } else {
        toast.error(result.error || "Failed to delete trip");
      }
    } catch (error) {
      toast.error("Error deleting trip");
    }
  };

  // -------------------
  // Places CRUD
  // -------------------
  const handlePlaceSelect = (tripId, place) => {
    setNewPlaceForTrip({
      ...newPlaceForTrip,
      [tripId]: {
        googlePlaceId: place.place_id,
        name: place.name || place.formatted_address || "",
        priceLevel: "",
        rating: "",
        icon: "",
        itinerary: [],
      },
    });
  };

  const handleAddPlace = async (e, tripId) => {
    e.preventDefault();
    if (!token) return;
    const newPlace = newPlaceForTrip[tripId];
    if (!newPlace || !newPlace.name) {
      toast.error("Please select a place first.");
      return;
    }
    try {
      const response = await fetch(`https://syntaxsharks-backend.onrender.com/api/trips/${tripId}/places`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newPlace),
      });
      const result = await response.json();
      if (result.trip) {
        setTrips(trips.map((t) => (t._id === tripId ? result.trip : t)));
        toast.success(result.message);
        // Reset
        setNewPlaceForTrip({
          ...newPlaceForTrip,
          [tripId]: {
            googlePlaceId: "",
            name: "",
            priceLevel: "",
            rating: "",
            icon: "",
            itinerary: [],
          },
        });
      } else {
        toast.error(result.error || "Failed to add place");
      }
    } catch (error) {
      toast.error("Error adding place");
    }
  };

  const handleUpdatePlace = async (tripId, placeId) => {
    const updatedName = prompt("Enter new name for the place:");
    if (!updatedName) return;
    try {
      const response = await fetch(`https://syntaxsharks-backend.onrender.com/api/trips/${tripId}/places/${placeId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: updatedName }),
      });
      const result = await response.json();
      if (result.trip) {
        setTrips(trips.map((t) => (t._id === tripId ? result.trip : t)));
        toast.success(result.message);
      } else {
        toast.error(result.error || "Failed to update place");
      }
    } catch (error) {
      toast.error("Error updating place");
    }
  };

  const handleDeletePlace = async (tripId, placeId) => {
    if (!window.confirm("Are you sure you want to delete this place?")) return;
    try {
      const response = await fetch(`https://syntaxsharks-backend.onrender.com/api/trips/${tripId}/places/${placeId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (result.trip) {
        setTrips(trips.map((t) => (t._id === tripId ? result.trip : t)));
        toast.success(result.message);
      } else {
        toast.error(result.error || "Failed to delete place");
      }
    } catch (error) {
      toast.error("Error deleting place");
    }
  };

  // -------------------
  // Itinerary CRUD
  // -------------------
  const handleAddItineraryItem = async (tripId, placeId) => {
    const key = `${tripId}-${placeId}`;
    const text = newItineraryItems[key];
    if (!text) {
      toast.error("Itinerary item text is required");
      return;
    }
    try {
      const response = await fetch(
        `https://syntaxsharks-backend.onrender.com/api/trips/${tripId}/places/${placeId}/itinerary`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title: text }),
        }
      );
      const result = await response.json();
      if (result.trip) {
        setTrips(trips.map((t) => (t._id === tripId ? result.trip : t)));
        toast.success(result.message);
        // Reset
        setNewItineraryItems({
          ...newItineraryItems,
          [key]: "",
        });
      } else {
        toast.error(result.error || "Failed to add itinerary item");
      }
    } catch (error) {
      toast.error("Error adding itinerary item");
    }
  };

  const handleUpdateItineraryItem = async (tripId, placeId, itemId) => {
    const newText = prompt("Enter new itinerary text:");
    if (!newText) return;
    try {
      const response = await fetch(
        `https://syntaxsharks-backend.onrender.com/api/trips/${tripId}/places/${placeId}/itinerary/${itemId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title: newText }),
        }
      );
      const result = await response.json();
      if (result.trip) {
        setTrips(trips.map((t) => (t._id === tripId ? result.trip : t)));
        toast.success(result.message);
      } else {
        toast.error(result.error || "Failed to update itinerary item");
      }
    } catch (error) {
      toast.error("Error updating itinerary item");
    }
  };

  const handleDeleteItineraryItem = async (tripId, placeId, itemId) => {
    if (!window.confirm("Are you sure you want to delete this itinerary item?")) return;
    try {
      const response = await fetch(
        `https://syntaxsharks-backend.onrender.com/api/trips/${tripId}/places/${placeId}/itinerary/${itemId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      if (result.trip) {
        setTrips(trips.map((t) => (t._id === tripId ? result.trip : t)));
        toast.success(result.message);
      } else {
        toast.error(result.error || "Failed to delete itinerary item");
      }
    } catch (error) {
      toast.error("Error deleting itinerary item");
    }
  };

  // -------------------
  // Logout
  // -------------------
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="dashboard-preview">
      {/* Sidebar */}
      <div className="side-bar">
        <div className="div-2">
        <div className="div-3">
            <div className="text-wrapper-3">Menu</div>
            <div className="div-2">
                <Link to = "/dashboard">
                    <div className="dashboard">
                                    <TypeFiGridSize24ColorBlack className="icon" color="#191D23" />
                                    <div className="text-wrapper-4">Overview</div>
                                  </div>
                </Link>

            <div className="div-4">
                <Icon1 className="icon" color="#191D23" />
                <Link to = "/yourtrips">
                <div className="bgcolorg">
                    <div className="text-wrapper-4">Your Trips</div>
                </div>
                    
                </Link>
            </div>

            {/* <div className="teams">
                <div className="div-4">
                <TypeFiUsersSize24ColorBlack
                    className="icon"
                    color="#191D23"
                />
                <div className="text-wrapper-4">Plan New Trips</div>
                <Icons
                    className="property-1-outline-property-2-chevron-up"
                    color="#64748B"
                />
                </div>
            </div> */}
            <div className="teamsa">
            <div className="div-4">
                <TypeFiUsersSize24ColorBlack
                    className="icon"
                    color="#191D23"
                />
                <div className="text-wrapper-4">Plan New Trips</div>
                </div>
                <div className="frame-2a">
                <div className="team-sub-menu">
                    <div className="div-wrappera">
                    <div className="text-wrapper-4">Budget</div>
                    </div>
                    <div className="div-wrappera">
                    <div className="text-wrapper-4">Flights</div>
                    {/* <PropertyOutline /> */}
                    </div>
                    <div className="div-wrappera">
                    <div className="text-wrapper-4">Hotels</div>
                    </div>
                    <Link to= "/itinerary">
                    <div className="div-wrappera">
                        <div className="text-wrapper-4">Itinerary</div>
                    </div>
                    </Link>
                </div>
                <img
                    className="line"
                    alt="Line"
                    src="https://c.animaapp.com/qGbAAhG1/img/line-9.svg"
                />
                </div>
            </div>
            </div>
        </div>

        {/* <div className="div-4">
            <TypeFiBellSize24ColorBlack className="icon" color="#191D23" />
            <div className="text-wrapper-4">Notifications</div>
            <div className="frame-2">
            <div className="text-wrapper-5">10</div>
            </div>
        </div> */}

        <Link to="/settings">
            <div className="div-4">
            <Icon4 className="icon" color="#191D23" />
            <div className="text-wrapper-4">Settings</div>
            </div>
        </Link>
        </div>

        <div className="div-2">
        <img
            className="divider"
            alt="Divider"
            src="https://c.animaapp.com/mdpJda0E/img/divider.svg"
        />

        <div className="div-3">
            {/* <div className="text-wrapper-3">Profile</div> */}
            <div className="frame-3">
            <img
                className="avatar"
                alt="Avatar"
                src={defaultUserImage}
            />
            <div className="content">
                <div className="text-wrapper-6">
                {user.username ? user.username : "Guest"}
                </div>
                <div className="text-wrapper-7">
                {user.email ? user.email : "guest@example.com"}
                </div>
            </div>
            </div>
        </div>

        <div
            className="log-out inline-flex items-center cursor-pointer w-auto"
            onClick={handleLogout}
        >
            <LeftIcon className="left-icon" />
            <span className="label ml-2">Log out</span>
        </div>
        </div>
    </div>

      {/* Top Bar */}
      <div className="top">
        <div className="input-text-style">
          <div className="frame-4">
            <div className="icon-outline-search-wrapper">
              <IconOutlineSearch1 className="icon-outline-search" />
            </div>
            <div className="enter-email-to-get">Type to search</div>
          </div>
        </div>
        <div className="bell" />
        <div className="mail">
          <div className="overlap">
            <IconOutlineMail1 className="icon-outline-mail" />
          </div>
        </div>
        <div className="logo-original">
          <p className="rareblocks">
            <Link to="/">
              <span className="text-wrapper">/</span>
              <span className="span">Shark Travels</span>
            </Link>
          </p>
        </div>
      </div>

      {/* Trip Creation Section */}
      <div className="trip-creation-section">
        <h2 className="trip-title">Create a New Trip</h2>
        <form onSubmit={handleCreateTrip} className="trip-form">
          <input
            type="text"
            placeholder="Trip Title"
            value={tripForm.title}
            onChange={(e) => setTripForm({ ...tripForm, title: e.target.value })}
            className="trip-input"
          />
          <input
            type="date"
            placeholder="Start Date"
            value={tripForm.startDate}
            onChange={(e) => setTripForm({ ...tripForm, startDate: e.target.value })}
            className="trip-input"
          />
          <input
            type="date"
            placeholder="End Date"
            value={tripForm.endDate}
            onChange={(e) => setTripForm({ ...tripForm, endDate: e.target.value })}
            className="trip-input"
          />
          <textarea
            placeholder="Trip Description (optional)"
            value={tripForm.description}
            onChange={(e) => setTripForm({ ...tripForm, description: e.target.value })}
            className="trip-textarea"
          />
          <button type="submit" className="trip-btn">
            Create Trip
          </button>
        </form>
      </div>

      {/* Trips List */}
      <div className="trips-list">
        <h2 className="trips-title">Your Trips</h2>
        {trips.length === 0 && <p>No trips found.</p>}
        {trips.map((trip) => {
          const isExpanded = expandedTrips[trip._id] || false;
          return (
            <div key={trip._id} className="trip-card">
              <h3>{trip.title}</h3>
              <p>
                {trip.startDate ? new Date(trip.startDate).toLocaleDateString() : "N/A"} -{" "}
                {trip.endDate ? new Date(trip.endDate).toLocaleDateString() : "N/A"}
              </p>
              <p>{trip.description}</p>
              <div className="trip-actions">
                <button onClick={() => handleUpdateTrip(trip._id)}>Edit</button>
                <button onClick={() => handleDeleteTrip(trip._id)}>Delete</button>
                <button onClick={() => toggleExpandTrip(trip._id)}>
                  {isExpanded ? "Hide Places" : "Show Places"}
                </button>
              </div>

              {/* Places & Itinerary, only if expanded */}
              {isExpanded && (
                <div className="places-crud-section" style={{ marginTop: "16px" }}>
                  <h4>Add Places to Trip: {trip.title}</h4>
                  <form onSubmit={(e) => handleAddPlace(e, trip._id)} className="places-form">
                    <AutocompleteInput
                      onPlaceSelected={(place) => handlePlaceSelect(trip._id, place)}
                      placeholder="Search for a place"
                    />
                    <button type="submit" className="places-btn">
                      Add Place
                    </button>
                  </form>

                  <div className="place-cards">
                    {trip.places && trip.places.map((place) => (
                      <div key={place._id} className="place-card">
                        <div className="place-card-header">
                          <h3 className="place-name">{place.name}</h3>
                          <div className="place-card-actions">
                            <button
                              onClick={() => handleUpdatePlace(trip._id, place._id)}
                              className="update-btn"
                            >
                              Update Place
                            </button>
                            <button
                              onClick={() => handleDeletePlace(trip._id, place._id)}
                              className="delete-btn"
                            >
                              Delete Place
                            </button>
                          </div>
                        </div>
                        <div className="itinerary-section">
                          <h4>Itinerary Items:</h4>
                          <ul className="itinerary-list">
                            {place.itinerary && place.itinerary.map((item) => (
                              <li key={item._id} className="itinerary-item">
                                <span className="itinerary-title">{item.title}</span>
                                <div className="itinerary-actions">
                                  <button
                                    onClick={() =>
                                      handleUpdateItineraryItem(trip._id, place._id, item._id)
                                    }
                                    className="update-btn"
                                  >
                                    Update
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleDeleteItineraryItem(trip._id, place._id, item._id)
                                    }
                                    className="delete-btn"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </li>
                            ))}
                          </ul>
                          <div className="add-itinerary">
                            <input
                              type="text"
                              placeholder="Add itinerary item"
                              value={newItineraryItems[`${trip._id}-${place._id}`] || ""}
                              onChange={(e) =>
                                setNewItineraryItems({
                                  ...newItineraryItems,
                                  [`${trip._id}-${place._id}`]: e.target.value,
                                })
                              }
                              className="itinerary-input"
                            />
                            <button
                              type="button"
                              onClick={() => handleAddItineraryItem(trip._id, place._id)}
                              className="itinerary-btn"
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YourTrips;
