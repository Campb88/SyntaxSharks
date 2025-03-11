import React from "react";
import { Component } from "../components/Component";
import { PropertyOutline } from "../components/PropertyOutline";
import { SmallButtonFalse } from "../components/SmallButtonFalse";
import { Icon1 } from "../icons/Icon1/Icon1";
import { IconOutlineBell1 } from "../icons/IconOutlineBell1/IconOutlineBell1";
import { IconOutlineMail1 } from "../icons/IconOutlineMail1/IconOutlineMail1";
import { IconOutlineSearch1 } from "../icons/IconOutlineSearch1/IconOutlineSearch1";
import { LeftIcon } from "../icons/LeftIcon/LeftIcon";
import { LogoOriginal1 } from "../icons/LogoOriginal1/LogoOriginal1";
import { Property1OutlineProperty2ChevronRight } from "../icons/Property1OutlineProperty2ChevronRight/Property1OutlineProperty2ChevronRight";
import { TypeFiGridSize24ColorBlack } from "../icons/TypeFiGridSize24ColorBlack/TypeFiGridSize24ColorBlack";
// import { TypeFiSettingsSize24ColorBlack } from "../icons/typefi"; TypeFiSettingsSize24ColorBlack
import { TypeFiUsersSize24ColorBlack } from "../icons/TypeFiUsersSize24ColorBlack/TypeFiUsersSize24ColorBlack";
import Icon4 from "../icons/Icon4/Icon4";
import "./Itinerary.css";
import defaultUserImage from "../icons/DefaultUserImage.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";


