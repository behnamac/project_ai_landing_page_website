import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => (
  <div className="gpt5__header section__padding" id="home">
    <div className="gpt5__header-content">
      <h1 className="gradient__text">
        Create Something Amazing with OpenAI's GPT-5!
      </h1>
      <p>
        Still, any form of assistance for travel seemed unsatisfying. Not all
        thoughts brought the blessing of action. Joyful changes and lively
        connections marked the path of indulgence. Over the years, we permitted
        what was requested to keep things in order.
      </p>

      <div className="gpt5__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt5__header-content__people">
        <img src={people} />
        <p>Over 2,00 people requested access within the past 24 hours.</p>
      </div>
    </div>

    <div className="gpt5__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
