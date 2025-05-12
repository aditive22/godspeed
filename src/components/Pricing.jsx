import React from "react";
import "./Pricing.css";

const plans = [
  {
    name: "Starter",
    price: "$9/mo",
    features: [
      "Up to 3 team members",
      "Basic analytics",
      "5GB storage"
    ]
  },
  {
    name: "Pro",
    price: "$29/mo",
    features: [
      "Up to 15 team members",
      "Advanced analytics",
      "50GB storage",
      "Priority support"
    ]
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    features: [
      "Unlimited team members",
      "Custom analytics",
      "Unlimited storage",
      "Dedicated manager"
    ]
  }
];

const Pricing = () => (
  <div className="pricing-section">
    <h2 className="pricing-title">Pricing</h2>
    <div className="pricing-tiers">
      {plans.map((plan, idx) => (
        <div className="pricing-card" key={idx}>
          <div className="pricing-plan">{plan.name}</div>
          <div className="pricing-price">{plan.price}</div>
          <ul className="pricing-features">
            {plan.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <button className="pricing-btn">
            {plan.name === "Enterprise" ? "Contact Sales" : "Choose Plan"}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Pricing;
