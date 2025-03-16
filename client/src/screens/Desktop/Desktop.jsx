import React from "react";
import "./Desktop.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { logout } from "../store/slices/authSlice.js";

export const Desktop = () => {

  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
    // Dispatches a logout and removes the userdata from localStorage to log in the user out.
  const logoutHandler = () => {
    dispatch(logout());
  }
  return (
    <div className="desktop">
      <div className="overlap">
        <img
          className="unsplash"
          alt="Unsplash"
          src="https://c.animaapp.com/QRJrUyPI/img/unsplash-t7k4aepoggk.png"
        />


        <div className="frame">
          <div className="div">
            <div className="logo">
              <p className="rareblocks">
                <span className="text-wrapper">/</span>

                <span className="span">Shark Travels</span>
              </p>
            </div>

            <div className="menu">
              <div className="frame-2">
                <a className="text-wrapper-2" href="#youTime">You Time</a>

                <a className="text-wrapper-2" href="#inspirations">Inspiration</a>
              </div>
            </div>
          </div>

          <div className="frame-3">
            {(!user || !user.email) ? (
              <>
                <button className="button-primary-with">
                  <span className="button-name-wrapper">
                    <Link to ="/login" className="button-name">Login</Link>
                  </span>
                </button>

                <button className="button-primary-with">
                  <span className="button-name-wrapper">
                    <Link to ="/signup" className="button-name">Sign up</Link>
                  </span>
                </button>
              </>
            ) : (
              <>
                <button className="button-primary-with">
                  <span className="button-name-wrapper">
                    <Link to ="/dashboard" className="button-name">Dashboard</Link>
                  </span>
                </button>

                <button className="button-primary-with" onClick={logoutHandler}>
                  <span className="button-name-wrapper">
                    <p className="button-name">Log Out</p>
                  </span>
                </button>
              </>
            )}
            
          </div>
        </div>

        <div className="frame-4">
          <div className="div-2">
            <div className="text-in-planning">Traveling Plans?</div>

            <p className="p">
              We can help!<br />Join now to make plans and easily share them with others!
            </p>
          </div>

          <button className="button">
            <div className="frame-5">
              <Link to = "/dashboard" className="button-name">Get Started</Link>
            </div>

            <img
              className="tdesign-arrow-left"
              alt="Tdesign arrow left"
              src="https://c.animaapp.com/QRJrUyPI/img/tdesign-arrow-left-1.svg"
            />
          </button>
        </div>

        <div className="frame-6">
          <div className="metrics-section" id="youTime">
            <div className="heading-and">
              <div className="heading-and-2">
                <div className="subheading">Vacation Faster</div>

                <p className="heading">Discover Our Locations <br /> Have More You Time</p>
              </div>

              <p className="supporting-text">
                Easily and seemlessly coordinate travel plans.
              </p>
            </div>

            <div className="container">
              <div className="content">
                <div className="row">
                  <div className="metric-item">
                    <div className="number-and-text">
                      <div className="number">50</div>

                      <div className="text-and-supporting">
                        <div className="text">US States</div>

                        <p className="supporting-text-2">
                          Exploring our own nation?
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="metric-item">
                    <div className="number-and-text">
                      <div className="number">Many</div>

                      <div className="text-and-supporting">
                        <div className="text">Beautiful Locales!</div>

                        <p className="supporting-text-2">
                          No matter where you decide to go, there's sure to be something spectactular waiting.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="metric-item">
                    <div className="number-and-text">
                      <div className="number">365</div>

                      <div className="text-and-supporting">
                        <div className="text">Days Per Year</div>

                        <p className="supporting-text-2">
                          You've got all this time.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="metric-item">
                    <div className="number-and-text">
                      <div className="number">Now</div>

                      <div className="text-and-supporting">
                        <div className="text">It's time to take some time for you.</div>

                        <p className="supporting-text-2">
                          Explore the world or take a smaller getaway, it's all up to and for you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="image" />
            </div>
          </div>

          <div className="about-us" id="inspirations">
            <div className="header">
              <div className="header-2">
                <div className="label">Our Places</div>

                <div className="text-wrapper-4">
                  Need Inspiration?
                </div>
              </div>

              <div className="body-text">
                <p className="text-wrapper-5">
                  Together, we’ll craft your dream vacation!
                </p>

                <Link to = "/dashboard" className="button-primary-with-2">
                  <div className="frame-5">
                    <div className="text-wrapper-6">See more</div>
                  </div>
                  <img
                    className="tdesign-arrow-left"
                    alt="Tdesign arrow left"
                    src="https://c.animaapp.com/QRJrUyPI/img/tdesign-arrow-left-1.svg"
                  />
                </Link>
              </div>
            </div>

            <img
              className="divider"
              alt="Divider"
              src="https://c.animaapp.com/QRJrUyPI/img/divider.svg"
            />

            <div className="div-2">
              <div className="feature-list">
                <div className="card">
                  <div className="illustration" />

                  <div className="text-2">
                    <div className="heading-2">Feeling Toasty?</div>

                    <p className="descriptions">
                      See the natural wonders in the drylands of Arizona and visit the grand canyon!
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="illustration-2" />

                  <div className="text-2">
                    <p className="heading-2">
                      Feeling Tropical?
                    </p>

                    <p className="descriptions">
                      Live the beach life in Hawaii!
                    </p>
                  </div>
                </div>
              </div>

              <div className="feature-list">
                <div className="card">
                  <div className="illustration-3" />

                  <div className="text-2">
                    <div className="heading-2">Mountainous Spirit?</div>

                    <p className="descriptions">
                      Explore the mountains of the Rockies or Appalachians!
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="illustration-4" />

                  <div className="text-2">
                    <div className="heading-2">Simple and Plains?</div>

                    <p className="descriptions">
                      Visit the vast horizons of the midwest!
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="illustration-5" />

                  <div className="text-2">
                    <div className="heading-2">Never Sleep?</div>

                    <p className="descriptions">
                      We got just the cities for you!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-13">
            <div className="frame-14">
              <div className="logo">
                <p className="rareblocks">
                  <span className="text-wrapper">/</span>

                  <span className="span">Shark Travels</span>
                </p>
              </div>

              <div className="nav-item">
                <div className="nav-item-2">
                  <div className="text-wrapper-7">Home</div>
                </div>

                <div className="nav-item-2">
                  <div className="text-wrapper-8">About Us</div>
                </div>

                <div className="nav-item-2">
                  <div className="text-wrapper-8">Service</div>
                </div>

                <div className="nav-item-2">
                  <div className="text-wrapper-8">Work</div>
                </div>
              </div>

              <div className="social">
                <div className="element">
                  <img
                    className="logo-twitter"
                    alt="Logo twitter"
                    src="https://c.animaapp.com/QRJrUyPI/img/logo-twitter-2@2x.png"
                  />
                </div>

                <div className="logo-fb-simple-wrapper">
                  <img
                    className="logo-fb-simple"
                    alt="Logo fb simple"
                    src="https://c.animaapp.com/QRJrUyPI/img/logo-fb-simple-2@2x.png"
                  />
                </div>

                <div className="element">
                  <img
                    className="logo-instagram"
                    alt="Logo instagram"
                    src="https://c.animaapp.com/QRJrUyPI/img/logo-instagram-1@2x.png"
                  />
                </div>

                <div className="element">
                  <img
                    className="logo-github"
                    alt="Logo github"
                    src="https://c.animaapp.com/QRJrUyPI/img/logo-github-1@2x.png"
                  />
                </div>
              </div>
            </div>

            <div className="frame-15">
              <img
                className="line"
                alt="Line"
                src="https://c.animaapp.com/QRJrUyPI/img/line-63.svg"
              />

              <p className="copyright">
                © Copyright 2025, All Rights Reserved by Syntax Sharks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;