export const Itinerary = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);





    const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    };


  return (
    <div className="itinerary">
      <div className="side-bar">
        <div className="div">
          <div className="div-2">
            <div className="text-wrapper-2">Menu</div>

            <div className="div">
              <Link to="/dashboard">
                <div className="dashboard">
                        <TypeFiGridSize24ColorBlack className="icon" color="#191D23" />
                        <div className="text-wrapper-2">Overview</div>
                </div>
                </Link>

              <div className="div-3">
                <Icon1 className="icon" color="#191D23" />
                <Link to = "/yourtrips">
                    <div className="text-wrapper-2">Your Trips</div>
                </Link>
                
                <div className="div-wrapper">
                  <div className="text-wrapper-3a">32</div>
                </div>
              </div>

              <div className="teamsa">
                <div className="div-4a">
                    <TypeFiUsersSize24ColorBlack
                        className="icon"
                        color="#191D23"
                    />
                    <div className="text-wrapper-4a">Plan New Trips</div>
                    </div>
                    <div className="frame-2a">
                    <div className="team-sub-menu">
                        <div className="div-wrappera">
                        <div className="text-wrapper-4a">Budget</div>
                        </div>
                        <div className="div-wrappera">
                        <div className="text-wrapper-4a">Flights</div>
                        {/* <PropertyOutline /> */}
                        </div>
                        <div className="div-wrappera">
                        <div className="text-wrapper-4a">Hotels</div>
                        </div>
                        <div className="bgcolor">
                            <div className="div-wrappera">
                            <div className="text-wrapper-4a">Itinerary</div>
                            </div>
                        </div>
                        
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
          <Link to = "/settings">
          <div className="div-3">
            
            
            <Icon4 className="icon" color="#191D23" />
            <div className="text-wrapper-3">Settings</div>
          </div>
          
          </Link>
          
        </div>

        <div className="div">
          <img
            className="divider"
            alt="Divider"
            src="https://c.animaapp.com/h3MF0eWQ/img/divider.svg"
          />

          <div className="div-2">
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

        <div className="bell">
          <div className="overlap">
            <IconOutlineBell1 className="icon-instance-node" />
            <div className="group">
              <div className="overlap-group">
                <div className="ellipse" />

                <div className="text-wrapper-8">6</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mail">
          <div className="overlap">
            <IconOutlineMail1 className="icon-instance-node" />
            <div className="group">
              <div className="overlap-group">
                <div className="ellipse" />

                <div className="text-wrapper-8">2</div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="img"
          alt="Ellipse"
          src="https://c.animaapp.com/h3MF0eWQ/img/ellipse-6@2x.png"
        />

        <LogoOriginal1 className="logo-original" />
      </div>

      <div className="frame-5">
        <div className="frame-6">
          <img
            className="component-2"
            alt="Component"
            src="https://c.animaapp.com/h3MF0eWQ/img/component-8.png"
          />

          <Component className="component-instance" />
          <div className="frame-wrapper">
            <div className="frame-7">
              <div className="text-wrapper-9">Flights</div>
            </div>
          </div>

          <div className="frame-wrapper">
            <div className="frame-7">
              <div className="text-wrapper-10">Hotels</div>
            </div>
          </div>

          <div className="component-3">
            <div className="frame-7">
              <div className="text-wrapper-11">Itinerary</div>
            </div>
          </div>

          <div className="component-4">
            <div className="frame-7">
              <div className="text-wrapper-12">Deleted Account</div>
            </div>
          </div>
        </div>

        <div className="frame-8">
          <div className="frame-9">
            <div className="frame-10">
              <div className="frame-11" />

              <div className="frame-12">
                <div className="frame-13">
                  <div className="text-wrapper-13">Jenny Wilson</div>

                  <div className="frame-14">
                    <div className="frame-15">
                      <img
                        className="simple-line-icons"
                        alt="Simple line icons"
                        src="https://c.animaapp.com/h3MF0eWQ/img/simple-line-icons-check.svg"
                      />

                      <div className="text-wrapper-14">Active</div>
                    </div>
                  </div>
                </div>

                <div className="text-wrapper-15">Denver, US</div>
              </div>
            </div>
          </div>

          <div className="itinerary-frame">
            <div className="frame-16">
              <div className="text-wrapper-16">Itinerary</div>
            </div>

            <div className="div-4">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <img
                    className="link-to-hotel"
                    alt="Link to hotel"
                    src="https://c.animaapp.com/h3MF0eWQ/img/---link-to-hotel.svg"
                  />

                  <img
                    className="booked"
                    alt="Booked"
                    src="https://c.animaapp.com/h3MF0eWQ/img/--booked-2.svg"
                  />
                </div>
              </div>
            </div>

            <SmallButtonFalse className="small-button-false-instance" />

            <div className="div-4">
              <div className="group-2">
                <div className="overlap-group-3">
                  <img
                    className="link-to-hotel"
                    alt="Link to hotel"
                    src="https://c.animaapp.com/h3MF0eWQ/img/---link-to-hotel-1.svg"
                  />

                  <img
                    className="booked"
                    alt="Booked"
                    src="https://c.animaapp.com/h3MF0eWQ/img/--booked-2.svg"
                  />
                </div>
              </div>

              <div className="overlap-wrapper">
                <div className="overlap-2">
                  <img
                    className="sticky"
                    alt="Sticky"
                    src="https://c.animaapp.com/h3MF0eWQ/img/sticky.svg"
                  />

                  <img
                    className="need-to-book"
                    alt="Need to book"
                    src="https://c.animaapp.com/h3MF0eWQ/img/---need-to-book-2.svg"
                  />
                </div>
              </div>
            </div>

            <div className="dining">
              <div className="group-2">
                <div className="overlap-group-4">
                  <img
                    className="link-to-hotel"
                    alt="Link to hotel"
                    src="https://c.animaapp.com/h3MF0eWQ/img/---link-to-hotel-2.svg"
                  />

                  <img
                    className="booked"
                    alt="Booked"
                    src="https://c.animaapp.com/h3MF0eWQ/img/--booked-2.svg"
                  />
                </div>
              </div>

              <div className="group-3">
                <div className="overlap-3">
                  <img
                    className="sticky"
                    alt="Sticky"
                    src="https://c.animaapp.com/h3MF0eWQ/img/sticky-1.svg"
                  />

                  <img
                    className="need-to-book"
                    alt="Need to book"
                    src="https://c.animaapp.com/h3MF0eWQ/img/---need-to-book-2.svg"
                  />
                </div>

                <div className="group-4">
                  <div className="overlap-group-5">
                    <img
                      className="sticky"
                      alt="Sticky"
                      src="https://c.animaapp.com/h3MF0eWQ/img/sticky-2.svg"
                    />

                    <img
                      className="need-to-book"
                      alt="Need to book"
                      src="https://c.animaapp.com/h3MF0eWQ/img/---need-to-book-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <SmallButtonFalse className="design-component-instance-node" />
            <SmallButtonFalse
              className="small-button-false-2"
              text="Activities"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
