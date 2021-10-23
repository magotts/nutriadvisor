import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


function Login() {
  useEffect(() => {
    fetchQuotes();
  }, []);

  const [quotes, setQuotes] = useState([]);


  const fetchQuotes =  async () => {
    const data1= await fetch('https://type.fit/api/quotes');
    const quotes = await data1.json();
    console.log("Quotes is", quotes);
    setQuotes(quotes);
  }

  const randomQuote = function (num) {
    num = (Math.floor(Math.random() * 6) + 1);
    return num;
  }

  return (
    <>
    <div>
     <h1>Quotes List</h1>
     <h1>Random number is {randomQuote()}</h1>
    
    {quotes.map(quote => (
      <h1>Quotes: {quote.text} by {quote.author}</h1>
    ))}
   
   
    </div>
    </>
  );

}

export default Login;