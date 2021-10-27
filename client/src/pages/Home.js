import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Home() {
  return (
    <div className="parallax">
      <img class = "image-1" src ="https://static.wixstatic.com/media/3cd817_01efa93dfc2b4b77808f98f8915ba723~mv2.gif"></img>
      <div className="images-home">
      <img className="image-3" src="https://static.toiimg.com/thumb/81551320.cms?width=680&height=512&imgsize=967762"></img>
      <img className= "image-4" src="https://domf5oio6qrcr.cloudfront.net/medialibrary/2293/l0908b16207233934035.jpg"></img>
     <img className="image-2" src ="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
     </div>
    </div>

   
  );
}

export default Home;

