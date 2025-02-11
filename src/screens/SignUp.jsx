import React from "react";
import { TypePrimaryStateWrapper } from "../components/TypePrimaryStateWrapper"
import { Button } from "../icons/Button/Button";
import { Button1 } from "../icons/Button1/Button1";
import { Logos1 } from "../icons/Logos1/Logos1";
import "./signup.css";

export const SignUp = () => {
  return (
    <div className="signup">
      <div className="contact-page-header">
        <img
          className="asset"
          alt="Asset"
          src="https://c.animaapp.com/ysurVnUL/img/asset-11@4x.png"
        />

        <div className="section">
          <div className="container">
            <div className="content">
              <div className="div">
                <div className="heading">Let’s Travels together</div>

                <p className="you-can-reach-us">
                  <span className="text-wrapper">
                    You can reach us anytime via{" "}
                  </span>

                  <span className="span">hi@sample.com</span>
                </p>
              </div>

              <div className="form">
                <div className="div">
                  <div className="input-field">
                    <div className="div-2">
                      <div className="div-2">
                        <input
                          className="input"
                          htmlFor="input-2"
                          placeholder="Name"
                          type="text"
                        />

                        <div className="input-2">
                          <div className="content-2">
                            <input
                              className="text"
                              id="input-2"
                              placeholder="Your name"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="input-field">
                    <div className="div-2">
                      <div className="div-2">
                        <input
                          className="input"
                          htmlFor="input-4"
                          placeholder="Email"
                          type="email"
                        />

                        <div className="input-2">
                          <div className="content-2">
                            <input
                              className="text"
                              id="input-4"
                              placeholder="you@company.com"
                              type="email"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="input-field">
                    <div className="div-2">
                      <div className="div-2">
                        <div className="label-2">Phone number</div>

                        <div className="input-3">
                          <div className="dropdown">
                            <div className="dropdown-text">US</div>

                            <img
                              className="chevron-down"
                              alt="Chevron down"
                              src="https://c.animaapp.com/ysurVnUL/img/chevron-down.svg"
                            />
                          </div>

                          <div className="text-input">
                            {/* <div className="text-2">+1 (555) 000-0000</div> */}
                            <input
                              className="text"
                              id="phonenumber"
                              placeholder="+1 (555) 000-0000"
                              type="number"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <TypePrimaryStateWrapper
                  className="button-instance"
                  iconOnly={false}
                  leftIcon={false}
                  rightIcon={false}
                  size="large"
                  state="default"
                  text="Get Started"
                  type="primary"
                />
              </div>

              <div className="you-can-reach-us-2">Or Create Account with</div>

              <div className="container-2">
                <Button className="icon-instance-node" />
                <Button1 className="button-1" />
                <div className="logos-wrapper">
                  <Logos1 className="logos" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;