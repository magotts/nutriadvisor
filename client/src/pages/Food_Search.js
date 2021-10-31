import React, { useState } from "react";
import axios from "axios";
import Foods from "../components/Foods";
import FoodAlert from "../components/FoodAlert";
import Sidebar from "../components/Sidebar";
import "../styles/foodsearch.css";

const Food_Search = () => {
  const [query, setQuery] = useState("");
  const [foods, setFoods] = useState([]);
  const [alert, setAlert] = useState("");

  const params = {
    api_key: "XLteLe4WpgqUsGXf9DauPvWy1A7Hmdy7wWcAwghR",
    dataType: ["Survey (FNDDS)"],
    pagesize: 5,
  };
  const api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&pageSize=${encodeURIComponent(
    params.pagesize
  )}&api_key=${encodeURIComponent(params.api_key)}`;

  const getFood = async () => {
    if (query !== "") {
      const result = await axios.get(api_url);
      setFoods(result.data.foods);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form.");
    }
  };

  const onChange = (event) => {
    setQuery(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getFood();
  };

  return (
    <div
      style={{
        display: "flex",
        padding: 0,
        margin: 0,
        paddingTop: "98px",
      }}
    >
      <Sidebar />
      <div
        className="form_center"
        style={{
          marginLeft: "20%",
          color: "#a2cdcb",
          height: "100%",
        }}
      >
        <h1>Food Search</h1>
        <form onSubmit={onSubmit}>
          {alert !== "" && <FoodAlert alert={alert} />}
          <div className="search-div">
            <input
              className="search-form"
              type="text"
              placeholder="Search Food"
              autoComplete="off"
              onChange={onChange}
              value={query}
            />
            <input
              className="search-button"
              type="submit"
              value="Search Food"
            />
          </div>
        </form>
        <div className="foods">
          {foods !== [] &&
            foods.map((foods, i) => <Foods key={i} foods={foods} />)}
        </div>
      </div>
    </div>
  );
};

export default Food_Search;
