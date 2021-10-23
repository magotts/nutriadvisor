import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { get } from "request";

function Home() {

const [query, setQuery] = useState("i ate 1 avocado");


useEffect(() => {
  fetch("https://trackapi.nutritionix.com/v2/search/item?food_name={setQuery}", {
  // method: 'POST',
  headers: {  
    'Content-Type': 'application/json',
    'x-app-id': '48c8177b',
    'x-app-key': '07c7f8e5e27aa7080f31a1f97e212e3f'
  }
})   
  .then(response => response.json())
  .then((responseData) => {
    console.log("DATA is", responseData);
    setQuery(responseData.id);
  })
  .catch(error => setQuery({ error }));
}, []);

function handleChange(event) {
  setQuery(event.target.value);
}

function handleSubmit(event) {
  alert('A name was submitted: ' + query);
  event.preventDefault();
}


const getdata = () => {
  const url = ('https://trackapi.nutritionix.com/v2/search/item?nix_item_id=513fc9e73fe3ffd40300109f');
  axios.get(url)
  .then((data) => {
    console.log(data.data);
    setQuery(data.data);
  })
}

const postdata = () => {
  const url = ('https://trackapi.nutritionix.com/v2/natural/nutrients');
  const params = { query: "1 cup chicken noodle soup" };
  axios.post(url, params)
  .then((res) => {
    console.log(res.data);
    setQuery(res.data);
  })
}

// const apiEndpoint = `https://trackapi.nutritionix.com/v2/natural/nutrients`;
//       const params = { query: "1 cup chicken noodle soup" };
//       const { data: nutrientInfo } = await axios.post(apiEndpoint, params, {
//         headers,
//       });
//       updateFocusedFood(nutrientInfo);

  return (
    <>
    
    <div>
     {/* <h1>Random number is {randomQuote()}</h1> */}
    
    {/* {items.map(item => (
      <h1>Item Name: {item.item.name} [{item.item.description}]</h1>
    ))} */}
    
   <form onSubmit={handleSubmit}>
  <label>
    Search food:
    <input type="text" name="query" value={query} onChange={handleChange} onClick={() => postdata()}/>
  </label>
      <input type="submit" value="Submit" />
   </form>
    <h4> {query} </h4>

    </div>
    </>
  );
}

export default Home;