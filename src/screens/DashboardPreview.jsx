import React from "react";
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

export const DashboardPreview = () => {
  return (
    <div className="dashboard-preview">
      <div className="feature-list">
        <div className="div">
          <div className="illustration" />

          <div className="text">
            <div className="heading">Lorem ipsum dolor sit</div>

            <p className="descriptions">
              Lorem ipsum dolor sit amet consectetur. Nunc ipsum sollicitudin
              semper mauris congue nibh.
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
            <div className="heading">Lorem ipsum dolor sit</div>

            <p className="descriptions">
              Lorem ipsum dolor sit amet consectetur. Nunc ipsum sollicitudin
              semper mauris congue nibh.
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
            <div className="heading">Lorem ipsum dolor sit</div>

            <p className="descriptions">
              Lorem ipsum dolor sit amet consectetur. Nunc ipsum sollicitudin
              semper mauris congue nibh.
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
                <div className="text-wrapper-4">Your Trips</div>

                <div className="div-wrapper">
                  <div className="text-wrapper-5">32</div>
                </div>
              </div>

              <div className="teams">
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
              </div>
            </div>
          </div>

          <div className="div-4">
            <TypeFiBellSize24ColorBlack className="icon" color="#191D23" />
            <div className="text-wrapper-4">Notifications</div>

            <div className="frame-2">
              <div className="text-wrapper-5">10</div>
            </div>
          </div>

          <div className="div-4">
            <Icon4 className="icon" color="#191D23" />
            <div className="text-wrapper-4">Settings</div>
          </div>
        </div>

        <div className="div-2">
          <img
            className="divider"
            alt="Divider"
            src="https://c.animaapp.com/mdpJda0E/img/divider.svg"
          />

          <div className="div-3">
            <div className="text-wrapper-3">Profile</div>

            <div className="frame-3">
              <img
                className="avatar"
                alt="Avatar"
                src="https://c.animaapp.com/mdpJda0E/img/avatar@2x.png"
              />

              <div className="content">
                <div className="text-wrapper-6">Jenny Wilson</div>

                <div className="text-wrapper-7">jen.wilson@example.com</div>
              </div>
            </div>
          </div>

          <div className="log-out">
            <LeftIcon className="left-icon" />
            <div className="layout">
              <div className="label">Log out</div>
            </div>
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
          src="https://c.animaapp.com/mdpJda0E/img/ellipse-6@2x.png"
        />

        <LogoOriginal1 className="logo-original" />
      </div>

      <div className="frame-5">
        <div className="title">
          <p className="p">here’s what’s happening with your store today</p>

          <div className="text-wrapper-9">Hey Mariana -</div>
        </div>

        <div className="stats">
          <StatsCard
            cardClassName="stats-card-instance"
            className="stats-card-1"
            text="TOTAL TRIPS"
          />
          <StatsCard
            cardClassName="stats-card-instance"
            className="stats-card-1"
            divClassName="stats-card-1-instance"
            icon={<IconOutlineArrowDown1 className="icon-instance-node" />}
            text="TIMES SPEND TRAVEL"
            text1="$2,38,485"
            text2="+ 14%"
          />
          <StatsCard
            cardClassName="stats-card-instance"
            className="stats-card-1"
            icon={<IconOutlineArrowUp className="icon-instance-node" />}
            text="TOTAL ORDERS"
            text1="84,382"
            text2="+ 36%"
          />
          <StatsCard
            cardClassName="stats-card-instance"
            className="stats-card-1"
            icon={<IconOutlineArrowUp className="icon-instance-node" />}
            text="TOTAL CUSTOMERS"
            text1="33,493"
            text2="+ 36%"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
