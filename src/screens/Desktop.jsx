import React from "react";
import "./style.css";
import { Link } from "react-router";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="overlap">
        <img
          className="unsplash"
          alt="Unsplash"
          src="https://c.animaapp.com/QRJrUyPI/img/unsplash-t7k4aepoggk.png"
        />

        <div className="rectangle" />

        <div className="frame">
          <div className="div">
            <div className="logo">
              <p className="rareblocks">
                <span className="text-wrapper">/</span>

                <span className="span">rareblocks</span>
              </p>
            </div>

            <div className="menu">
              <div className="frame-2">
                <div className="text-wrapper-2">Features</div>

                <div className="text-wrapper-2">Pricing</div>

                <div className="text-wrapper-2">Automation</div>
              </div>
            </div>
          </div>

          <div className="frame-3">
            <div className="div-wrapper">
              <div className="text-wrapper-3">Customer Login</div>
            </div>

            <button className="button-primary-with">
              <span className="button-name-wrapper">
                <Link to ="/signup" className="button-name">Sign up</Link>
              </span>
            </button>
          </div>
        </div>

        <div className="frame-4">
          <div className="div-2">
            <div className="text-in-planning">Traveling planning needs</div>

            <p className="p">
              Lorem ipsum dolor sit amet consectetur. Lorem ullamcorper in
              curabitur ultricies gravida euismod. Diam purus et montes duis
              eget convallis congue. Arcu mollis ut.
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
          <div className="metrics-section">
            <div className="heading-and">
              <div className="heading-and-2">
                <div className="subheading">Launch faster</div>

                <p className="heading">Discover Our Story and What Drive Us</p>
              </div>

              <p className="supporting-text">
                We’ve done all the heavy lifting so you don’t have to — get all
                the data you need to launch and grow your business faster.
              </p>
            </div>

            <div className="container">
              <div className="content">
                <div className="row">
                  <div className="metric-item">
                    <div className="number-and-text">
                      <div className="number">4,000+</div>

                      <div className="text-and-supporting">
                        <div className="text">Global customers</div>

                        <p className="supporting-text-2">
                          We’ve helped over 4,000 amazing global companies.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="metric-item">
                    <div className="number-and-text">
                      <div className="number">60+</div>

                      <div className="text-and-supporting">
                        <div className="text">Destination</div>

                        <p className="supporting-text-2">
                          Our customers have reported an average of ~600% ROI.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="metric-item">
                    <div className="number-and-text">
                      <div className="number">10k</div>

                      <div className="text-and-supporting">
                        <div className="text">Global Visitor</div>

                        <p className="supporting-text-2">
                          Our app has been downloaded over 10k times.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="metric-item">
                    <div className="number-and-text">
                      <div className="number">200+</div>

                      <div className="text-and-supporting">
                        <div className="text">5-star reviews</div>

                        <p className="supporting-text-2">
                          We’re proud of our 5-star rating with over 200
                          reviews.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="image" />
            </div>
          </div>

          <div className="about-us">
            <div className="header">
              <div className="header-2">
                <div className="label">Our Places</div>

                <div className="text-wrapper-4">
                  Creative Minds, Inspired Results
                </div>
              </div>

              <div className="body-text">
                <p className="text-wrapper-5">
                  Together, we’ll craft solutions that align with your vision,
                  adapt to your needs, and drive measurable results. Let’s build
                  a future that reflects your ambition and sets new benchmarks
                  for success.
                </p>

                <div className="button-primary-with-2">
                  <div className="frame-5">
                    <div className="text-wrapper-6">See more</div>
                  </div>

                  <img
                    className="tdesign-arrow-left"
                    alt="Tdesign arrow left"
                    src="https://c.animaapp.com/QRJrUyPI/img/tdesign-arrow-left-1.svg"
                  />
                </div>
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
                    <div className="heading-2">Lorem ipsum dolor sit</div>

                    <p className="descriptions">
                      Lorem ipsum dolor sit amet consectetur. Nunc ipsum
                      sollicitudin semper mauris congue nibh.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="illustration-2" />

                  <div className="text-2">
                    <p className="heading-2">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>

                    <p className="descriptions">
                      Lorem ipsum dolor sit amet consectetur. Nunc ipsum
                      sollicitudin semper mauris congue nibh.
                    </p>
                  </div>
                </div>
              </div>

              <div className="feature-list">
                <div className="card">
                  <div className="illustration-3" />

                  <div className="text-2">
                    <div className="heading-2">Lorem ipsum dolor sit</div>

                    <p className="descriptions">
                      Lorem ipsum dolor sit amet consectetur. Nunc ipsum
                      sollicitudin semper mauris congue nibh.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="illustration-4" />

                  <div className="text-2">
                    <div className="heading-2">Lorem ipsum dolor sit</div>

                    <p className="descriptions">
                      Lorem ipsum dolor sit amet consectetur. Nunc ipsum
                      sollicitudin semper mauris congue nibh.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="illustration-5" />

                  <div className="text-2">
                    <div className="heading-2">Lorem ipsum dolor sit</div>

                    <p className="descriptions">
                      Lorem ipsum dolor sit amet consectetur. Nunc ipsum
                      sollicitudin semper mauris congue nibh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial">
            <div className="text-3">
              <p className="heading-3">
                Real Stories from <br />
                Our Clients
              </p>

              <p className="description">
                Read how Eventra has transformed the event experiences of our
                users through convenience and ease of use.
              </p>
            </div>

            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="container-2">
                  <div className="card-2">
                    <p className="descriptions-2">
                      This application really helps me maintain my health in a
                      fun way. I feel fitter and healthier since I started using
                      this app!
                    </p>

                    <div className="user">
                      <div className="frame-7" />

                      <div className="text-4">
                        <div className="title">Rama Satria Putra</div>

                        <div className="description-2">
                          Chronic Disease Sufferers
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-2">
                    <p className="descriptions-2">
                      From purchasing tickets to scanning them at events,
                      Eventra provides a flawless experience every time. I
                      highly recommend it!
                    </p>

                    <div className="user">
                      <div className="frame-8" />

                      <div className="text-4">
                        <div className="title-2">David James Lee</div>

                        <div className="description-3">Fitness Trainer</div>
                      </div>
                    </div>
                  </div>

                  <div className="card-2">
                    <p className="descriptions-2">
                      Eventra helped me discover local concerts quickly and
                      register easily. I love how user-friendly the app is for
                      event planning!
                    </p>

                    <div className="user">
                      <div className="frame-9" />

                      <div className="text-4">
                        <div className="title-3">Emily Anne Roberts</div>

                        <div className="description-4">Marketing Manager</div>
                      </div>
                    </div>
                  </div>

                  <div className="card-2">
                    <p className="descriptions-2">
                      The app’s ticketing system is incredibly fast and secure.
                      Eventra is hands down the best platform I’ve ever used for
                      events!
                    </p>

                    <div className="user">
                      <div className="frame-10" />

                      <div className="text-4">
                        <div className="title-2">John Michael Mitchell</div>

                        <div className="description-3">Software Engineer</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container-3">
                  <div className="card-2">
                    <p className="descriptions-2">
                      Eventra’s seamless ticketing and reminder features keep me
                      organized and excited for every upcoming event I plan to
                      attend!
                    </p>

                    <div className="user">
                      <div className="frame-10" />

                      <div className="text-4">
                        <div className="title-2">Mark Anthony Johnson</div>

                        <div className="description-3">Teacher</div>
                      </div>
                    </div>
                  </div>

                  <div className="card-2">
                    <p className="descriptions-2">
                      With Eventra, I can easily find and register for local
                      events, saving both time and effort. It has become my
                      favorite app!
                    </p>

                    <div className="user">
                      <div className="frame-11" />

                      <div className="text-4">
                        <div className="title-2">Alexander John Parker</div>

                        <div className="description-3">Photographer</div>
                      </div>
                    </div>
                  </div>

                  <div className="card-2">
                    <p className="descriptions-2">
                      I love how Eventra provides personalized recommendations,
                      always showing me events I’m genuinely interested in
                      attending.
                    </p>

                    <div className="user">
                      <div className="frame-8" />

                      <div className="text-4">
                        <div className="title-2">Michael Edward Brooks</div>

                        <div className="description-3">Entrepreneur</div>
                      </div>
                    </div>
                  </div>

                  <div className="card-2">
                    <p className="descriptions-3">
                      This app is awesome! The integration feature with other
                      health devices allows me to see all my health data in one
                      place.
                    </p>

                    <div className="user">
                      <div className="frame-12" />

                      <div className="text-4">
                        <div className="title">Nadia Ayu Lestari</div>

                        <div className="description-5">
                          Athlete and Fitness Enthusiast
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overlay" />
              </div>
            </div>
          </div>

          <div className="frame-13">
            <div className="frame-14">
              <div className="logo">
                <p className="rareblocks">
                  <span className="text-wrapper">/</span>

                  <span className="span">rareblocks</span>
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
                © Copyright 2024, All Rights Reserved by {"{"}
                {"}"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;