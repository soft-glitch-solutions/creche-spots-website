import React from "react";
import "./Price.css";
import { FaCheckCircle } from "react-icons/fa"; // Importing the check icon

const Price = () => {
  const plans = [
    {
      name: "Free Forever",
      price: "R0",
      features: [
        "Basic Listing",
        "Parent Messaging",
        "Enrollment Tracking",
      ],
      buttonText: "Sign Up for Free",
      buttonLink: "/signup",
      className: "free-plan",
    },
    {
      name: "Basic",
      price: "R199/month",
      features: [
        "All Free Features",
        "Website Integration",
        "Lesson Plans",
        "Basic Reporting",
      ],
      buttonText: "Contact Us",
      buttonLink: "mailto:info@crechespots.co.za",
      className: "basic-plan",
    },
    {
      name: "Pro",
      price: "R399/month",
      features: [
        "All Basic Features",
        "Photobooks",
        "Social Media Integration",
        "Advanced Analytics",
      ],
      buttonText: "Contact Us",
      buttonLink: "mailto:info@crechespots.co.za",
      className: "pro-plan",
    },
  ];

  return (
    <section className="price-wrapper">
      <div className="price-container">
        <h2 className="price-header">What Does CrecheSpot Cost You?</h2>
        <div className="price-cards">
          {plans.map((plan, index) => (
            <div className={`price-card ${plan.className}`} key={index}>
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-price">{plan.price}</p>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={plan.buttonLink} className="plan-button">
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
