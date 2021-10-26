import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Home() {
  return (
    <div class="parallax">

      <img class = "image-1" src ="https://static.wixstatic.com/media/3cd817_01efa93dfc2b4b77808f98f8915ba723~mv2.gif"></img>
      <img class="image-3" src="https://www.pennmedicine.org/-/media/images/miscellaneous/fitness%20and%20sports/women_exercising.ashx"></img>
      
     

     <img class="image-2" src ="https://post.healthline.com/wp-content/uploads/2019/09/granola-breakfast-fruit-healthy-1296x728-body2-1296x728.jpg"></img>
     <img class = "image-4" src="https://domf5oio6qrcr.cloudfront.net/medialibrary/2293/l0908b16207233934035.jpg"></img>
      
    
    </div>
  );
}

export default Home;

