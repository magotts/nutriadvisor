import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Widget } from "react-chat-widget";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        padding: 0,
        margin: 0,
        paddingTop: "98px",
      }}
    >
      <div className="parallax">
        <img
          alt=""
          className="image-1"
          src="https://static.wixstatic.com/media/3cd817_01efa93dfc2b4b77808f98f8915ba723~mv2.gif"
        />
        <div className="images-home">
          <Link to="/food_search">
          <div className="img__wrap">
            <img
              alt="avocado toast"
              className="image-2"
              src="https://cdn.dribbble.com/users/6172678/screenshots/14420419/media/72fbc65f79121ccff7661e8642a5c10a.gif"
            />
            <p class="img__description">Food Search</p>
            </div>
          </Link>
          <Link to="/exercise_search">
          <div className="img__wrap">
            <img
              alt="running"
              className="image-2"
              src="https://n1s1.hsmedia.ru/d6/13/6e/d6136e54f83d566000adede389207348/1000x1000_0xac120002_9480279451540484588.gif"
            />
            <p class="img__description">Exercise Search</p>
            </div>
          </Link>
          <Link to="/biometrics">
          <div className="img__wrap">
            <img
              alt="scale"
              className="image-2"
              src="https://c.tenor.com/OO7zyJWt_tsAAAAM/donut-weighing-scale.gif"
            />
            <p class="img__description">Calorie Calculator</p>
            </div>
          </Link>
        </div>
      </div>
    </div>

   
  );
}

export default Home;
