import React, { useState } from 'react';


fetch("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=10", {
  method: 'POST',
  headers: {  
    'X-Mashape-Key': 'required',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
    'x-app-id': 'NUT_API_ID',
    'x-app-key': 'NUT_API_KEY' 
  }
})   
  .then(response => response.json())
  .then((responseData) => {
    setState({ author: responseData});
  })
  .catch(error => this.setState({ error }));

  export default function Navbar(props) {  

  return (

  )

}