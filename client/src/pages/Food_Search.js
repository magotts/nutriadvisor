import React, {useState} from "react";
import axios from 'axios';
import Foods from "../components/Foods";
import FoodAlert from "../components/FoodAlert";

const Food_Search = () => {
  const [query, setQuery] = useState("");
  const [foods, setFoods] = useState([]);
  const [alert, setAlert] = useState("");
  // const [ENERC_KCAL, setENERC_KCAL] = useState({});
  // const [CHOCDF, setCHOCDF] = useState({});
  // const [CHOLE, setCHOLE] = useState({});
  // const [PROCNT, setPROCNT] = useState({});
  // const [SUGAR, setSUGAR] = useState({});
  

  // const url = `https://api.edamam.com/api/nutrition-data?app_id=c8a4a30f&app_key=26a5e1a5eb3da0f49da8f22237361970&nutrition-type=logging&ingr=${query}`;

  const params = {
    api_key: 'XLteLe4WpgqUsGXf9DauPvWy1A7Hmdy7wWcAwghR',
    dataType: ["Survey (FNDDS)"],
    pagesize: 5
    }
  const api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&pageSize=${encodeURIComponent(params.pagesize)}&api_key=${encodeURIComponent(params.api_key)}`;

  const getFood = async() => {
    if (query !== "") {
      const result = await axios.get(api_url);
      // const result = await axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query=${query}`,
      //   {headers: {
      //     'x-app-id': '5ea2186d',
      //     'x-app-key': '29aedbe15bbf7105ff8daa4a9b94b2b5'
      //   }});
        console.log(result);
        setFoods(result.data.foods)
        setQuery("");
  
      // setENERC_KCAL(result.data.totalNutrients.ENERC_KCAL)
      // setQuery("");
  
      // setCHOCDF(result.data.totalNutrients.CHOCDF)
      // setQuery("");
  
      // setCHOLE(result.data.totalNutrients.CHOLE)
      // setQuery("");
  
      // setPROCNT(result.data.totalNutrients.PROCNT)
      // setQuery("");
  
      // setSUGAR(result.data.totalNutrients.SUGAR)
      // setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form.");
    }
  };

  const onChange = (event) => {
    setQuery(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    getFood();
  };

  return (
    <div>
    <h1>Food Search</h1>
    <form onSubmit={onSubmit}>
      {alert !== "" && <FoodAlert alert={alert} />}
      <input
      type="text"
      placeholder="Search Food"
      autoComplete="off"
      onChange={onChange}
      value={query}
      />
      <input type="submit" value="Search Food"/>
    </form>
    <div>
      {foods !== [] && foods.map( foods => <Foods foods = {foods} />)}
    </div>

    {/* <div>
      {ENERC_KCAL !== {} && Object.keys(ENERC_KCAL).map((key, index)=><h2>{ENERC_KCAL[key]}</h2>)}
    </div>
    <div>
      {CHOCDF !== {} && Object.keys(CHOCDF).map((key, index)=><h2>{CHOCDF[key]}</h2>)}
    </div>
    <div>
      {CHOLE !== {} && Object.keys(CHOLE).map((key, index)=><h2>{CHOLE[key]}</h2>)}
    </div>
    <div>
      {PROCNT !== {} && Object.keys(PROCNT).map((key, index)=><h2>{PROCNT[key]}</h2>)}
    </div>
    <div>
      {SUGAR !== {} && Object.keys(SUGAR).map((key, index)=><h2>{SUGAR[key]}</h2>)}
    </div> */}
    </div>
  );
}

export default Food_Search;
