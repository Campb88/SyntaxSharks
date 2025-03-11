import React from "react";
import { useSelector } from "react-redux";
import { Icon1 } from "../icons/Icon1/Icon1";
import Icon4 from "../icons/Icon4/Icon4";
import { IconOutlineBell1 } from "../icons/IconOutlineBell1/IconOutlineBell1";
import { IconOutlineMail1 } from "../icons/IconOutlineMail1/IconOutlineMail1";
import { IconOutlineSearch1 } from "../icons/IconOutlineSearch1/IconOutlineSearch1";
import { LeftIcon } from "../icons/LeftIcon/LeftIcon";
import { LogoOriginal1 } from "../icons/LogoOriginal1/LogoOriginal1";
// import { Property1OutlineProperty2ChevronUp } from "../icons/Property1OutlineProperty2ChevronUp";
import { TypeFiGridSize24ColorBlack } from "../icons/TypeFiGridSize24ColorBlack/TypeFiGridSize24ColorBlack";
// import { TypeFiSettingsSize24ColorBlack } from "../icons/TypeFiSettingsSize24ColorBlack";
import { TypeFiUsersSize24ColorBlack } from "../icons/TypeFiUsersSize24ColorBlack/TypeFiUsersSize24ColorBlack";
import "./settings.css";
import defaultUserImage from "../icons/DefaultUserImage.png"
import { logout } from "../store/slices/authSlice";
import { useDispatch} from "react-redux";
import { Link, Navigate, useNavigate } from "react-router";


