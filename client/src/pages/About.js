import React from "react";
import { Link } from "react-router-dom";


function About() {
  return (
    <div>
      <div >
        <h1 class="heading">About NutriAdvisor</h1><br />
        <div className="Bothimages"><img src="https://www.aipt.edu.au/sites/default/files/Creating%20a%20Diet%20Plan.jpg"></img><br />
          <img src="https://www.aipt.edu.au/sites/default/files/Studying%20to%20Be%20a%20Nutrition%20Advisor.jpg"></img></div><br/><br /><br/>

        <b><p className="leftalign">There is often a degree of confusion surrounding the differences between dietitians, nutrition advisors and other professionals working in the industry.<br /> While dieticians more commonly work in community-based settings and in industry advisory capacities, nutrition advisors usually work with clients one-on-one, providing the following services:</p></b>

        <div className="Paragraph">
          <ul>
            <li>  Developing personalised diet and exercise plans for clients </li>
            <li>Supporting clients through regular engagement</li>
            <li> Tracking clients’ progress and motivating them to stay on course.</li>
            <li>Recommending courses of action or referring other professionals for further diagnosis or treatment if problems exist.</li>
            <li> Developing personalised diet and exercise plans for clients.Supporting clients through regular engagement. </li>
          </ul>
        </div>



      </div>
    </div>
  );
}

export default About;