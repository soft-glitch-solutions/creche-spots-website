import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import googlePlayIcon from '../../assets/google-play-icon.svg';
import appStoreIcon from '../../assets/app-store-icon.svg';
import "./Value.css";

const listItems = [
  {
    id: 1,
    text: "Find Local Creches",
    bgColor: "bg-soft-purple",
  },
  {
    id: 2,
    text: "Compare Options",
    bgColor: "bg-soft-pink",
  },
  {
    id: 3,
    text: "Submit & Track Applications",
    bgColor: "bg-soft-peach",
  },
  {
    id: 4,
    text: "Make Payments",
    bgColor: "bg-soft-blue",
  },
  {
    id: 5,
    text: "and more!",
    bgColor: "bg-soft-green",
  },
];

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left side */}
        <div className="flexColStart v-left">
          <h1 className="download-title" style={{ color: "#3a5dc4" }}>
            Download the app!
          </h1>
          <br />
          <div className="download-buttons">
            <a
              href="https://online.crechespots.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              <img src={googlePlayIcon} alt="Download on Google Play" className="download-icon" />
            </a>
            <a
              href="https://online.crechespots.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              <img src={appStoreIcon} alt="Download on the App Store" className="download-icon" />
            </a>
          </div>
          <br />
          <div className="image-container">
            <img src="./delisha_download_app.png" alt="App preview" />
          </div>
        </div>

        {/* Right side */}
        <div className="v-right">
          <div className="image-placeholder">
            {listItems.map((item) => (
              <div
                key={item.id}
                className={`flex items-center gap-4 p-4 rounded-lg transition-transform hover:scale-102 cursor-pointer ${item.bgColor}`}
              >
                <div className="number">
                  <span>{item.id}.</span>
                </div>
                <span className="text-xl font-display">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