export const Settings = () => { 

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
      dispatch(logout());
      navigate("/");
    };


  return (
    <div className="settings">
      <div className="side-bar">
        <div className="div">
          <div className="div-2">
            <div className="text-wrapper">Menu</div>
            <div className="div">
              <Link to="/dashboard">
                <div className="dashboard">
                        <TypeFiGridSize24ColorBlack className="icon" color="#191D23" />
                        <div className="text-wrapper-2">Overview</div>
                </div>
              </Link>
              <div className="div-3">
                <Icon1 className="icon" color="#191D23" />
                <div className="text-wrapper-2">Your Trips</div>
                <div className="frame">
                  <div className="text-wrapper-3">32</div>
                </div>
              </div>

              <div className="teams">
                <div className="div-3">
                  <TypeFiUsersSize24ColorBlack className="icon" color="#191D23" />
                  <div className="text-wrapper-2">Plan New Trips</div>
                  {/* <Property1OutlineProperty2ChevronUp className="icons" color="#64748B" /> */}
                </div>
                <div className="frame-2">
                  <div className="team-sub-menu">
                    <div className="div-wrapper">
                      <div className="text-wrapper-4">Budget</div>
                    </div>
                    <div className="design">
                      <div className="text-wrapper-4">Flights</div>
                      {/* <PropertyOutline /> */}
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-4">Hotels</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-4">Itinerary</div>
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
          <div className="div-4">
            {/* <TypeFiSettingsSize24ColorBlack className="icon" color="#191D23" /> */}
            <Icon4 className="icon" color="#191D23" />
            <div className="text-wrapper-2">Settings</div>
          </div>
        </div>

        <div className="div-2">
          <img
            className="divider"
            alt="Divider"
            src="https://c.animaapp.com/qGbAAhG1/img/divider.svg"
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
        <div className="bell">
          <div className="overlap">
            <IconOutlineBell1 className="icon-instance-node" />
            <div className="group">
              <div className="overlap-group">
                <div className="ellipse" />
                <div className="text-wrapper-7">6</div>
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
                <div className="text-wrapper-7">2</div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="img"
          alt="Ellipse"
          src="https://c.animaapp.com/qGbAAhG1/img/ellipse-6@2x.png"
        />
        {/* <LogoOriginal1 className="logo-original" /> */}
        <div className="logo-original">
          <p className="rareblocks">
                <span className="blueline">/</span>
                <span className="span">Shark Travels</span>
          </p>
        </div>  
      </div>

      <div className="frame-5">
        <div className="frame-6">
          <div className="component">
            <div className="frame-7">
              <div className="text-wrapper-8">Profile</div>
            </div>
          </div>
          <div className="component">
            <div className="frame-7">
              <div className="text-wrapper-9">Change Password</div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-7">
              <div className="text-wrapper-10">Account Settings</div>
            </div>
          </div>
          <div className="component">
            <div className="frame-7">
              <div className="text-wrapper-9">Notification</div>
            </div>
          </div>
          <div className="component">
            <div className="frame-7">
              <div className="text-wrapper-9">Preference</div>
            </div>
          </div>
          <div className="component">
            <div className="frame-7">
              <div className="text-wrapper-9">Help</div>
            </div>
          </div>
          <div className="component-2">
            <div className="frame-7">
              <div className="text-wrapper-11">Deleted Account</div>
            </div>
          </div>
        </div>

        <div className="frame-8">
          <div className="frame-9">
            <div className="frame-10">
              <div className="frame-11" />
              <div className="frame-12">
                <div className="frame-13">
                  <div className="text-wrapper-12">Jenny Wilson</div>
                  <div className="frame-14">
                    <div className="frame-15">
                      <img
                        className="icons"
                        alt="Simple line icons"
                        src="https://c.animaapp.com/qGbAAhG1/img/simple-line-icons-check.svg"
                      />
                      <div className="text-wrapper-13">Active</div>
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-14">Denver, US</div>
              </div>
            </div>
            <div className="frame-16">
              <div className="frame-17">
                <div className="text-wrapper-15">Security</div>
              </div>
              <div className="div">
                <div className="frame-18">
                  <div className="frame-19">
                    <div className="text-wrapper-16">Email Address</div>
                    <div className="frame-20">
                      <p className="p">
                        The email address associated with your account
                      </p>
                    </div>
                  </div>
                  <div className="frame-19">
                    <div className="text-wrapper-17">jen.wilson@example.com</div>
                    <div className="frame-20">
                      <div className="text-wrapper-18">Unverified</div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="vector"
                alt="Vector"
                src="https://c.animaapp.com/qGbAAhG1/img/vector-20.svg"
              />
              <div className="frame-21">
                <div className="frame-18">
                  <div className="frame-19">
                    <div className="text-wrapper-16">Password</div>
                    <div className="frame-20">
                      <p className="p">
                        Update the password associated with your account.
                      </p>
                    </div>
                  </div>
                  <div className="frame-22">
                    <img
                      className="group-2"
                      alt="Group"
                      src="https://c.animaapp.com/qGbAAhG1/img/group@2x.png"
                    />
                    <div className="text-wrapper-19">Change</div>
                  </div>
                </div>
              </div>
              <img
                className="vector"
                alt="Vector"
                src="https://c.animaapp.com/qGbAAhG1/img/vector-20.svg"
              />
              <div className="frame-21">
                <div className="frame-18">
                  <div className="frame-19">
                    <div className="text-wrapper-16">2 Step Verification</div>
                    <div className="frame-20">
                      <p className="p">
                        Make your account extra secure. Along with password,
                        you’ll need to enter a code
                      </p>
                    </div>
                  </div>
                  <div className="toggle">
                    <div className="ellipse-2" />
                  </div>
                </div>
              </div>
              <img
                className="vector"
                alt="Vector"
                src="https://c.animaapp.com/qGbAAhG1/img/vector-20.svg"
              />
              <div className="frame-21">
                <div className="frame-18">
                  <div className="frame-19">
                    <div className="text-wrapper-16">Deleted Account</div>
                    <div className="frame-20">
                      <p className="p">
                        This will deleted your account. Your account will be
                        permanently deleted.
                      </p>
                    </div>
                  </div>
                  <div className="text-wrapper-20">Deleted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
