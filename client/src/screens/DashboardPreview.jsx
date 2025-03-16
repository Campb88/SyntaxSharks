import React, { useEffect, useState } from "react";
import { StatsCard } from "../components/StatsCard/StatsCard";
import { Icon1 } from "../icons/Icon1/Icon1";
import { Icon4 } from "../icons/Icon4/Icon4";
import { IconOutlineArrowDown1 } from "../icons/IconOutlineArrowDown1/IconOutlineArrowDown1";
import { IconOutlineArrowUp } from "../icons/IconOutlineArrowUp/IconOutlineArrowUp";
import { IconOutlineMail1 } from "../icons/IconOutlineMail1/IconOutlineMail1";
import { IconOutlineSearch1 } from "../icons/IconOutlineSearch1/IconOutlineSearch1";
import { Icons } from "../icons/Icons/Icons";
import { LeftIcon } from "../icons/LeftIcon/LeftIcon";
import { LogoOriginal1 } from "../icons/LogoOriginal1/LogoOriginal1";
import { TypeFiBellSize24ColorBlack } from "../icons/TypeFiBellSize24ColorBlack/TypeFiBellSize24ColorBlack";
import { TypeFiGridSize24ColorBlack } from "../icons/TypeFiGridSize24ColorBlack/TypeFiGridSize24ColorBlack";
import { TypeFiUsersSize24ColorBlack } from "../icons/TypeFiUsersSize24ColorBlack/TypeFiUsersSize24ColorBlack";
import "./dashboardpreview.css";
import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import Places from "../utils/Places";
import defaultUserImage from "../icons/DefaultUserImage.png";
import { toast } from "react-hot-toast";
import AutocompleteInput from "../components/AutocompleteInput";


export const DashboardPreview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  // State for trip creation
  const [tripForm, setTripForm] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [currentTrip, setCurrentTrip] = useState(null);

  // State for places (each place is a card)
  const [places, setPlaces] = useState([]);
  const [newPlace, setNewPlace] = useState({
    googlePlaceId: "",
    name: "",
    priceLevel: "",
    rating: "",
    icon: "",
    itinerary: [] // itinerary is an array of items
  });

  // State for new itinerary item input per place
  const [newItineraryItems, setNewItineraryItems] = useState({});

  // Load all trips on mount and set the currentTrip to the first one (if exists)
  const loadTrips = async () => {
    if (!token) return;
    const data = await Places.getTrips(token);
    if (data.trips && data.trips.length > 0) {
      setCurrentTrip(data.trips[0]);
      setPlaces(data.trips[0].places);
    }
  };

  useEffect(() => {
    loadTrips();
  }, [token]);

  // Create a new trip
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
        setCurrentTrip(result.trip);
        setPlaces(result.trip.places);
        toast.success(result.message);
      } else {
        toast.error(result.error || "Failed to create trip");
      }
    } catch (error) {
      toast.error("Error creating trip");
    }
  };

  // AutocompleteInput for place search
  const handlePlaceSelect = (place) => {
    setNewPlace({
      ...newPlace,
      googlePlaceId: place.place_id,
      name: place.name || place.formatted_address || "",
    });
  };

  // Add a new place card to the current trip
  const handleAddPlace = async (e) => {
    e.preventDefault();
    if (!currentTrip) {
      toast.error("Create a trip first");
      return;
    }
    if (!token) return;
    const result = await Places.createPlace(currentTrip._id, newPlace, token);
    if (result.trip) {
      setPlaces(result.trip.places);
      setNewPlace({ googlePlaceId: "", name: "", priceLevel: "", rating: "", icon: "", itinerary: [] });
      toast.success(result.message);
    } else {
      toast.error(result.error || "Failed to add place");
    }
  };

  // Update a place card (e.g. update the place's name)
  const handleUpdatePlace = async (placeId) => {
    const updatedName = prompt("Enter new name for the place:");
    if (!updatedName) return;
    const result = await Places.updatePlace(currentTrip._id, placeId, { name: updatedName }, token);
    if (result.trip) {
      setPlaces(result.trip.places);
      toast.success(result.message);
    } else {
      toast.error(result.error || "Failed to update place");
    }
  };

  // Delete a place card
  const handleDeletePlace = async (placeId) => {
    if (!window.confirm("Are you sure you want to delete this place?")) return;
    const result = await Places.deletePlace(currentTrip._id, placeId, token);
    if (result.trip) {
      setPlaces(result.trip.places);
      toast.success(result.message);
    } else {
      toast.error(result.error || "Failed to delete place");
    }
  };

  // Add a new itinerary item to a specific place card
  const handleAddItineraryItem = async (placeId) => {
    const text = newItineraryItems[placeId];
    if (!text) {
      toast.error("Itinerary item text is required");
      return;
    }
    const response = await fetch(`https://syntaxsharks-backend.onrender.com/api/trips/${currentTrip._id}/places/${placeId}/itinerary`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title: text }),
    });
    const result = await response.json();
    if (result.trip) {
      setPlaces(result.trip.places);
      setNewItineraryItems({ ...newItineraryItems, [placeId]: "" });
      toast.success(result.message);
    } else {
      toast.error(result.error || "Failed to add itinerary item");
    }
  };

  // Update an itinerary item within a place card
  const handleUpdateItineraryItem = async (placeId, itemId) => {
    const newText = prompt("Enter new itinerary text:");
    if (!newText) return;
    const response = await fetch(`https://syntaxsharks-backend.onrender.com/api/trips/${currentTrip._id}/places/${placeId}/itinerary/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title: newText }),
    });
    const result = await response.json();
    if (result.trip) {
      setPlaces(result.trip.places);
      toast.success(result.message);
    } else {
      toast.error(result.error || "Failed to update itinerary item");
    }
  };

  // Delete an itinerary item from a place card
  const handleDeleteItineraryItem = async (placeId, itemId) => {
    if (!window.confirm("Are you sure you want to delete this itinerary item?")) return;
    const response = await fetch(`https://syntaxsharks-backend.onrender.com/api/trips/${currentTrip._id}/places/${placeId}/itinerary/${itemId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    if (result.trip) {
      setPlaces(result.trip.places);
      toast.success(result.message);
    } else {
      toast.error(result.error || "Failed to delete itinerary item");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="dashboard-preview">
      <div className="feature-list">
        <div className="div">
          <div className="illustration" />
          <div className="text">
            <div className="heading">Travel Guide #1</div>
            <p className="descriptions">
            From biking and hiking to wildlife watching, experience the best of the Swiss Alps with this guide to the top things to do.
            </p>
            <div className="button-primary-with">
              <div className="frame">
                <div className="text-wrapper-2">See more</div>
              </div>
              <img
                className="icon"
                alt="Tdesign arrow left"
                src="https://c.animaapp.com/mdpJda0E/img/tdesign-arrow-left.svg"
              />
            </div>
          </div>
        </div>

        <div className="div">
          <div className="illustration-2" />
          <div className="text">
            <div className="heading">Travel Guide #2</div>
            <p className="descriptions">
            Dubai is a city of superlatives, home to the world's tallest tower, one of the world's largest shopping malls and one of the world's largest human-made marinas.
            </p>
            <div className="button-primary-with">
              <div className="frame">
                <div className="text-wrapper-2">See more</div>
              </div>
              <img
                className="icon"
                alt="Tdesign arrow left"
                src="https://c.animaapp.com/mdpJda0E/img/tdesign-arrow-left-2.svg"
              />
            </div>
          </div>
        </div>

        <div className="div">
          <div className="illustration-3" />
          <div className="text">
            <div className="heading">Travel guide #3</div>
            <p className="descriptions">
            Visit the historic landmarks of Hawai'i and learn about the rich and amazing culture of the islands.
            </p>
            <div className="button-primary-with">
              <div className="frame">
                <div className="text-wrapper-2">See more</div>
              </div>
              <img
                className="icon"
                alt="Tdesign arrow left"
                src="https://c.animaapp.com/mdpJda0E/img/tdesign-arrow-left-2.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="side-bar">
        <div className="div-2">
          <div className="div-3">
            <div className="text-wrapper-3">Menu</div>
            <div className="div-2">
              <div className="dashboard">
                <TypeFiGridSize24ColorBlack className="icon" color="#191D23" />
                <div className="text-wrapper-4">Overview</div>
              </div>

              <div className="div-4">
                <Icon1 className="icon" color="#191D23" />
                <Link to = "/yourtrips">
                  <div className="text-wrapper-4">Your Trips</div>
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

        <img
          className="img"
          alt="Ellipse"
          src="https://c.animaapp.com/mdpJda0E/img/ellipse-6@2x.png"
        />

        {/* <LogoOriginal1 className="logo-original" /> */}
        <div className="logo-original">
          <p className="rareblocks">
                <Link to = "/">
                  <span className="text-wrapper">/</span>
                  <span className="span">Shark Travels</span>
                </Link>
          </p>
        </div>  
        
      </div>

      <div className="frame-5">
        <div className="title">
          <p className="p">Welcome to your Shark Travels Dashboard!</p>
          <div className="text-wrapper-9">
            Hey {user.username ? user.username : "Guest"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
